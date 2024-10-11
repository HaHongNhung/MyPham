const mongoose = require('mongoose');

const local = "mongodb+srv://huuduy2004:huuduy2004@cluster0.cmd6q.mongodb.net/duanthuctap";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
