FROM mhart/alpine-node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 5173

CMD ["yarn", "start"]

