FROM node:16-alpine3.15
USER admin
WORKDIR /user/src/app
COPY package.json yarn.log ./
RUN yarn install --frozen-lockfile
COPY . .
EXPOSE 3006
CMD [ "yarn","start" ]