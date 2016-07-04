(function () {
    angular.module('ptj.data', [])
        .factory('ptjData', ['$http', function ($http) {
            return {
                user: {
                    getAll: function () {
                        return $http.get('/api/users');
                    },
                    add   : function (member) {
                        return $http.post('/api/user', member);
                    },
                    update: function (id) {
                        return $http.put('/api/user', {id: id});
                    },
                    del   : function (id) {
                        return $http.delete('/api/user/' + id);
                    }
                }
            };
        }])
})();