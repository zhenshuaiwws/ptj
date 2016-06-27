exports = module.exports = function (app) {
    var api = require('../api');

    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Part-time Job'
        });
    });
    require('./user')(app, api);
};