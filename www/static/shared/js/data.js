(function () {
    angular.module('ptj.data', [])
        .factory('ptjData', ['$http', function ($http) {
            return {
                user:{
                    getAll: function () {
                        return $http.get('/api/users');
                    },
                    add:function (member) {
                        return $http.post('/api/user', member);
                    },
                    update:function (uid) {
                        return $http.put('/api/user', {uid:uid});
                    },
                    remove:function (uid) {
                        return $http.delete('/api/user', {uid:uid});
                    }
                }
            };
        }])
})();