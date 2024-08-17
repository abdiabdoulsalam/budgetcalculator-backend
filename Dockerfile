# Use the official Node.js image as a base
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy necessary files to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build app
RUN npm run build

# Expose the port specified via an argument (default: 3000)
ARG PORT=3000
EXPOSE ${PORT}

# Command to start the application
CMD ["npm", "run", "start:prod"]