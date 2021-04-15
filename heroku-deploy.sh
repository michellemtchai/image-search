#! /bin/sh
cp ./docker/prod.env .env

yarn global add react-scripts
yarn install --production

cd ./frontend
yarn install --production
yarn build

cd ../
mv /app/frontend/build/* /app/public
node /app/docker/deploy.js
rm .env
