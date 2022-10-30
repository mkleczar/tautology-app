FROM nginx:alpine
COPY /dist/tautology-app /usr/share/nginx/html
EXPOSE 80
