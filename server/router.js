var data = require('./data/index.js');

exports = module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {
            title: 'Part-time Job'
        });
    });

    app.get('/api/users', function (req, res) {
        res.send({
            code: 200,
            data: [
                {name: '小红', age: 24},
                {name: '蓝蓝', age: 24},
                {name: '阿峰', age: 24}
            ]
        });
    });
};