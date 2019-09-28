FROM mysql:5
# nombre de la DB y pass para root
ENV MYSQL_DATABASE microservices
ENV MYSQL_ROOT_PASSWORD=root

# Correr Scripts
COPY ./sql-scripts/ /docker-entrypoint-initdb.d/
