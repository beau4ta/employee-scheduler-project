const sequelize = require('../config/connection');
const { User, Work } = require('../models');

const userData = require('./user-seeds.json');
const workData = require('./work-seeds.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const work of workData) {
        await Work.create({
            ...work,
        });
    }

    process.exit(0);
};

seedDatabase();