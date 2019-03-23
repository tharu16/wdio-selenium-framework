pipeline {
	agent any

	tools {nodejs "node"}

	stages {
		stage('Build') {
			steps {
				echo 'Building...'
				//sh'npm install'
				bat 'run-test.bat'
			}
		}
		stage('Test') {
			steps {
				echo 'Testing...'
				//sh 'npm run test'
			}
		}
	}
}