### STAGE 1: Build ###
FROM node:lts-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

RUN npm install -g @angular/cli

COPY . .

RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.d/default.conf

COPY --from=build /app/dist/eside-frontend/browser /usr/share/nginx/html

EXPOSE 80
