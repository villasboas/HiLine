Controller.controller('Login', function($scope, $rootScope, $state) {

    login = "";

    $scope.logar = function() {
        $state.go('Master');
    }

});