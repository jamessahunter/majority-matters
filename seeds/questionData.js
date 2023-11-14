const { Question } = require("../models");

const questiondata=[
    {
        question: 'Which food is the best?',
        genre_id: 1, //Food
    },
    {
        question: 'Which food is the worst?',
        genre_id: 1, //Food
    },
    {
        question: 'What is the best comfort food?',
        genre_id: 1, //Food
    },
    {
        question: 'What is the best movie franchise?',
        genre_id: 7, //Movies
    },
    {
        question: 'Who is the most popular character?',
        genre_id: 7, //Movies
    },
    {
        question: 'Which movie made the most money?',
        genre_id: 7, //Movies
    },
    {
        question: 'What is the most popular sport in the world?',
        genre_id: 2, //Sport
    },
    {
        question: 'Who is the most popular athlete?',
        genre_id: 2, //Sport
    },
    {
        question: 'What is the most popular sports team?',
        genre_id: 2, //Sport
    },
    {
        question: 'Whos the most popular artist?',
        genre_id: 8, //music
    },
    {
        question: 'What is the most popular song of all time?',
        genre_id: 8, //music
    },
    {
        question: 'What is the most popular band?',
        genre_id: 8, //mmusic
    },
    {
        question: 'Who is the most famous historical figure?',
        genre_id: 3, //History
    },
    {
        question: 'What is the most fascinating historical period?',
        genre_id: 3, //History
    },
    {
        question: 'Who is the most interesting ancient historical figure?',
        genre_id: 3, //History
    },
    {
        question: 'What is the most popular video game?',
        genre_id: 4, //video games
    },
    {
        question: 'Which video game character is the most iconic?',
        genre_id: 4, //video games
    },
    {
        question: 'What is the most popular video game genre?',
        genre_id: 4, //video games
    },
    {
        question: 'Which of these is the funniest?',
        genre_id: 9, //memes
    },
    {
        question: 'Which of these is the most iconic?',
        genre_id: 9, //memes
    },
    {
        question: 'Which of these memes is the best?',
        genre_id: 9, //memes
    },
    {
        question: 'Which of these fiction books is the best?',
        genre_id: 5, //books
    },
    {
        question: 'Which of these novels is the best?',
        genre_id: 5, //books
    },
    {
        question: 'Which of these educational books is the best?',
        genre_id: 5, //books
    },
    {
        question: 'Which of these is the most popular superhero?',
        genre_id: 10, //superheroes
    },
    {
        question: 'Which of these is the most popular supervillain?',
        genre_id: 10, //superheroes
    },
    {
        question: 'Which of these is the most popular sidekick?',
        genre_id: 10, //superheroes
    },
    {
        question: 'Which of is the most popular fantasy race?',
        genre_id: 6, //fantasy
    },
    {
        question: 'Which of is the most popular fantasy class?',
        genre_id: 6, //fantasy
    },
    {
        question: 'Which of is the most popular fantasy location?',
        genre_id: 6, //fantasy
    },
    {
        question: "Who's most likely to survive on a desert island?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who's most likely to pull a prank on April Fools' Day?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who's most likely to binge-watch an entire TV series in one weekend?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who's most likely to be the first one to arrive at a party?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who's most likely to be caught laughing at the wrong moment?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who's most likely to become a stand-up comedian?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to cheat on a test?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to drop something on the floor and still eat it?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to eat cereal for dinner?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to get lost in their own city?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to join a cult?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to tell a bad joke?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to get scared by an inanimate object?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to be late?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to become vegan?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to win at trivia?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to start a podcast?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to live the longest?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to rage quit a game?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to become internet famous?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to lose their keys?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to win in a drinking contest?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to win a limbo competition?",
        genre_id: 11, //multiplayer
    },
    {
        question: "Who is most likely to make dad jokes / puns?",
        genre_id: 11, //multiplayer
    },
    // Who is most likely to be able to bake something from scratch without a recipe?
    // Who is most likely to wear a vest?
    // Who is most likely to be secretly good at a random skill they don’t talk about?
    // Who is most likely to go bald first?
    // Who is most likely to become a hoarder?
    // Who is most likely to be able to juggle?
    // Who is most likely to call it an early night?
    // Who is most likely to order the spiciest thing on the menu?
    // Who is most likely to win in a foot race?
    // Who is most likely to (not) read the instructions?
    // Who is most likely to have the most pairs of shoes?
    // Who is most likely to be the best bank robber?
    // Who's most likely to disappear for a year, only to return with newfound skills and a mysterious background?
    // Who is most likely to finish their meal first?
    // Who is most likely to get way too competitive?
    // Who is most likely to have the worst coordination?
    // Who is most likely to wear toe shoes?
    // Who is most likely to ask for fork at an Asian restaurant?
    // Who is most likely to believe in ghosts?
    // Who is most likely to have the (cleanest/dirtiest) house?
    // Who is most likely to take up rock climbing?
]

const seedQuestion = () => Question.bulkCreate(questiondata);

module.exports = seedQuestion;