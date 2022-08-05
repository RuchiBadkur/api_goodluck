const express = require('express');

const app = express();

const cors = require('cors');
// require("dotenv").config({ path: ".env" }); 

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    try {
        console.log('goodluck api is running');
        res.send('<h1>goodluck api is running</h1>')
    } catch (error) {
        console.log('error');
    }
})

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

app.listen(process.env.PORT || 4000);
// app.listen(process.env.APP_PORT);