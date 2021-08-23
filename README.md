To start a development environment:
Clone the repository at :https://github.com/AmMonsoon/ReactAppClone
Run the command "npm install" from the project root in your terminal to install dependencies
Run the command "npm start" to launch the server
Navigate to the localhost port specified in config/index.js

Users
-User functionality including sign-up/login and authorization is implemented throughout the site
-Bcrypt hashing a is used to maintain password security
-Forms are protected through Csurf protection

Albums
- Albums display when a user is selected and users are able to create a new album
while adding a title and image to the album cover
-Users are able to remove albums or update the albums title and image URL

Images
- Images display when an album is selected and users are able to post a new image
while adding a caption to the image and adding an imageURL
 - Authenticated user can update/remove an image
 -When a user clicks on an image they are redirected to an image update form
 
