FROM tomcat:8.0-alpine
LABEL maintainer="Jyoti"
USER root
COPY tomcat-users.xml /usr/local/tomcat/conf/
COPY build/ /usr/local/tomcat/webapps/build/
EXPOSE 8080
CMD ["catalina.sh", "run"]
