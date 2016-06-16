(function () {
    var app = angular.module('ptjApp', [
        'ui.router',
        'ptj.data',
        'ptj.router',
        'ptj.init'
    ]);
    app.run(['$rootScope', 'ptjData',
        function ($rootScope, ptjData) {
            $rootScope.global = {};
            // ptjData.user.getAll().success(function (res) {
            //     console.log(res)
            // })
        }]);

    angular.module("ptj.init", [])
        .controller("appHome", ['$scope','ptjData',function ($scope, ptjData) {
            var vm = $scope.vm = {
                newMember:{}
            };
            
            ptjData.user.getAll().success(function (res) {
                vm.membersData = res.data;
            });

            vm.addMember=function () {
                ptjData.user.add(vm.membersData).success(function (res) {
                    vm.membersData.push(vm.membersData);
                });
            };


        }]);
})();