const { Router } = require("express")
const userController = require("../../controllers/user")


const router = Router();

router.get("/user", userController.takeAllUsers)

module.exports = router;