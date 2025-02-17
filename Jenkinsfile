    pipeline {
        agent any

        stages {
            stage('Checkout code') {
                steps {
                    checkout scm
                }
            }

            stage('Log in to Docker Hub') {
                steps {
                    script {
                        withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                            sh """
                            echo \$DOCKER_PASSWORD | docker login --username \$DOCKER_USERNAME --password-stdin
                            """
                        }
                    }
                }
            }

            stage('Build and push server-side Docker image') {
                steps {
                    script {
                      withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                        docker build -t \$DOCKER_USERNAME/server-side:latest ./backend
                        docker push \$DOCKER_USERNAME/server-side:latest
                        """
                      }
                    }
                }
            }
    
            stage('Build and push client-side Docker image') {
                steps {
                    script {
                      withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                        docker build -t \$DOCKER_USERNAME/client-side:latest ./frontend
                        docker push \$DOCKER_USERNAME/client-side:latest
                        """
                      }  
                    }   
                }
            }
            stage('Deploy to Kubernetes') {
                steps {
                    script {
                      sshagent(['vm_jenkins']) {
                        sh """
                        ssh -o StrictHostKeyChecking=no vagrant@192.168.163.32 'kubectl apply -f ./k8s/server-deployment.yml'
                        ssh -o StrictHostKeyChecking=no vagrant@192.168.163.32 'kubectl apply -f ./k8s/client-deployment.yml'
                        """
                    }
                    }
                }
            }
        }    
    }