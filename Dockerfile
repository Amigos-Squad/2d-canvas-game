FROM node:16

WORKDIR /user/game

COPY package*.json ./

RUN npm install; npm run build

COPY . .

EXPOSE 4000

CMD ["npm", "run", "start"]
