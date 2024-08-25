const path = require('path');
require('dotenv').config();
const fs = require('fs');
const ejs = require('ejs');
const manifestData = require('../assets/manifest');

const cssRegex =
    /(<link\s+href=\")([a-zA-Z\/\.0-9]+)(\"\s+rel=\"stylesheet\">)/g;
const jsRegex = /(<script\s+src=\")([\/a-zA-Z.0-9]+)(\"><\/script>)/g;

const getFileList = (data, regex) => {
    let match = data.matchAll(regex);
    let fileList = [];
    for (let item of match) {
        fileList.push(item[2].replace(/^\//, ''));
    }
    return fileList;
};
const getScript = (data) => {
    let regex = /(<script>)(.+)(<\/script>)/;
    let match = data.match(regex);
    let script = '';
    if (match) {
        script = match[2].replace(/(<\/script><script src=\".+\">)/, '');
    }
    return script;
};
const readFile = (file, action) => {
    fs.readFile(path.resolve(__dirname, file), 'utf8', (err, data) => {
        if (err) {
            console.log(err.message);
        } else {
            action(data);
        }
    });
};
const writeFile = (file, data) => {
    fs.writeFile(path.resolve(__dirname, file), data, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(`${file} saved.`);
        }
    });
};

const rewriteIndex = (css, js) => {
    readFile('./views/pages/index.ejs', (data) => {
        let viewsPath = path.resolve(__dirname, './views/') + '/';
        let html = ejs.render(data, {
            rootPath: viewsPath,
            icons: manifestData.icons,
            process: {
                env: process.env,
            },
            assets: {
                css: css,
                js: js,
            },
        });
        writeFile('./public/index.html', html);
    });
};

readFile('./public/index.html', (data) => {
    writeFile('./public/setup.js', getScript(data));
    let css = getFileList(data, cssRegex);
    let js = ['setup.js', ...getFileList(data, jsRegex)];
    rewriteIndex(css, js);
});
