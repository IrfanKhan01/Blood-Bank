
var database = firebase.database().ref('/')
var email =document.getElementById('email');
var pass = document.getElementById('password');

function login() {
    var user = {
            email: email.value,
            password: pass.value
        }

        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(function (res) {
                console.log(res.uid)
                
                database.child('users/' + res.uid)
                    .once('value', function (snapshot) {


                        // localStorage.setItem('uid', res.uid);
                        localStorage.setItem('UID', snapshot.key);

                        var convert = JSON.stringify(snapshot.val())
                        localStorage.setItem('loggedInUser', convert)
                        location = '../home/home.html'
                        // console.log(convert)
                    })
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });


}
 