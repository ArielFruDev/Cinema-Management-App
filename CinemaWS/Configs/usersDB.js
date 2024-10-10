const usersModel = require('../Models/usersModel');

const mongoose = require('mongoose');

(async () => {
    console.log('Connecting to DB...');
    try {
        // await mongoose.connect('mongodb://cinema-project-mongodb:27018/usersDB');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Create a new user
        const user = new usersModel({ userName: 'admin', password: '123' });

        // Save the user to the database
        await user.save();
        console.log('User saved to database. userName: admin, password: 123.');
    } catch (err) {
        console.error('Error:', err);
    }
})();

// const mongoose = require('mongoose');

// console.log(`Connecting DB...`);

// try {
//     mongoose.connect('mongodb://localhost:27017/usersDB');
// } catch (error) {
//     throw new Error(`Error Occured: ${error.message}`);
// }
