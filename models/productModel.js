const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const Techno = sequelize.define("Techno", {
        Serial_no: {
            type: DataTypes.INTEGER
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        School: {
            type: DataTypes.TEXT
        },
        DOB: {
            type: DataTypes.STRING
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Techno',
        hooks: {
            beforeCreate: async(user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                user.password = hashedPassword;
            }
        }
    });

    return Techno;
};