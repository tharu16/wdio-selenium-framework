pipeline {
	agent any

	stages {
		stage('Build') {
			steps {
				echo 'Building...'
				npm install
			}
		}
		stage('Test') {
			steps {
				echo 'Testing...'
				npm run test
			}
		}
	}
}