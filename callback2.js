// Definiendo una función que recibe un callback

let getUsuarioById = (id, callback) => {

    //muchas cosas con base de satos...
    let usuario = {
        nombre: 'Joel',
        id
    }

    // Cuando ya encuentra el usuario, INVOCA al callback
    callback(usuario);

}


// Utilizando la función
getUsuarioById(10, (usuario) => {
    console.log("Usuario de la BDD: ", usuario);
});