pipeline {

    agent any

    environment {
        DOCKER_USER = "gani4152"
        IMAGE_BACKEND = "employee-management-backend"
        IMAGE_FRONTEND = "employee-management-frontend"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage('Docker Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t $DOCKER_USER/$IMAGE_BACKEND:v1 .'
                }
            }
        }

        stage('Docker Build Frontend') {
            steps {
                dir('frontend/employee-management-ui') {
                    sh 'docker build -t $DOCKER_USER/$IMAGE_FRONTEND:v1 .'
                }
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub',
                        usernameVariable: 'USER',
                        passwordVariable: 'PASS'
                    )
                ]) {

                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    '''
                }
            }
        }

        stage('Push Backend') {
            steps {
                sh 'docker push $DOCKER_USER/$IMAGE_BACKEND:v1'
            }
        }

        stage('Push Frontend') {
            steps {
                sh 'docker push $DOCKER_USER/$IMAGE_FRONTEND:v1'
            }
        }

    }

    post {
        success {
            echo "Pipeline Completed Successfully"
        }

        failure {
            echo "Pipeline Failed"
        }
    }

}
