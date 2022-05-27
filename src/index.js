/** @format */

const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const newControllers = require('./app/controllers/newControllers');
const router = require('./router');
const port = 3000;

//template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

// This is the root route

router(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`),
);
