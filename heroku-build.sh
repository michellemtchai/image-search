#! /bin/sh
cd ./frontend
yarn install --production
yarn build

cd ../
cp -R ./frontend/build/* ./public
node ./docker/deploy.js
