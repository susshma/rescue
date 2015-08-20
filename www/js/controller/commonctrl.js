rescue.controller('GovernmentListCtrl', function($scope, $timeout, CommonService, $firebaseArray) {

    $scope.category = "governmentcontacts";
    $scope.title = "Government contacts";
    
    var list = CommonService.getList('governmentcontacts');
    $scope.list = list;
})
.controller('GovernmentCreateCtrl', function($scope, $timeout, CommonService, $firebaseArray) {
    $scope.form = {};
    $scope.category = 'governmentcontacts'

    $scope.save = function (category) {
        CommonService.addRecord($scope.form, category);
        window.location.href ='/#/app/' + category;

    }

})
.controller('MedicalListCtrl', function($scope, $timeout, CommonService, $firebaseArray) {

    $scope.category = "medicalsites";
    $scope.title = "Medical sites";
    
    var list = CommonService.getList('medicalsites');
    $scope.list = list;
})
.controller('MedicalCreateCtrl', function($scope, $timeout, CommonService, $firebaseArray) {
    $scope.form = {};
    $scope.category = 'medicalsites'

    $scope.save = function (category) {
        CommonService.addRecord($scope.form, category);
        window.location.href ='/#/app/' + category;

    }

})
.controller('GovernmentCreateCtrl', function($scope, $timeout, CommonService, $firebaseArray) {
    $scope.form = {};
    $scope.category = 'governmentcontacts'

    $scope.save = function (category) {
        CommonService.addRecord($scope.form, 'governmentcontacts');
        window.location.href ='/#/app/governmentcontacts';

    }
})
;
