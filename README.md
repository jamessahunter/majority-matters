# Majority Matters
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

[Majority Matters](https://majority-matters-080972dae02f.herokuapp.com/)

![Alt text](<public/images/Majority Matters Playthrough.gif>)

## Description 

"Majority Matters" is a full stack application that lets users rank answers to a question and presents them with a score on how their answers matched with the overall popularity of the answer.
Once signed in, users can play either as a single player or play in multiplayer mode.

### Single player mode [MVP]

To play single player the user must sign up or log in. Once logged in, users get a question with 8 possible answers that they get to rank with what they think is the most popular answer to the least popular.
Users can drag and drop the answers in the order think would be the most popular to the least popular.

After ranking the answers, the users will be given scores based on how many answers were matched to the answers ranks stored in the database. 

Everytime a user plays a question, we update its answers with a total that is based on where the user ranked that answer.

Score page displays the users score, the question they played and also the correct order of answers with their totals.

The last section on the score page displays all the users and their high scores on the site.

The FAQ page provides details on how to play and how scores work. This link is available from the navigation and is available to the user without needing to sign in.  For everything else, they need to signup or login.


### Multi player mode [Bonus]

To play multiplayer the user must sign up or log in. Once logged in users can either create a room or join a room by entering the room code on the home page. Everytime a new user enters the room the page refreshes to see that new user. Users are randomly added to either Team 1 or Team 2. Users can also be dragged from one team into another.

Once the game starts, all the team players are presented with the same question that they get to rank. Scores are based on how all the players ranked the answers. The score page also displays the team scores and which team won.

This group project is a full stack application built using MVC paradigm.
It uses Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.

## Technology Used 

| Technology Used         | Resource URL           | 
| ------------- |-------------| 
| JavaScript    | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | 
| node.js    | [https://nodejs.org/en](https://nodejs.org/en) | 
| mysql2    | [https://www.npmjs.com/package/mysql2](https://www.npmjs.com/package/mysql2) | 
| Express.js    | [https://expressjs.com/](https://expressjs.com/) | 
| Sequelize    | [https://sequelize.org/](https://sequelize.org/) | 
| Handlebars    | [https://handlebarsjs.com/](https://handlebarsjs.com/) | 
| Git | [https://git-scm.com/](https://git-scm.com/)     |   
| SortableJS | [https://sortablejs.github.io/Sortable/](https://sortablejs.github.io/Sortable/) |
| Socket.IO | [https://socket.io/](https://socket.io/) |

## User Stories

### As a user I want to sign up and login so that I can log onto the site.
___________________________

This was done by having a login link in the navigation which provides markup for signing up and logging in. The user can toggle between signing up and logging in and each of the forms have an event listener which call the corresponding login or signup routes with the users credentials when submitted. The users password are encrypted using brcypt and saved in the user model.

### As a user I want to have my session saved so that I can continue using the site without having to login frequently.
___________________________

Once the user signs up or logs in successfully, a session is created with a cookie that expires after a day. This was achieved by using express session.

![Alt text](<public/images/Majority Matters Login.gif>)

### As as user I want to see options to rooms/genres so that I can choose what type of questions I get.
___________________________

This was achieved by creating a home page with 10 genres that are each a clickable link with a title and a background image representing the genre. Once the user clicks on a genre link, they are then navigated to the genre/id RESTful route which displays a random question from the selected genre.

![Alt text](<public/images/genre-page.png>)

### As a user I want to see a question with 8 answers so that I can order my options.
___________________________

This is done by making a request to the database to get all the questions for that specific genre and then randomly selecting a random question and displaying the question and its corresponding answers to the page. This done by doing a fetch request to a RESTful routes on the server that then respond with the corresponding information and passes it to the handlebars page that creates the HTML. The answers are able to be drag and dropped thanks to SortableJS. Once the user hits the submit button the users answer are stored into table. The users answer are also used to update the totals for each of the answers.

![Alt text](<public/images/Majority Matters Question Page.gif>)

### As a user I want to see my score so that I know how well I did.
___________________________

Once the user submits their answer by clicking on the submit button on the questions page, the user is routed to the scores page with the id of the question in the request parameters. This RESTful API then fetches the question and its answer and the users answers from the database. The users anwers are then compared with the saved answers ordered by their total. Users score 10 points for the answers that match with a maximum of 80 points.  The users score is compared to their existing high_score in the databse and updated to the current score if its higher.

### As a user I want to see the highest scores on a list so that I know how well my score was compared to others!
___________________________

We added a high score column to our user model which gets updated every time the user scores higher than their current score.  We display this list on the score page by making a query to the database and getting all the usernames with their high scores.

![Alt text](<public/images/Majority Matters Playthrough.gif>)

### As a user I want to play with a group of friends.
___________________________

This is done by creating a room that has two teams associated with that room that users are then added to. The user also has the ability to join a room by entering an already existing code. Both of these use fetch requests to either create the room or to update the users that are in the room. The user is then take to a page that shows the room code and two teams. The multiplayer part means that the answers for the question will be all the users in the room.

### As a user I want to split into teams.
___________________________

Once the user is on the team page they are given the ability again thanks to SortableJS to drag and drop users from one team to another. The page also refreshes when a new user has joined the page. This is done using socket.io which allows the client to push information to the server that server is listening and then responds back to the client. This allows for all clients that are on the server to be given the same command at the same time. The page checks that the number of users for that room is equal to the number of users on the page if not it refreshes the page.

Once the a user hits play then all users are taken to the same question again by using socket to pass the question to each client on the server.

![Alt text](<public/images/Majority Matters Team Page.gif>)

### As a user I want to see if my team did better than the other team.
___________________________

Once on the question page the users are given a set amount of time the answer the question. Once the time is up all the users are redirected to the scores page where it shows which team has one or if they have tied. This is done by using helper functions in handlebars that recivers all users from each team and their scores for the question and then the function calcualtes the team's scores and determine which team one.


## Author Info

Deepak Sinha
* [Portfolio](https://dee-here.github.io/portfolio/)
* [Github](https://github.com/dee-here)
* [Questions ](mailto:deepakdilse@gmail.com)

Ezekiel Jamolin
* [Portfolio](https://ezekiel186.github.io/portfolio/)
* [Github](https://github.com/Ezekiel186)
* [Questions ](mailto:ezekieljamolin186@gmail.com)

James Hunter
* [Portfolio](https://jamessahunter.github.io/portfolio/)
* [Github](https://github.com/jamessahunter)
* [Questions ](mailto:jamessahunter@gmail.com)

## License
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)  

[License Link](https://choosealicense.com/licenses/mit/)  