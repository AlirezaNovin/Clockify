FROM phpmyadmin/phpmyadmin
ENV PMA_HOST=mysql
ENV PMA_PORT=3306

FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=password

COPY ./create_tables.sql /docker-entrypoint-initdb.d/