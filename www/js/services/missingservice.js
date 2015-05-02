rescue.service('MissingService', function () {
    var ref = new Firebase("https://rescuenepal.firebaseIO.com/missing");
    var missingRef = ref.child("missing");
    
    this.getMissing= function(personId) {
        return list[personId];
    };

    this.getMissingList = function () {
        return missingRef;

    };

    this.addMissing = function (formdata) {
        missingRef.push({
            "name": formdata.name,
            "nationality": formdata.nationality,
            "phone": formdata.phone,
            "last_location": formdata.last_location,
            "email": formdata.email,
            "posted_by": formdata.posted_by,
            "description": formdata.description
        });
    }
});