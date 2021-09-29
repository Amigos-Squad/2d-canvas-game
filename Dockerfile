FROM node:14

WORKDIR /user/game

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run serve