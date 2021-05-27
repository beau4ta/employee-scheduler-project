const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Work extends Model {}


Work.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_time: {
        type: DataTypes.STRING,
        allowNull: false

    },
    end_time: {
        type: DataTypes.STRING,
        allowNull: true
    },
    work_type: {
        type: DataTypes.STRING,
        allowNull: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'id'
        }
    },
    notes: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'work'
})

module.exports = Work;