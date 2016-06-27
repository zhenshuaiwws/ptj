var api = require('../api');

exports = module.exports = function (app) {


    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Part-time Job'
        });
    });

    require('./user')(app);
};