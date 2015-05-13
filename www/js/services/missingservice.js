rescue.service('MissingService', function ($firebaseArray, $http) {
    var ref = new Firebase("https://rescuenepal.firebaseIO.com/missing");
    var missingRef = ref.child("missing");
    var list = $firebaseArray(missingRef);
    
    this.getMissing= function(personId) { 
        return list.$getRecord(personId);
    };

    this.getMissingList = function () {
        return list;
    };

    this.addMissing = function (formdata) {
        list.$add(formdata).then(function(ref) {
          var id = ref.key();
          console.log("added record with id " + id);
          list.$indexFor(id); // returns location in the array
        });
    }

    this.getCountries = function () { 
        return $http.get('https://restcountries.eu/rest/v1/all');
    }
});