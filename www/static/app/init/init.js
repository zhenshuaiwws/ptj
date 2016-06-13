(function () {
    var app = angular.module('ptjApp', []);
    app.run(['$rootScope', function ($rootScope) {
        $rootScope.global = {};
    }]);
})();