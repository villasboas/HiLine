Controller.controller('Master', function($scope, Crud, $ionicSideMenuDelegate, $ionicActionSheet, $ionicModal, $state, $ionicPopup) {

    $scope.currentTab = $state.current.url;

    $scope.title = "Sistema";

    $scope.lista = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18];
    
    

    // Triggered on a button click, or some other target
    $scope.showPopup = function() {
        $scope.data = {};

        // An elaborate, custom popup
        var myPopup = $ionicPopup.show({
            templateUrl: "templates/clientes/filtros.html",
            title: 'Filtros',
            scope: $scope,
            buttons: [
            { text: 'Cancelar' },
            {
                text: '<b>Filtrar</b>',
                type: 'button-positive',
                onTap: function(e) {
                if (!$scope.data.wifi) {
                    //don't allow the user to close unless he enters wifi password
                    e.preventDefault();
                } else {
                    return $scope.data.wifi;
                }
                }
            }
            ]
        });

        myPopup.then(function(res) {
            console.log('Tapped!', res);
        });


    };

    $scope.go = function(link) {
        $state.go(link);
    }

});