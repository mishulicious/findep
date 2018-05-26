function registrarse() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
        .signInWithPopup(provider)
        .then(function(result) {
            var username = document.getElementById("name");
            var email = document.getElementById("email");
            var botonGugel = document.getElementById("btn-registro");
            var boton = document.getElementById("btn-salir");

            username.innerHTML = result.user.displayName;
            email.innerHTML = result.user.email;
        })

}