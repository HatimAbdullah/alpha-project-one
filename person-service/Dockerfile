FROM maven as build

COPY . /
RUN mvn clean package

FROM adoptopenjdk/openjdk11:alpine

COPY --from=build /target/person-service-1.0.0.jar /

CMD ["java", "-jar", "person-service-1.0.0.jar"]

EXPOSE 80
