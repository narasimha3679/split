const mongoose = require('mongoose');

const mongoURI = 'mongodb://root:root@localhost:27017/split?authSource=admin';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
