const { Answer } = require('../models');

const answerdata =[
    {
        answers: 'Pizza',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Ice Cream',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Curry',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Burrito',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Sandwich',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Cheese Burger',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Fries',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Cookies',
        question_id: 1,
        total: 0,
    },
    {
        answers: 'Brussel Sprouts',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Sardines',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Blue Cheese',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Oysters',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Licorice',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Vegimite/Marmite',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Pickles',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Onions',
        question_id: 2,
        total: 0,
    },
    {
        answers: 'Chicken Noodle Soup',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Pizza',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Ice Cream',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Mashed Potatoes',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Grilled Cheese',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Apple Pie',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Ceasar Salad',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Tomato Soup',
        question_id: 3,
        total: 0,
    },
    {
        answers: 'Star Wars',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Lord of the Rings',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Harry Potter',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'James Bond',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Marvel Cinematic Universe(MCU)',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Jurassic Park',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Fast & Furious',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Pirates of the Caribbean',
        question_id: 4,
        total: 0,
    },
    {
        answers: 'Forrest Gump',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Darth Vader',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Harry Potter',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'James Bond',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Indiana Jones',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Jack Sparrow',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'The Joker',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Gollum',
        question_id: 5,
        total: 0,
    },
    {
        answers: 'Avatar',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Avengers: Endgame',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Avatar: The Way of Water',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Titanic',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Star Wars: The Force Awakens',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Avengers: Infinity War',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Spider-Man: No Way Home',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Jurassic World',
        question_id: 6,
        total: 0,
    },
    {
        answers: 'Soccer(Football)',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Cricket',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Basketball',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Tennis',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Rugby',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'American Football',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Baseball',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Golf',
        question_id: 7,
        total: 0,
    },
    {
        answers: 'Muhammad Ali',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Michael Jordan',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Christiano Ronaldo',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Lebron James',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Lionel Messi',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Serena Williams',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Usain Bolt',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'Pelé',
        question_id: 8,
        total: 0,
    },
    {
        answers: 'FC Barcelona',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Real Madrid',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'New York Yankees',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Manchester United',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Los Angeles Lakers',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Dallas Cowboys',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'New England Patriots',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Golden State Warriors',
        question_id: 9,
        total: 0,
    },
    {
        answers: 'Beyoncé',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Taylor Swift',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Whitney Houston',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Michael Jackson',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Eminem',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Justin Bieber',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Rihanna',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'Elvis Presley',
        question_id: 10,
        total: 0,
    },
    {
        answers: 'I Will Always Love You',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Bohemian Rhapsody',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Closer',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Uptown Funk',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'I Gotta Feeling',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Despacito',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Shape of You',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'Hey Jude',
        question_id: 11,
        total: 0,
    },
    {
        answers: 'The Beatles',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Queen',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Led Zeppelin',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'The Rolling Stones',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'BTS',
        question_id: 12,
        total: 0,
    },
    {
        answers: "Guns N' Roses",
        question_id: 12,
        total: 0,
    },
    {
        answers: 'AC/DC',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Nirvana',
        question_id: 12,
        total: 0,
    },
    {
        answers: 'Thomas Jefferson',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Charles Darwin',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Albert Einstein',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Leonardo da Vinci',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Abraham Lincon',
        question_id: 13,
        total: 0,
    },
    {
        answers: "Benjamin Franklin",
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Napoleon Bonaparte',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Winston Churchill',
        question_id: 13,
        total: 0,
    },
    {
        answers: 'Ancient Egypt',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'Renaissance',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'World War II',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The Age of Exploration',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The Age of Enlightenment',
        question_id: 14,
        total: 0,
    },
    {
        answers: "The Victorian Era",
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The American Civil War',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'The Cold War Era',
        question_id: 14,
        total: 0,
    },
    {
        answers: 'Cleopatra',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Julius Ceasar',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Alexander the Great',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Confucius',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Socrates',
        question_id: 15,
        total: 0,
    },
    {
        answers: "Herodotus",
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Homer',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'Cyrus the Great',
        question_id: 15,
        total: 0,
    },
    {
        answers: 'GTA V',
        question_id: 16,
        total: 0,
    },
    {
        answers: 'Tetris',
        question_id: 16,
        total: 0,
    },
    {
        answers: 'Fortnite',
        question_id: 16,
        total: 0,
    },
    {
        answers: 'World of Warcraft',
        question_id: 16,
        total: 0,
    },
    {
        answers: 'ROBLOX',
        question_id: 16,
        total: 0,
    },
    {
        answers: "Minecraft",
        question_id: 16,
        total: 0,
    },
    {
        answers: 'League of Legends',
        question_id: 16,
        total: 0,
    },
    {
        answers: 'Counter Strike Global Offensive (CSGO)',
        question_id: 16,
        total: 0,
    },
    {
        answers: 'Sonic',
        question_id: 17,
        total: 0,
    },
    {
        answers: 'Master Chief',
        question_id: 17,
        total: 0,
    },
    {
        answers: 'Pikachu',
        question_id: 17,
        total: 0,
    },
    {
        answers: 'Pac-Man',
        question_id: 17,
        total: 0,
    },
    {
        answers: 'Mario',
        question_id: 17,
        total: 0,
    },
    {
        answers: "Kratos",
        question_id: 17,
        total: 0,
    },
    {
        answers: 'Lara Croft',
        question_id: 17,
        total: 0,
    },
    {
        answers: 'Solid Snake',
        question_id: 17,
        total: 0,
    },
    {
        answers: 'First Person Shooter (FPS)',
        question_id: 18,
        total: 0,
    },
    {
        answers: 'Sandbox',
        question_id: 18,
        total: 0,
    },
    {
        answers: 'Simulator',
        question_id: 18,
        total: 0,
    },
    {
        answers: 'Role-Playing Game (RPG)',
        question_id: 18,
        total: 0,
    },
    {
        answers: 'Platformer',
        question_id: 18,
        total: 0,
    },
    {
        answers: "Sports",
        question_id: 18,
        total: 0,
    },
    {
        answers: 'Racing',
        question_id: 18,
        total: 0,
    },
    {
        answers: 'Music/Rhythm',
        question_id: 18,
        total: 0,
    },
    {
        answers: "https://www.essence.com/wp-content/uploads/2017/08/1502976493/Nick%20Young.png",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://www.thesun.co.uk/wp-content/uploads/2022/02/NINTCHDBPICT000713859128.jpg",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://img.buzzfeed.com/buzzfeed-static/static/2019-01/23/13/asset/buzzfeed-prod-web-06/sub-buzz-31148-1548266852-1.jpg?crop=700%3A700%3B0%2C0&downsize=900:*&output-format=auto&output-quality=auto",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://media.tenor.com/B9OjyPMq5pIAAAAC/fine-this-is-fine.gif",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://i.kym-cdn.com/entries/icons/original/000/031/307/cover3.jpg",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://i.pinimg.com/1200x/cc/d5/80/ccd580ea975540405b5ac61984bd1270.jpg",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/05/01/2599381-1659551831.jpg?itok=NaWxa9NI",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://i.insider.com/5df773d8fd9db276fe0a6c55?width=1136&format=jpeg",
        question_id: 19,
        total: 0,
    },
    {
        answers: "https://rebelscumradio.com/wp-content/uploads/2015/05/aliens.jpg",
        question_id: 20,
        total: 0,
    },
    {
        answers: "https://www.alphr.com/wp-content/uploads/2022/10/kids.png",
        question_id: 20,
        total: 0,
    },
    {
        answers: "https://thelankamirror.com/wp-content/uploads/2021/01/8.jpg",
        question_id: 20,
        total: 0,
    },
    {
        answers: "https://focus.independent.ie/thumbor/DxTNN272gaAM7C72jfcbCC_pxZg=/0x24:4500x2506/960x640/prod-mh-ireland/ae924216-c200-11ed-8f2f-0210609a3fe2",
        question_id: 20,
        total: 0,
    },
    {
        answers: " https://i.chzbgr.com/full/7315659776/hD86F8573/homeschooled-bullied-by-classmates",
        question_id: 20,
        total: 0,
    },
    {
        answers: "https://1.bp.blogspot.com/-tbroPvwIFgY/TuLQQs7yjcI/AAAAAAACkgI/KoZrEI4kHz4/s1600/best-memes-2011-01.jpg",
        question_id: 20,
        total: 0,
    },
    {
        answers: "https://pyxis.nymag.com/v1/imgs/d6a/dc7/4a5001b7beea096457f480c8808572428b-09-roll-safe.rsquare.w400.jpg",
        question_id: 20,
        total: 0,
    },
    {
        answers: "https://media.tenor.com/x8v1oNUOmg4AAAAd/rickroll-roll.gif",
        question_id: 20,
        total: 0,
    },
    {
        answers: "https://i.pinimg.com/736x/5b/e3/2b/5be32be69546bb2c01902bc68d07108b.jpg",
        question_id: 21,
        total: 0,
    },
    {
        answers: "https://i.pinimg.com/736x/af/3d/9e/af3d9ebf5e9972e764361922a66fec5c.jpg",
        question_id: 21,
        total: 0,
    },
    {
        answers: "https://i.chzbgr.com/full/9791207680/h9B2AD1B2/person-my-exact-facial-expression-react-someones-post-with-lol",
        question_id: 21,
        total: 0,
    },
    {
        answers: " https://cdn.ebaumsworld.com/mediaFiles/picture/1044414/86514490.jpg",
        question_id: 21,
        total: 0,
    },
    {
        answers: "https://static.demilked.com/wp-content/uploads/2023/01/funny-posts-memeingless-life-2.jpeg",
        question_id: 21,
        total: 0,
    },
    {
        answers:  "https://i.pinimg.com/736x/8d/05/b1/8d05b17bdde7a26b474cea56130c356b.jpg",
        question_id: 21,
        total: 0,
    },
    {
        answers: "https://i.pinimg.com/736x/3d/12/fc/3d12fcff4a27f379d0a2d39c5deae6f5.jpg",
        question_id: 21,
        total: 0,
    },
    {
        answers: "https://images.dwell.com/photos/6158709506073653248/6164175565424214016/large.jpg",
        question_id: 21,
        total: 0,
    },
    {
        answers: 'Harry Potter by J.K. Rowling',
        question_id: 22,
        total: 0,
    },
    {
        answers: 'The Lord of the Rings by J.R.R. Tolkien',
        question_id: 22,
        total: 0,
    },
    {
        answers: 'A Song of Ice and Fire (Game of Thrones) by George R.R. Martin',
        question_id: 22,
        total: 0,
    },
    {
        answers: 'Percy Jackson & The Olympians by Rick Riordan',
        question_id: 22,
        total: 0,
    },
    {
        answers: 'The Hunger Games by Suzanne Collins',
        question_id: 22,
        total: 0,
    },
    {
        answers: "Twilight by Stephenie Meyer",
        question_id: 22,
        total: 0,
    },
    {
        answers: 'RaciThe Chronicles of Narnia by C.S. Lewis',
        question_id: 22,
        total: 0,
    },
    {
        answers: 'The Wheel of Time by Robert Jordan and Brandon Sanderson',
        question_id: 22,
        total: 0,
    },
    {
        answers: '"To Kill a Mockingbird" by Harper Lee',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"1984" by George Orwell',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"Pride and Prejudice" by Jane Austen',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"The Great Gatsby" by F. Scott Fitzgerald',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"The Catcher in the Rye" by J.D. Salinger',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"Moby-Dick" by Herman Melville',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"The Lord of the Rings" by J.R.R. Tolkien',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"One Hundred Years of Solitude" by Gabriel García Márquez',
        question_id: 23,
        total: 0,
    },
    {
        answers: '"A Brief History of Time" by Stephen Hawking',
        question_id: 24,
        total: 0,
    },
    {
        answers: '"Sapiens: A Brief History of Humankind" by Yuval Noah Harari',
        question_id: 24,
        total: 0,
    },
    {
        answers: '"Educated" by Tara Westover',
        question_id: 24,
        total: 0,
    },
    {
        answers: '"The Selfish Gene" by Richard Dawkins',
        question_id: 24,
        total: 0,
    },
    {
        answers: '"Thinking, Fast and Slow" by Daniel Kahneman',
        question_id: 24,
        total: 0,
    },
    {
        answers: '"Outliers: The Story of Success" by Malcolm Gladwell',
        question_id: 24,
        total: 0,
    },
    {
        answers: '"The Elements of Style" by William Strunk Jr. and E.B. White',
        question_id: 24,
        total: 0,
    },
    {
        answers: '"The Art of War" by Sun Tzu',
        question_id: 24,
        total: 0,
    },
    {
        answers: 'Superman',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'Spider-man',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'Batman',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'Wonder Woman',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'Iron Man',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'The Hulk',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'Captain America',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'The Flash',
        question_id: 25,
        total: 0,
    },
    {
        answers: 'The Joker',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Lex Luthor',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Magneto',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Green Goblin',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Doctor Doom',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Catwoman',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Loki',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Harley Quinn',
        question_id: 26,
        total: 0,
    },
    {
        answers: 'Robin (Dick Grayson)',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Bucky Barnes',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Kid Flash (Wally West)',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Speedy (Roy Harper)',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Aqualad (Garth)',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Wonder Gir (Donna Troy)',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Hawkeye (Kate Bishop)',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Miss Martian',
        question_id: 27,
        total: 0,
    },
    {
        answers: 'Elves',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Dwarves',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Orcs',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Hobbits',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Giants',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Fairies',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Goblins',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Trolls',
        question_id: 28,
        total: 0,
    },
    {
        answers: 'Rogue/Theif',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Cleric/Priest',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Warrior/Knight',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Wizard/Mage',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Ranger',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Druid',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Barbarian',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Necromancer',
        question_id: 29,
        total: 0,
    },
    {
        answers: 'Taverns',
        question_id: 30,
        total: 0,
    },
    {
        answers: 'Castles',
        question_id: 30,
        total: 0,
    },
    {
        answers: 'Dungeons',
        question_id: 30,
        total: 0,
    },
    {
        answers: 'Mystical Forests',
        question_id: 30,
        total: 0,
    },
    {
        answers: 'Magical Cities',
        question_id: 30,
        total: 0,
    },
    {
        answers: 'Ruins',
        question_id: 30,
        total: 0,
    },
    {
        answers: 'Giant Libraries',
        question_id: 30,
        total: 0,
    },
    {
        answers: 'Abyssal Realms/Underwolrds',
        question_id: 30,
        total: 0,
    },
]

const seedAnswer = () => Answer.bulkCreate(answerdata);

module.exports = seedAnswer;