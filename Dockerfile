FROM node:16-alpine
RUN apk update && apk add --virtual build-dependencies build-base gcc wget git && npm install -g --force yarn 

WORKDIR /usr/src/app
COPY yarn.lock package.json ./
RUN yarn 
COPY . .

RUN yarn build
RUN yarn cache clean
RUN yarn install --production

EXPOSE 5000
CMD ["yarn", "server"]
