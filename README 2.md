# Canine-Tracker

SSH into the AWS Cloud EC2 instance using the command:  
    `ssh -i iot-canine.pem ec2-user@ec2-18-219-108-159.us-east-2.compute.amazonaws.com/`  
Note: .pem file not shared for security purposes  

Clone the repository on the ec2 machine using:  
    `git clone https://github.com/Neelkanth7/Canine-Tracker.git`   

Navigate to the project directory:  
    `cd Canine-Tracker`  

To run this project, you need to have the following dependencies:  
    - Install nvm  
        `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`  
    - Set the Node.js version to 10 for your project   
        `nvm use 10`  
    - Change the version of npm to 5 for your project  
        `npm install -g npm@5`  
    - Install Bootstrap 5 (alpha)  
        `npm install bootstrap@5.0.0-alpha1`  
    - Install SASS  
        `npm install node-sass@4.14.1`  
    - Install React Router  
        `npm install --save react-router-dom`  
    - Install Material-ui  
        `npm install @material-ui/icons`  
        `npm install @material-ui/core`  
    - Install the other required node packages for the project:  
        `npm install`  

To start the app, run:  
        `npm start`  

To start the app as a background process, you can use a process manager like PM2. Here are the steps to do that:  
    - Install PM2 globally by running the following command in your terminal:  
        `npm install pm2 -g`  
    - Navigate to the root directory of your React app.  
    - Start your React app as a background process by running the following command:  
        `pm2 start npm --name "Canine-Tracker" -- start`  
    This will start your app & can be accessed from your browser at http://ec2-18-219-108-159.us-east-2.compute.amazonaws.com:3000.  
    - You can check the status of your app by running:  
        `pm2 status`  
    - To stop your app, you can run:  
        `pm2 stop Canine-Tracker`  






