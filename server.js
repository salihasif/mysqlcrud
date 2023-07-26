const express = require('express');
const bodyparser = require('body-parser');

const app = express();
//body parser
app.use(bodyparser.urlencoded({ extended: true }));

// Import db connection function
const db = require('./connection');
db.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });

//use routes
app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});