FROM mongo:latest

LABEL maintainer = "egormaksimchuk@gmail.com"

COPY setup-db.sh /docker-entrypoint-initdb.d/
RUN chmod 755 /docker-entrypoint-initdb.d/*.sh

EXPOSE 27017