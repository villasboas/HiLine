Controller.controller('Login', function($scope, $rootScope, $state, $ionicSideMenuDelegate, $ionicActionSheet) {

    $scope.title = "Sitema";

    $scope.logar = function() {
        $state.go('Master.clientes');
    }

    //chama o menu principal
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    // Triggered on a button click, or some other target
    $scope.showSheet = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: 'Minha conta' }
            ],
            destructiveText: 'Sair',
            titleText: 'Ações do usuário',
            cancelText: 'Cancelar',
            cancel: function() {
                // add cancel code..
                },
            buttonClicked: function(index) {

                $state.go('Master.clientesadicionar');

                return true;
            },
            destructiveButtonClicked: function(){
                $state.go('Login');
            }
        });
    };

});