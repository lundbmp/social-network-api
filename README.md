# Social Network API
## Description
This project showcases the integration of Node.js, MongoDB(throught the use of Mongoose), and Express.js. This project allows the user to add new users, add friends, thoughts, and reactions to thoughts.

## How to Install
To use this project it must be downloaded from [my github repository](https://github.com/lundbmp/social-network-api). After downloading the repository go to the root directory and in your command prompt type `npm i` to install all needed dependencies. From there you can enter `npm start` to boot up the program and you can interact with the api using your API testing software of choice.

## How to Use the Project
To use this project, you will need to access everything via API routes. 
### User
You can retrieve all users and create a new user by using the following route: `http://localhost:3001/api/users/`
    The format to create a user is:
    ```
    {
        "username": "desired username",
        "email": "desired email"
    }
    ```
You can also update, delete, and get a single user with `http://localhost:3001/api/users/:id`

### Thoughts and Reactions
You can retrieve all thoughts and create a new thought by using: `http://localhost:3001/api/thoughts`
    The format to create a thought is:
    ```
    {
        "username": "username",
        "thoughtText": "desired text"
    }
    ```
You can also update, delete, and get a single thought by using: `http://localhost:3001/api/thoughts/:id`

You can add a reaction by using: `http://localhost:3001/api/thoughts/:thoughtId/reactions`

As well as deleting a reaction with: `http://localhost:3001/api/thoughts/:thoughtId/reactions/:reactionId`

### Friends
You can add and delete friends with: `http://localhost:3001/api/users/:userId/friends/:friendId`

[Here is a demo you can watch.](https://drive.google.com/file/d/1tFw2ttcBoKiVSgWFymE_2NGn1fWQADYt/view)


## Credits
This project was completed by Michael Lundberg