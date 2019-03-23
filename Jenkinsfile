pipeline {
	agent any

	tools {nodejs "node"}

	stages {
		stage('Build') {
			steps {
				echo 'Building...'
				//sh'npm install'
				sh 'npm config ls'
			}
		}
		stage('Test') {
			steps {
				echo 'Testing...'
				sh 'npm run test'
			}
		}
	}
}