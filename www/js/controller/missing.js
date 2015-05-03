rescue.controller('MissingCtrl', function($scope, $ionicActionSheet, $timeout, MissingService, $firebaseArray) {
    $scope.isActive = function(route) {
        return route === $location.path();
    }
    var list = $firebaseArray(MissingService.getMissingList());
    $scope.missingList = list;
    // Triggered on a button click, or some other target
    $scope.show = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function() {
            // add cancel code..
            },
            buttonClicked: function(index) {
                return true;
            }
        });

    // For example's sake, hide the sheet after two seconds
    $timeout(function() {
        hideSheet();
    }, 5000)};
})

.controller('MissingDetailstCtrl', function($scope, $stateParams) {
    $scope.tab = missing;
    $scope.comments = [
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"},
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"},
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"}
    ]
})

.controller('CreateMissingCtrl', function($scope, $stateParams,$window, MissingService) {
    $scope.tab = 'missing';
    $scope.action = "Add";
    $scope.form = {};

    $scope.save = function () {
        MissingService.addMissing($scope.form);
        $window.location.href ='/#/app/missing'

    }
})

.controller('EditMissingCtrl', function($scope, $stateParams, MissingService) {
    $scope.tab = 'missing';
    $scope.action = "Edit"

    var data = MissingService.getMissing($stateParams.personId);

    $scope.form = data;

});