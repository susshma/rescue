rescue.service('VolunteerService', function ($firebaseArray) {

    var volunteerRef = new Firebase("https://rescuenepal.firebaseIO.com/volunteer");
    var list = $firebaseArray(volunteerRef);
    
    this.getVolunteer= function(volunteerId) {
    	list.$loaded().then(function(list) {
    		return list.$getRecord(volunteerId);
		}); 
    };

    this.getVolunteerList = function () {
        return list;
    };

    this.addVolunteer = function (formdata) { 
        list.$add(formdata).then(function(ref) {
          	var id = ref.key();
          	console.log("added record with id " + id);
          	list.$indexFor(id); // returns location in the array
        });
    }
});