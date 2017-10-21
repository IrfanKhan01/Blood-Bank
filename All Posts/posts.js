

var database = firebase.database().ref('/');

var posts = document.getElementById('posts');

var uId = localStorage.getItem('UID');

var user =JSON.parse(localStorage.getItem('loggedInUser'));
console.log(user);
 database.child('post').on('child_added', function(snap) {
    var obj = snap.val();
    var objK = snap.key;

    console.log(obj.bloodGrp);

    var div1 = document.createElement('DIV');
    div1.className = 'card';
    div1.id = objK;
    div1.style.margin = '2%';

    var hd = document.createElement('DIV');
    hd.className = 'card-header bg-danger text-center';
    hd.style.color = 'white';
    hd.innerHTML = 'Blood Required';
    div1.appendChild(hd);
    
    var div2 = document.createElement('DIV');
    div2.className = 'card-block';

    var h4 = document.createElement('H4');
    h4.className = 'card-title';
    h4.innerHTML = user.firstName;
    div2.appendChild(h4);

    var p = document.createElement('P');
    p.className = 'card-text';
    p.innerHTML = obj.des;
    div2.appendChild(p);
    div1.appendChild(div2);


    var ul = document.createElement('UL');
    ul.className = 'list-group list-group-flush';
    var li1 = document.createElement('LI');
    li1.innerHTML = obj.bloodGrp;
    li1.className = 'list-group-item';
    ul.appendChild(li1);
    div1.appendChild(ul);

    var li2 = document.createElement('LI');
    li2.className = 'list-group-item';
    li2.innerHTML = obj.hospital;
    ul.appendChild(li2);

    var li3 = document.createElement('LI');
    li3.className = 'list-group-item';
    li3.innerHTML = obj.country;
    ul.appendChild(li3);

    var li4 = document.createElement('LI');
    li4.className = 'list-group-item';
    li4.innerHTML = obj.city;
    ul.appendChild(li4);

    var li5 = document.createElement('LI');
    li5.className = 'list-group-item';
    li5.innerHTML = obj.relation;
    ul.appendChild(li5);

    var li6 = document.createElement('li');
    li6.className = 'list-group-item';
    li6.innerHTML = obj.urgency;
    ul.appendChild(li6);


    posts.appendChild(div1);
    // console.log(objK);
 });

