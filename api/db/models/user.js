
const { Sequelize, sequelize } = require("../config")




//Define model
const User = sequelize.define("user", {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }

})

//Create Model in database
//Attention cette opération doit etre commit après la création du model 
//Cas contraire  sequelize créer à nouveau le model et vous risque de perde toutes vos data
// User.sync({ force: true })


module.exports = User;