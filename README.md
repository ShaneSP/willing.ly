# Willing.ly - URL Shortener (@1.0.0)
Willing.ly is a simple RESTful API for generating and storing abbreviated URLs. URLs are stored via MongoDB server and accessible by each unique user. Once logged in, users may add, delete, update, and navigate their will.ing links.

Willing.ly is built on Meteor. Follow the the instructions below to install Meteor (these instructions assume that you have Node.js and git installed on your machine):

Windows:
1. Install [7-Zip](http://www.7-zip.org/) or any other program that knows how to extract `tar.gz` files.
2. Download the installation archive from https://packages.meteor.com/bootstrap-link?arch=os.windows.x86_32.
3. In a command prompt, run `echo %LocalAppData%\.meteor` -- this is the directory in which Meteor should be installed.
4. Extract the installation archive into the directory above.
5. Add this directory to your PATH environment variable.
6. You should now be able to open a new command prompt and run `meteor`. Some versions of Windows may require restarting your machine first.

Mac:
Run the following command in your terminal to install the latest official Meteor release:
`curl https://install.meteor.com/ | sh`

**Note:** To start MongoDB server and run app, run `npm install` followed by `npm start`, then open `localhost:3000`.