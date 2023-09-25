# Use an official web server image as the base image (e.g., Nginx)
FROM nginx:latest

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy your static HTML files to the web server's document root
COPY . /usr/share/nginx/html

# Expose the port that Nginx will listen on (usually 80)
EXPOSE 9000

# Start the Nginx web server when the container is run
CMD ["nginx", "-g", "daemon off;"]
