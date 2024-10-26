const mongoose = require('mongoose');

const local = "mongodb+srv://tiendung2004lv:DungTT@cluster0.0fg6y.mongodb.net/duan";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
