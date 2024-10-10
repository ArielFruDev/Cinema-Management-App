# Use an official Node.js LTS version
FROM node:16-alpine

# Set the working directory
# WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (typically 3000 for React apps)
EXPOSE 3000

# Start the application
CMD [ "npm", "start" ]
