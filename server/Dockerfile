FROM node:16-alpine3.15
USER server
WORKDIR /user/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 4000
CMD ["yarn", "dev"]