const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("skeleton", "root", "root", {
    host: "localhost",
    dialect: 'mysql',
    port: "8889"

});


// const connect = async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }

// }

// connect()



module.exports = { Sequelize, sequelize }


