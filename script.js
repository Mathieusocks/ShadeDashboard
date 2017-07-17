/* var rootRef = firebase.database().ref().child("users");

 rootRef.on("child_added", snap => {

 var email = snap.child("mail").val();
 var name = snap.child("username").val();

 $('#table_body').append("<tr><td>" + name + "</td><td>" + email + "</td></tr>");

 });


 var tab =[name];
 console.log(tab[1]);*/


firebase.database().ref('/users/').on('value', function (snapshot) {
    let data = snapshot.val();
   // console.log('table user', data);
    //console.log('nombre de user = ', data.length);

    let plop = [];

    for (key in data) {
        /*console.log('username = ',key);*/
        plop.push(key);
    }

  //  console.log('nombre de user = ', plop.length);
    var nbrusr = plop.length;



    //afficher user n4
    //console.log('user n0 4', data[plop[5]]);

    var usr = data[plop[5]].username;
    var photo = data[plop[5]].isPhoto;
    var inscri = data[plop[5]].created;
    var cat = data[plop[5]].categoryActive;

    var foo = null;

    for (key in cat) {
        foo = (cat[key]);
        break;
    }

    //console.log(foo);


    /* console.log('catégorie associée',cat);*/

    $('#nbruser').append("<h1>" + nbrusr + "</h1>");

    $('#table_body').append("<tr><td>" + "Nom de l'utilisateur : " + usr + "</td><td><tr><td>" + "Prise de photo : " + photo + "</td><td><tr><td>" + " Date de création du compte: " + inscri + "</td><td><tr><td>" + "Photo parties du corps: " + foo + "<tr><td>");


    // afficher tout les user
    for (let i = 0; i < plop.length; i++) {
       // console.log('usr list : ', data[plop[i]]);
        break;
    }


    //afficher si le user 3 a posté une photo
    /*console.log('magimagie',data[plop[2]].isPhoto);*/


});


firebase.database().ref('/photos/').on('value', function (snapshot) {
    let data = snapshot.val();


    let dataa = snapshot.val();
    console.log("nbr photos: ", dataa);

    let plop = [];

    for (key in dataa) {
        /*console.log('username = ',key);*/
        plop.push(key);
    }

    var nbrphotos = plop.length;
    console.log("nbr photos: ", nbrphotos);



    $('#nbrphoto').append("<h1>"+ nbrphotos + "</h1>");

});


firebase.database().ref('/users/categoryActive').on('value', function (snapshot) {




});


