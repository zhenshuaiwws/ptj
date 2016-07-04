exports = module.exports = function (app, api) {

    app.get('/api/users', function (req, res, next) {
        return next()
    }, api.user.getAll);

    app.post('/api/user', api.user.addUser);

    app.delete('/api/user/:id', api.user.delUser)
};