rescue.controller('VolunteerCtrl', function($scope, $ionicActionSheet, $timeout, $firebaseArray, VolunteerService) {
    var list = VolunteerService.getVolunteerList();

    $scope.volunteerList = list;

    $scope.remove = function (index) {
        $scope.show();
        var id = list.$getRecord(index);
        list.$remove(id);
    };

    // Triggered on a button click, or some other target
    $scope.show = function(index) {
        var volunteer_id = index;

        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            destructiveText: 'Delete',
            cancelText: 'Cancel',
            cancel: function() {
              // add cancel code..
            },
            destructiveButtonClicked: function() {
                list.$remove();
            }
         });

       // For example's sake, hide the sheet after two seconds
        $timeout(function() { 
            hideSheet();
        }, 2000);
    };   
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
})
.controller('EditVolunteerCtrl', function($scope, $stateParams, VolunteerService) {
    $scope.action = "Edit"

    var list = VolunteerService.getVolunteerList();

    list.$loaded().then(function(list) {
        $scope.form = list.$getRecord($stateParams.volunteerId);
        // check the selected ones
        $scope.donationitems.forEach(function (key, value){
            if ($scope.form.donationitemsselected.indexOf(key.value) !== -1 ) {
                key.checked = true;
            }
        });
    }); 

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




