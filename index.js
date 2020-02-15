var users = require('./routes/users');
var express = require('express');
var app = express();

app.use(express.json());
app.use('/users',users)


const PORT = process.env.PORT || 5000;
app.listen(PORT,console.log(`Server Running on Port No :- ${PORT}`));