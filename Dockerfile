FROM node:18-alpine3.14 

RUN npm install nodemon -g

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["nodemon", "index.js"]
