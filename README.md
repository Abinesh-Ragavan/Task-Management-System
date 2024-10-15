Live Demo Link : http://employeemsdemo.s3-website.eu-north-1.amazonaws.com

GitHub Link:  https://github.com/Abinesh-Ragavan/Task-Management-System


 Introduction:
This project is about Task Management Application designed to create, read, update,and delete tasks which involves organizing, tracking and managing the tasks efficiently to achieve specific goals within a project or organization. 
 Technologies Used:
Front End: Html,Css,JavaScript,React.js
Back End: Java, Spring Boot 
Database: MySQL
Hosting: AWS EC2, RDS(Amazon Relational Database Service), S3
Tools:Postman,Sql workbench,Visual studio,Intellij Ide,Github
Project Setup
1) Clone the Repository:
git clone https://github.com/Abinesh-Ragavan/Task-Management-System
cd task-management-app
2)Setting Up the Development Environment
Frontend:
cd task_frontend-demo
npm install
npm run
Backend:
cd spring-task-demo
mvn clean install
mvn spring-boot:run
3)Database Setup
Create a new MySQL database named task_management.
Update the application.properties file in the backend with your database credentials.
4)Steps to Deploy
Frontend:
Build the react Application  =>  npm run build
Upload the contents of the Build folder to your S3 bucket.
Backend:
mvn clean package
Upload JAR to EC2
Command :
scp -i /path/to/your-key-pair.pem target/springbootapp.jar ec2-user@your-ec2-instance-public-dns:/home/ec2-user/
After setting up the ec2 Instance and installing JDK in the instance and using the  spring      boot jar in the ec2 instance run the application in the nohup mode to run the application continuously.
Command :
nohup java -jar springbootapp.jar > app.log 2>&1 &
 Configure your RDS instance and ensure whether it is accessible by your EC2    instance.

