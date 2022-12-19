FROM node

WORKDIR /counter

COPY package.json /counter

RUN npm install

COPY . .

ENV PORT 3100

EXPOSE $PORT

CMD ["npm", "run", "start"]