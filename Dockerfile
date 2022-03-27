FROM node:14-alpine
WORKDIR /monsterra
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]