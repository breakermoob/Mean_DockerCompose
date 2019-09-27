# Create mysql server based on the official image from the dockerhub
FROM mysql:5
# Add a database & root password
ENV MYSQL_DATABASE microservices
ENV MYSQL_ROOT_PASSWORD=root
# optionnaly, run initial scripts for creating tables 
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
