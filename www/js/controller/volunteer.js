rescue.controller('VolunteerCtrl', function($scope, $ionicActionSheet, $timeout, $firebaseArray, VolunteerService) {

    // Triggered on a button click, or some other target
    $scope.show = function() {

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
               { text: '<b>Share</b> This' },
               { text: 'Move' }
             ],
            destructiveText: 'Delete',
            titleText: 'Modify your album',
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
        }, 2000);
    }

    var list = $firebaseArray(VolunteerService.getVolunteerList());

    $scope.volunteerList = list;
})

.controller('VolunteerDetailstCtrl', function($scope, $stateParams) {
})

.controller('CreateVolunteerCtrl', function($scope, $stateParams, VolunteerService, $window) {
    $scope.action = "Add";

    $scope.form = {};

    $scope.save = function () {
        VolunteerService.addVolunteer($scope.form);
        $window.location.href ='/#/app/volunteer'
    }
    $scope.form.donationitemsselected = [];

    $scope.$watch('donationitems', function(newValues){
        $scope.form.donationitemsselected.length = 0;
        angular.forEach(newValues, function(item) {
            if (item.checked == true) {
                $scope.form.donationitemsselected.push(item.value);
            }
        });
    }, true);

    $scope.donationitems = [
        { "value": "Money", "checked": false },
        { "value": "Food", "checked": false },
        { "value": "Water", "checked": false },
        { "value": "Tent", "checked": false },
        { "value": "Medical supplies", "checked": false },
        { "value": "Sanitary items", "checked": false },
        { "value": "Clothes", "checked": false },
        { "value": "Other", "checked": false },
    ];
});




