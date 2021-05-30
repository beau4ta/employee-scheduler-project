const withManagerAuth = (req, res, next) => {
    //if the manager id for the user is  null - meaning if the user is a not manager
    if (req.manager_id == null) {
        return res.status(401);
    } else {
        next();
    }
};

module.exports = withManagerAuth;