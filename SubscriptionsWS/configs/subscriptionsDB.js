const mongoose = require('mongoose');

// mongoose.connect('mongodb://cinema-project-mongodb:27018/subscriptionDB');
mongoose.connect(process.env.MONGODB_URI);
//mongodb://formsUser:formsUserPassword@localhost:27017/?authMechanism=DEFAULT&authSource=FormsManager
