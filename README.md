

## Objective

Your task is to build a simple application deployment pipeline for a Fantasy-themed web app using Docker and Kubernetes, demonstrating your understanding of system administration and DevOps practices.

## Brief

You are the system admin for a company that is creating a new Fantasy-themed web app. Your duty is to set up a continuous deployment pipeline for this application. 

The application is split into two parts: 

1. A server-side application that exposes a RESTful API.
2. A client-side application that consumes the API.

### Task 1: Dockerizing the Applications

1. Create a Dockerfile for the server-side application. This application runs on Node.js.
2. Create a Dockerfile for the client-side application. This application is a simple static website.
3. Write a docker-compose.yml file that is capable of spinning up both applications together, allowing the client-side application to communicate with the server-side application.

### Task 2: Kubernetes Deployment

1. Write a Kubernetes Deployment configuration for the server-side application. This should include a Service to expose the application.
2. Write a Kubernetes Deployment configuration for the client-side application. This should include a Service to expose the application.
3. Ensure that the client-side application can communicate with the server-side application.

### Task 3: Continuous Deployment Pipeline

1. Write a script to automate the process of building the Docker images, pushing them to a Docker registry, and deploying them to a Kubernetes cluster.
2. The script should only deploy when changes are made to the master branch.

### Testing Requirements

Please ensure that your solution works by running your script and confirming that the applications are deployed and able to communicate with each other.

### Evaluation Criteria

- Correct use of Docker and docker-compose.
- Correct use of Kubernetes objects.
- Ability to automate the deployment process.
- Understanding of continuous deployment concepts.

### CodeSubmit 

Please organize, design, test, and document your code as if it were going into production - then push your changes to the master branch.

Have fun coding! 🚀

The LINAGORA Team

