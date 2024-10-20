const mongoose = require('mongoose');

const local = "mongodb+srv://duanmypham:Huy%2A2004@duanmypham.qif6w.mongodb.net/duanmypham";

const connect = async () => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };
