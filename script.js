<script>
// Initialize Firebase
var config = {
    apiKey: "AIzaSyA3UdBrIvHxcTEaGGEFI6obqi17JjT6S9Q",
    authDomain: "local-dev-amb.firebaseapp.com",
    databaseURL: "https://local-dev-amb.firebaseio.com",
    projectId: "local-dev-amb",
    storageBucket: "local-dev-amb.appspot.com",
    messagingSenderId: "464414262517"
};

firebase.initializeApp(config);

</script>

const database = firebase.database();

var rootRef = database.ref().child("users");


rootRef.on("child_added", snap => {

    var email = snap.child("mail").val();
    var name = snap.child("username").val();
    var date = snap.child("dateList").val();

    console.log(dateList);


$('#table_body').append("<tr><td><th>username</th>" + name + "</td><td><th>username</th>" + email + "</td></tr>");

});

var rootRef2 = database.ref().child("photos");

rootRef2.on("child_added", snap => {

    var categorie = snap.child("category").val();
    console.log(categorie);

$('#table_body2').append("<tr><td>" + categorie + "</td><td>");


});




firebase.database().ref('/users/').on('value').then(function(snapshot) {

    var username = snapshot.val().username;
    var email = snapshot.val().email;
    console.log(username);
    console.log(email);

});