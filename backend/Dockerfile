# Use the official Node.js 16 image as the base image
FROM node:16
# Set the working directory inside the container to /app
WORKDIR /app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies using npm
RUN npm install
# Copy the rest of the application files to the container
COPY . .
# Expose port 3000 for the application to be accessible
EXPOSE 3000
CMD ["npm", "start"]
