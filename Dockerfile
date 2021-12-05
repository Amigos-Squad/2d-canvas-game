FROM node:16

WORKDIR /user/game

COPY . .

COPY package*.json ./

RUN npm install; npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]
