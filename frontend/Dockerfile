# Use the official Nginx image
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the static website files (from "public" directory in your project)
COPY public /usr/share/nginx/html

# Expose port 80 for serving the website
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
