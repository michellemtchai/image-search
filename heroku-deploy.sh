#! /bin/sh
cp ./docker/prod.env .env

yarn install --production

cd ./frontend
yarn install --production
yarn build

cd ../
mv ./frontend/build/* ./public
node ./docker/deploy.js
rm .env
