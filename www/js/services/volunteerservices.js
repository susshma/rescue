rescue.service('VolunteerService', function ($firebaseArray) {

    var volunteerRef = new Firebase("https://rescuenepal.firebaseIO.com/volunteer");
    
    this.getVolunteer= function(personId) {
        var list = $firebaseArray(volunteerRef);
        return list.$getRecord(volunteerId);
    };

    this.getVolunteerList = function () {
        return volunteerRef;
    };

    this.addVolunteer = function (formdata) {
        var list = $firebaseArray(volunteerRef);
        list.$add(formdata).then(function(ref) {
          	var id = ref.key();
          	console.log("added record with id " + id);
          	list.$indexFor(id); // returns location in the array
        });
    }
});