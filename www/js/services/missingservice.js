rescue.service('MissingService', function ($firebaseArray) {
    var ref = new Firebase("https://rescuenepal.firebaseIO.com/missing");
    var missingRef = ref.child("missing");
    
    this.getMissing= function(personId) {
        var list = $firebaseArray(missingRef);
        return list.$getRecord(personId);
    };

    this.getMissingList = function () {
        return missingRef;
    };

    this.addMissing = function (formdata) {
        var list = $firebaseArray(missingRef);
        list.$add(formdata).then(function(ref) {
          var id = ref.key();
          console.log("added record with id " + id);
          list.$indexFor(id); // returns location in the array
        });
    }
});