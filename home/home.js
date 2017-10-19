
var database = firebase.database().ref('/')



var bloodGroup = document.getElementById('blood-group');
var urgency = document.getElementById('urgency');
var country = document.getElementById('country');
var city = document.getElementById('city');
var hospital = document.getElementById('hospital');
var relation = document.getElementById('relation');
var description = document.getElementById('description');




// localStorage 
var uId = localStorage.getItem('UID');
console.log(uId);
var userData = localStorage.getItem('loggedInUser');
var availData = JSON.parse(userData);

console.log(availData)

function post() {
    var donor = {
        bloodGrp: bloodGroup.value,
        urgency: urgency.value,
        country: country.value,
        city: city.value,
        hospital: hospital.value,
        relation: relation.value,
        des: description.value
    };

    console.log(donor);

    database.child('post/'+uId).push(donor);
}

database.child('post').on('child_added', function(snap) {
    var demo = snap.val();
    // var k = snap.key;

    // console.log(demo)
    // console.log(k);
    

    for (var key in demo) {
        var element = demo[key];
        element.ID = key;


        console.log(element.ID);
        
    }
    
})