FROM node:20.5-alpine3.17 as build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

# Create a new Docker image and name it "production"
FROM node:20.5-alpine3.17 as production

WORKDIR /app

# Copy the built application from the "build" image into the "production" image
# This will only copy whatever is in the .output folder and ignore useless files like node_modules!
COPY package.json ./
COPY --from=build /app/.output /app/.output
COPY --from=build /app/.nuxt /app/.nuxt

EXPOSE 3000

CMD yarn start
