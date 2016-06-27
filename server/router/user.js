exports = module.exports = function (app, api) {

    app.get('/api/users', function (req, res, next) {
        console.log('路由');
        return next()
    }, api.user.getAll);
};