FROM node:14

WORKDIR /user/2d-canvas-game

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD npm run serve