rescue.filter('searchFor', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){
            if(item.name.toLowerCase().indexOf(searchString) !== -1 ||
            item.last_location.toLowerCase().indexOf(searchString) !== -1 || 
            item.phone.toLowerCase().indexOf(searchString) !== -1 ||
            item.email.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
})
.filter('searchForVolunteer', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){
            if(item.fname.toLowerCase().indexOf(searchString) !== -1 ||
            item.lname.toLowerCase().indexOf(searchString) !== -1 || 
            (item.donationitemsselected.join() || "").toLowerCase().indexOf(searchString) !== -1  ||
            (item.occupation || "").toLowerCase().indexOf(searchString) !== -1 ||
            (item.address || "").toLowerCase().indexOf(searchString) !== -1 ||
            (item.email || "").toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
})
.filter('searchForOrganization', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){
            if((item.name || "").toLowerCase().indexOf(searchString) !== -1 ||
            (item.city || "").toLowerCase().indexOf(searchString) !== -1 || 
            (item.address || "").toLowerCase().indexOf(searchString) !== -1 || 
            (item.description || "").toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
})
.filter('searchForGovernment', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)
    return function(arr, searchString){
        if(!searchString){
            return arr;
        }
        var result = [];
        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){
            if((item.last_location || "").toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }
        });
        return result;
    };
})
;