rescue.service('CommonService', function ($firebaseArray, $http) {

    this.getList = function (category) {
        var ref = new Firebase("https://rescuenepal.firebaseIO.com/" + category);
        var list = $firebaseArray(ref);
        return list;
    };

    this.addRecord = function (formdata, category) {
        var ref = new Firebase("https://rescuenepal.firebaseIO.com/" + category);
        var list = $firebaseArray(ref);
        list.$add(formdata).then(function(ref) {
          var id = ref.key();
          console.log("added record with id " + id);
          list.$indexFor(id); // returns location in the array
        });
    }
});