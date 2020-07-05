FROM maven as build
COPY . /
RUN mvn clean  package 
FROM adoptopenjdk/openjdk11:alpine
COPY --from=build /target/role-service-1.0.0.jar /
CMD ["java","-jar","role-service-1.0.0.jar"]
expose 80

