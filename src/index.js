const express = require('express')
const path = require('path')
const app = express()
const morgan = require('morgan')
const {engine} = require('express-handlebars');
const port = 3000;

//template engine
app.engine('hbs', engine({
    extname: '.hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'))
app.get('/', (req, res) => {
    res.render('home');
});

app.get('/news', (req, res) => {
    res.render('news');
});
// This is the root route

app.listen(port,()=>console.log(`Example app listening at http://localhost:${port}`))