FROM node:16-alpine3.15
RUN addgroup -S app && adduser -S app -G app
USER app
WORKDIR /user/src/app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3006
CMD ["yarn", "start"]