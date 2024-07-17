function crearUsuario(name, email) {
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperar clave...');
        },
    };
}

let user1 = crearUsuario('Paco', 'paco@gmail.com')
let user2 = crearUsuario('Pepe', 'pepe@gmail.com')

console.log(user1, user2);