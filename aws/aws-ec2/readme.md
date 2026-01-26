Launch an EC2 Instance (Ubuntu Server)
 .EC2 → Launch Instance
 .Choose Name & OS, : res : Name: devops-class-server, AMI (OS): Ubuntu 22.04 LTS,
 .Choose Instance Type: Instance type: t2.micro,
 .Create / Select Key Pair
 .Key pair download bcuz is used for secure SSH login.

Connect to AWS EC2 Server Using SSH
 .open terminal,  
 .Move to Key File Directory,
 .run this command ==>: chmod 400 devops-key.pem,
 .run this command ==>: ssh -i devops-key.pem ubuntu@13.234.xx.xx,

Verify Server Login
 .run this command ==>: whoami : response ==>: ubuntu
 .run this command ==>: hostname : response ==>:

 Install Node.js (LTS version)
 .curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
 .sudo apt install -y nodejs,
 Install Git on Server
 .sudo apt install git -y
 Clone Backend Project
 .git clone https://github.com/username/backend-project.git
 .cd backend-project
 Setup Environment Variables
 Create .env file, run this ==> nano .env
 Install Project Dependencies run this ==> npm i 
 Run Backend Application (Normal Run)
 Before PM2, test app normally, run this ==> node app.js
 Install PM2 (Process Manager)
 .install globally run this ==> sudo npm install -g pm2
 Run Backend Using PM2, run this ==> pm2 start app.js
 Check Running Processes, run this ==> pm2 list
 Save PM2 Process, run this ==> pm2 save
 Enable PM2 on Server Startup, run this ==> pm2 startup
 Verify 24/7 Running
 .Restart server (optional test), run this==> sudo reboot
 .After reconnecting, run this ==> pm2 list, If app is still running → setup is successful 🎉


 



