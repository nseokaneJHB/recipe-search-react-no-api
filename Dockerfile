FROM node:14.11.0-alpine3.10

WORKDIR /app

COPY . .

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install -g serve

# add app
COPY . ./

# start app
RUN npm run build

CMD ["serve", "-s", "build", "-l", "4000"]