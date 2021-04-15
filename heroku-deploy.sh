#! /bin/sh
RUN yarn global add react-scripts
RUN yarn install --production

cd ./frontend
RUN yarn install --production
RUN yarn build

cd ../
RUN mv /app/frontend/build/* /app/public
RUN node /app/docker/deploy.js
RUN rm .env
