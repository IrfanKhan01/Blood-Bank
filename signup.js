
var database = firebase.database().ref('/');




var fName = document.getElementById('fname');
var lName = document.getElementById('lname');
var email =document.getElementById('email');
var pass = document.getElementById('password');

function signup() {


     var user = {
        firstName: fName.value,
        lastName: lName.value,
        email: email.value,
        pass: pass.value
    };
    firebase.auth().
        createUserWithEmailAndPassword(user.email, user.pass)
        .then(function (res) {
            database.child('users/' + res.uid).set(user)
                .then(function () {
                    location = 'login/login.html'
                })
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
}