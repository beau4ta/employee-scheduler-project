const withManagerAuth = (req, res, next) => {
    if (req.manager_id !== null) {
        return res.status(401);
    } else {
        next();
    }
};

module.exports = withManagerAuth;