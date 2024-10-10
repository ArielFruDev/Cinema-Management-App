# Use an official Node.js LTS version
FROM node:latest

# Set the working directory
# WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (adjust if necessary)
EXPOSE 8000

# Start the application
CMD [ "node", "main.js" ]
