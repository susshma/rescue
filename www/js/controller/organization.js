rescue.controller('OrganizationCtrl', function($scope, $ionicActionSheet, $timeout, $firebaseArray, OrganizationService) {
   $scope.list = OrganizationService.getOrganizationList();

    $scope.remove = function (index) {
        //$scope.show();
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

.controller('CreateOrganizationCtrl', function($scope, $stateParams, OrganizationService, $window) {
    $scope.action = "Add";

    $scope.form = {};

    $scope.save = function () {
        OrganizationService.addOrganization($scope.form);
        $window.location.href ='/#/app/organizations'
    }
    // $scope.form.donationitemsselected = [];

    // $scope.$watch('donationitems', function(newValues){
    //     $scope.form.donationitemsselected.length = 0;
    //     angular.forEach(newValues, function(item) {
    //         if (item.checked == true) {
    //             $scope.form.donationitemsselected.push(item.value);
    //         }
    //     });
    // }, true);

    // $scope.donationitems = [
    //     { "value": "Money", "checked": false },
    //     { "value": "Food", "checked": false },
    //     { "value": "Water", "checked": false },
    //     { "value": "Tent", "checked": false },
    //     { "value": "Medical supplies", "checked": false },
    //     { "value": "Sanitary items", "checked": false },
    //     { "value": "Clothes", "checked": false },
    //     { "value": "Other", "checked": false },
    // ];

    // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            console.log('our form is amazing');
        }

    };

})
.controller('EditOrganizationCtrl', function($scope, $stateParams, OrganizationService, $window) {
    $scope.action = "Edit"

    var list = OrganizationService.getOrganizationList();

    list.$loaded().then(function(list) {
        $scope.form = list.$getRecord($stateParams.organizationId);
        // check the selected ones
    //     if ($scope.form.donationitemsselected) {
    //         $scope.donationitems.forEach(function (key, value){
    //             if ($scope.form.donationitemsselected.indexOf(key.value) !== -1 ) {
    //                 key.checked = true;
    //             }
    //         });
    //     }
    //     $scope.form.donationitemsselected = $scope.form.donationitemsselected || [];

    //     $scope.$watch('donationitems', function(newValues){
    //     $scope.form.donationitemsselected.length = 0;
    //         angular.forEach(newValues, function(item) {
    //             if (item.checked == true) {
    //                 $scope.form.donationitemsselected.push(item.value);
    //             }
    //         });
    // }, true);
    }); 

    // $scope.donationitems = [
    //     { "value": "Money", "checked": false },
    //     { "value": "Food", "checked": false },
    //     { "value": "Water", "checked": false },
    //     { "value": "Tent", "checked": false },
    //     { "value": "Medical supplies", "checked": false },
    //     { "value": "Sanitary items", "checked": false },
    //     { "value": "Clothes", "checked": false },
    //     { "value": "Other", "checked": false },
    // ];

    $scope.save = function () {
        OrganizationService.saveOrganization($scope.form);
         $window.location.href ='/#/app/organization'
    }
});





