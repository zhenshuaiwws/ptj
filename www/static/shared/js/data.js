(function () {
    angular.module('ptj.data', [])
        .factory('ptjData', ['$http', function ($http) {
            return {
                user:{
                    getAll: function () {
                        return $http.get('/api/users');
                    }
                }
            };
        }])
})();