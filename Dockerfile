# Use an official Node.js image as the build environment
FROM node:latest AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files to the container
COPY . .

# Build your Vite app
RUN npm run build

# Use an official NGINX image as the base image
FROM nginx:latest

# Remove the default NGINX configuration
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy your custom NGINX configuration file
COPY nginx.conf /etc/nginx/conf.d/

# Copy the built app from the previous build stage
COPY --from=build /app/dist/ /usr/share/nginx/html

# Expose port 80 to outside traffic
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]