FROM node:14.18.2-alpine
WORKDIR /app

COPY ["package.json", "package-lock.json", "./", "./"]
RUN npm i typeorm pg
RUN cd database && ls

COPY [".env", "/app/"]
