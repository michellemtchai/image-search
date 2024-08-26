#! /bin/sh
cd ./frontend
yarn install
yarn build

cd ../
cp -R ./frontend/build/* ./public
node ./docker/deploy.js
