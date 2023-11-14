const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
// const socketIO = require('socket.io')

const app = express();
const server = require('http').Server(app);
// const io = socketIO(server);

const PORT = process.env.PORT || 3001;

const sess = {
  secret: 'Super secret secret',
  //sets max session to 1 day
  cookie: {
    maxAge: 86400000
  },
  resave: false,
  saveUninitialized: false,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => console.log('Now listening'));
});


const io = require('socket.io')(server);
// listens for when a user connects to server
io.on('connection', (socket) => {
  console.log('A user connected Server');
  //listents for join to be emitted from client
  socket.on('join', (username) => {
    //emits user joined to all connected clients
    io.emit('user joined', `${username} has joined`);
  });

  socket.on('passNum',(data)=>{
    io.emit('getNum',(data));
  })

    // Handle button press event
  socket.on('relocateUsers', () => {
      // Emit a usersRelocated event to all connected clients
      io.emit('usersRelocated');
    });
});