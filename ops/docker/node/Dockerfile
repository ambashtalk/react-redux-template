FROM node:18.4.0-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .
RUN npm run build

ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

CMD [ "npm", "start" ]