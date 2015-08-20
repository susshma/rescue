// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js test
var rescue = angular.module('rescue', ['ionic', 'firebase', 'ui.router', 'flow'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'MenuCtrl'
  })
  .state('app.home', {
    url: "/home",
    views: {
      'menuContent': {
        templateUrl: "templates/home.html",
        controller: 'MissingCtrl'
      }
    }
  })
  .state('app.missing', {
    url: "/missing",
    views: {
      'menuContent': {
        templateUrl: "templates/missing.html",
        controller: 'MissingCtrl'
      }
    }
  })

  .state('app.missingDetails', {
    url: "/details/:personId",
    views: {
      'menuContent': {
        templateUrl: "templates/missingDetails.html",
        controller: 'MissingDetailstCtrl'
      }
    }
  })
  .state('app.volunteer', {
    url: "/volunteer",
    views: {
      'menuContent': {
        templateUrl: "templates/volunteer.html",
        controller: 'VolunteerCtrl'
      }
    }
  })
  .state('app.volunteerdetails', {
    url: "/volunteerdetails/:volunteerId",
    views: {
      'menuContent': {
        templateUrl: "templates/volunteerDetails.html",
        controller: 'VolunteerDetailsCtrl'
      }
    }
  })
  .state('app.createVolunteer', {
    url: "/volunteer/create",
    views: {
      'menuContent': {
        templateUrl: "templates/createVolunteer.html",
        controller: 'CreateVolunteerCtrl'
      }
    }
  })
  .state('app.editVolunteer', {
    url: "/volunteer/edit/:volunteerId",
    views: {
      'menuContent': {
        templateUrl: "templates/createVolunteer.html",
        controller: 'EditVolunteerCtrl'
      }
    }
  })
  .state('app.createMissing', {
    url: "/missing/create",
    views: {
      'menuContent': {
        templateUrl: "templates/createMissing.html",
        controller: 'CreateMissingCtrl'
      }
    }
  })
  .state('app.editMissing', {
    url: "/missing/edit/:personId",
    views: {
      'menuContent': {
        templateUrl: "templates/createMissing.html",
        controller: 'EditMissingCtrl'
      }
    }
  })
  .state('app.governmentcontacts', {
    url: "/governmentcontacts",
    views: {
      'menuContent': {
        templateUrl: "templates/governmentcontactlist.html",
        controller: 'GovernmentListCtrl'
      }
    }
  })
  .state('app.governmentcontactscreate', {
    url: "/governmentcontacts/create",
    views: {
      'menuContent': {
        templateUrl: "templates/governmentCreate.html",
        controller: 'GovernmentCreateCtrl'
      }
    }
  })
  .state('app.medicalsites', {
    url: "/medicalsites",
    views: {
      'menuContent': {
        templateUrl: "templates/commonlist.html",
        controller: 'MedicalListCtrl'
      }
    }
  })
  .state('app.medicalsitescreate', {
    url: "/medicalsites/create",
    views: {
      'menuContent': {
        templateUrl: "templates/commonCreate.html",
        controller: 'MedicalCreateCtrl'
      }
    }
  })
  .state('app.sheltersites', {
    url: "/sheltersites",
    views: {
      'menuContent': {
        templateUrl: "templates/commonlist.html",
        controller: 'CommonListCtrl'
      }
    }
  })
  .state('app.emergency', {
    url: "/emergencycontacts",
    views: {
      'menuContent': {
        templateUrl: "templates/commonlist.html",
        controller: 'CommonListCtrl'
      }
    }
  })
  .state('app.emergencycreate', {
    url: "/emergencycontacts/create",
    views: {
      'menuContent': {
        templateUrl: "templates/emergencylist.html",
        controller: 'EmergencyCreateCtrl'
      }
    }
  })
  .state('app.supply', {
    url: "/supply",
    views: {
      'menuContent': {
        templateUrl: "templates/commonlist.html",
        controller: 'SupplyCtrl'
      }
    }
  })
  .state('app.organization', {
    url: "/organizations",
    views: {
      'menuContent': {
        templateUrl: "templates/organization.html",
        controller: 'OrganizationCtrl'
      }
    }
  })
  .state('app.createOrganization', {
    url: "/organiztion/create",
    views: {
      'menuContent': {
        templateUrl: "templates/createOrganization.html",
        controller: 'CreateOrganizationCtrl'
      }
    }
  })
  .state('app.editOrganization', {
    url: "/organization/edit/:organizationId",
    views: {
      'menuContent': {
        templateUrl: "templates/createOrganization.html",
        controller: 'EditOrganizationCtrl'
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/volunteer');
})

.controller('AppCtrl', ['$scope', '$ionicSideMenuDelegate',function($scope, $state) {
  $scope.state = $state;
}])

.controller('MenuCtrl', ['$scope', '$ionicSideMenuDelegate',function($scope, $state, $location) {

  $scope.isActive = function (viewLocation) {
      var tab = window.location.hash.split("/")[2];
      return viewLocation === tab;
  };
  
}])
.config(['flowFactoryProvider', function (flowFactoryProvider) {
  flowFactoryProvider.defaults = {
    target: 'upload.php',
    permanentErrors: [404, 500, 501],
    maxChunkRetries: 1,
    chunkRetryInterval: 5000,
    simultaneousUploads: 4,
    singleFile: true
  };
  flowFactoryProvider.on('catchAll', function (event) {
    console.log('catchAll', arguments);
  });
  // Can be used with different implementations of Flow.js
  // flowFactoryProvider.factory = fustyFlowFactory;
}]);
