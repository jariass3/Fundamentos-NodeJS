// Definiendo una función que recibe un callback

let getUsuarioById = (id, callback) => {

    //muchas cosas con base de satos...
    let usuario = {
        nombre: 'Joel',
        id
    }

    if (id == 20) {
        callback(`El usuario con id ${id}, no existe`);
    } else {

        // Cuando ya encuentra el usuario, INVOCA al callback
        callback(null, usuario);
    }

}


// Utilizando la función
getUsuarioById(10, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log("Usuario de la BDD: ", usuario);
});