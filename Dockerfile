#FROM nginx:alpine
#COPY /dist/tautology-app /usr/share/nginx/html
#EXPOSE 80

FROM node:16.13.1-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install --legacy-peer-deps
COPY src src
COPY *.json .
COPY *.js .

CMD ["npm", "run", "start"]
