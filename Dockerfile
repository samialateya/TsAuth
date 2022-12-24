# pull node image from docker hub
FROM node:16-alpine as debug

# set working directory in the container
WORKDIR /usr/app

# copy package.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install
RUN npm install -g nodemon

# copy all the files to the working directory
COPY . .

# set environment variables
ENV PORT=3000
ENV APP_NAME=TS-Auth

# Expose port 3000
EXPOSE 3000

# command to run on container start
CMD ["npm", "run", "dev"]


# pull node image from docker hub
FROM node:16-alpine as prod

# set working directory in the container
WORKDIR /usr/app

# copy package.json to the working directory
COPY package*.json ./

# install dependencies
RUN npm install --production

# copy all the files to the working directory
COPY . .

# Expose port 3000
EXPOSE 3000

# command to run on container start
CMD ["npm", "run", "start"]