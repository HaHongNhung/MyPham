const users = require("../model/users");

class UsersController {
    getAllUsers =  async (req, res) => {
        try {
            const data = await users.find().populate();
            // console.log('data: ', data);
            res.json({
                data: data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = UsersController;