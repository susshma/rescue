rescue.service('OrganizationService', function ($firebaseArray) {
    var organizationref = new Firebase("https://rescuenepal.firebaseIO.com/organization");
    var list = $firebaseArray(organizationref);


    this.getOrganizationList = function () {
        return list;
    };

    this.addOrganization = function (formdata) {
        list.$add(formdata).then(function(ref) {
          var id = ref.key();
          console.log("added record with id " + id);
          list.$indexFor(id); // returns location in the array
        });
    }
    this.saveOrganization = function (formdata) {
        list.$save(formdata).then(function(ref) {
            var id = ref.key();
            console.log("added record with id " + id);
            list.$indexFor(id); // returns location in the array
        }); 
    }
});