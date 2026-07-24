pipeline {

    agent any

    tools {
        maven 'Maven'
        jdk 'Java21'
    }

    stages {

        stage('Checkout Source') {

            steps {

                git branch: 'main',
                url: 'https://github.com/Ganesh4152/employee-management.git'

            }

        }

        stage('Build Backend') {

            steps {

                dir('backend') {

                    sh 'mvn clean package'

                }

            }

        }

        stage('Build Docker Images') {

            steps {

                sh 'docker compose build'

            }

        }

        stage('Stop Old Containers') {

            steps {

                sh 'docker compose down'

            }

        }

        stage('Deploy Application') {

            steps {

                sh 'docker compose up -d'

            }

        }

    }

}
