angular.module("ptj.router", [])
    .config(["$stateProvider", "$urlRouterProvider", "$locationProvider", function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state("home", {
                url        : "/",
                templateUrl: "/app/init/index.html",
                controller : "appHome"
            })
            .state("otherwise", {
                url       : '/otherwise',
                controller: [function () {
                    location.href = "/";
                }]
            });
    }]);
