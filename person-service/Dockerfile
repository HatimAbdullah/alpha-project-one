FROM maven

COPY . /people-service
WORKDIR /people-service
RUN mvn clean package && ls target

CMD ["java", "-jar", "target/person-service-1.0.0.jar"]

