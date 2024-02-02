FROM node:8.14-alpine
LABEL maintainer="egormaksimchuk@gmail.com"
ENV GEO_SRV="geography-server:4000"
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . .
EXPOSE 3000
USER 1
CMD ["npm", "start"]