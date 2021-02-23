import User from "../db/models/user"



class userController {

    static async takeAllUsers(req, res) {
        try {
            return res.status(200).send("Hello new user")

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

}

module.exports = userController;