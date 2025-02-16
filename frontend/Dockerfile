# Use the official Nginx Alpine image as the base image
FROM nginx:alpine
# Set the working directory to Nginx's default HTML directory
WORKDIR /usr/share/nginx/html
# Remove all existing files from the HTML directory
RUN rm -rf ./*
# Copy the "public" directory from the host to the container's HTML directory
COPY public /usr/share/nginx/html
# Expose port 80 to allow incoming HTTP traffic
EXPOSE 80
# Start Nginx to keep the container running
CMD ["nginx", "-g", "daemon off;"]
