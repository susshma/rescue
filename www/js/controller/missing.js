rescue.controller('MissingCtrl', function($scope, $ionicActionSheet, $timeout, MissingService, $firebase) {
  // $scope.missingList = [
  //   { name: 'Reggae', id: 1, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  //   { name: 'Reggae', id: 2, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  //   { name: 'Reggae', id: 3, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  //   { name: 'Reggae', id: 4, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  //   { name: 'Reggae', id: 5, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  //   { name: 'Reggae', id: 6, description: 'Tall dark brown', gender: '', country: '', details: '', img: 'test.jpg' },
  // ];
    var list = $firebase(MissingService.getMissingList()).$asArray();
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
   }, 5000);
  };
})

.controller('MissingDetailstCtrl', function($scope, $stateParams) {
    $scope.comments = [
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"},
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"},
        { name: "Test User", comment: "I've seen him some where last", phone: "9841092192", email: "test@gmail.com"}
    ]
})

.controller('CreateMissingCtrl', function($scope, $stateParams,$window, MissingService) {
    $scope.action = "Add";

    $scope.form = {};

    $scope.save = function () {
        MissingService.addMissing($scope.form);
        $window.location.href ='/#/app/missing'

    }
})

.controller('EditMissingCtrl', function($scope, $stateParams) {

    $scope.action = "Edit"

    $scope.form = { name: 'Reggae', id: 1, description: 'Tall dark brown', gender: '', nationality: 'Nepal', img: 'test.jpg' }
});