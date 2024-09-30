const express = require('express');
const cors = require('cors');

const permissionsRouter = require('./Routers/permissionsRouter');
const usersDBRouter = require('./Routers/usersDB_Router');
const usersJsonRouter = require('./Routers/usersJsonRouter');
const subscriptionsWSRouter = require('./Routers/subscriptionsRouter');

let app = express();

app.use(cors());
app.use(express.json());

require('./Configs/usersDB');
app.use('/permissions', permissionsRouter);
app.use('/subs', subscriptionsWSRouter);
app.use('/userDB', usersDBRouter);
app.use('/userFile', usersJsonRouter);

app.listen(8001, (req, res) => {
    console.log('server 8001 is listening');
});
