# Majority Matters
![License Badge](https://img.shields.io/badge/License-MIT-yellow.svg)

[Majority Matters](https://majority-matters-080972dae02f.herokuapp.com/)

## Description 

"Majority Matters" is a full stack application that lets users rank answers to a question and presents them with a score on how their answers matched with the overall popularity of the answer.
Once signed in, users can play either as a single player or play in multiplayer mode.

### Single player mode [MVP]

Once logged in, users get a question with 8 possible answers that they get to rank with what they think is the most popular answer to the least popular.
Users can drag and drop the answers in the order think would be the most popular to the least popular.

After ranking the answers, the users will be given scores based on how many answers were matched to the answers ranks stored in the database. 

Everytime a user plays a question, we update its answers with a total that is based on where the user ranked that answer.

Score page displays the users score, the question they played and also the correct order of answers with their totals.

The last section on the score page displays all the users and their high scores on the site.

The FAQ page provides details on how to play and how scores work. This link is available from the navigation and is available to the user without needing to sign in.  For everything else, they need to signup or login.


### Multi player mode [Bonus]

Once logged in users can either create a room or join a room by entering the room code on the home page. Users are randomly added to either Team 1 or Team 2. Users can also be dragged from one team into another.

Once the game starts, all the team players are presented with the same question that they get to rank.  Scores are based on how all the players ranked the answers. The score page also displays the team scores and which team won.

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


## Screen Shots 


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