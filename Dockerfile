# Use a Node.js base image for development
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port for the Nest.js application
EXPOSE 3000

# Specify the command to run your Nest.js application in watch mode
CMD ["npm", "run", "start:dev"]
