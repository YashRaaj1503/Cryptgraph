const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
const exphbs = require("express-handlebars");
const port = process.env.PORT || 80;

const partials_path = path.join(__dirname, "/templates/partials");

app.use('/static', express.static('static'))//For server static files
//app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('views', path.join(__dirname, '/templates/views'));
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.set('views','../templates/views/');
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
    res.status(200).render('index.html');
});

app.listen(port, () => {
    console.log(`Server is running at port no. ${port}`);
})