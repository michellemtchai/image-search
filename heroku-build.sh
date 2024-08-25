#! /bin/sh
cd ./frontend
yarn install --production
yarn build

cd ../
mv ./frontend/build/* ./public
node ./docker/deploy.js
