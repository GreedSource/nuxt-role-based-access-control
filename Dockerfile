FROM node:20.5-alpine3.17 as production

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

RUN yarn build

CMD ["yarn", "start"]
