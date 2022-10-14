FROM node:16-alpine3.15
USER client
WORKDIR /user/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]