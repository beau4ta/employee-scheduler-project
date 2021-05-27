const Work = require('./Work');
const User = require('./User');


User.hasMany(Work, {
    foreignKey: 'user_id'
})


Work.belongsTo(User, {
    foreignKey: 'user_id'
})

module.exports = { User, Work };