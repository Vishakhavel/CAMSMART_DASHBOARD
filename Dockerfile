FROM node:13.12.0-alpine as frontend-build
WORKDIR /fullstack/frontend

COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./
RUN npm run build

FROM nginx:1.12-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend-build /fullstack/frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
