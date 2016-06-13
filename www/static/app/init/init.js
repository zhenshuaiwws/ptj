(function () {
    var app = angular.module('ptjApp', ['ptj.data']);
    app.run(['$rootScope', 'ptjData',
        function ($rootScope, ptjData) {
            $rootScope.global = {};
            ptjData.user.getAll().success(function (res) {
                console.log(res)
            })
        }]);
})();