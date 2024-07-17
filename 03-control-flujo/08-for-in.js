let user = {
    id: 1,
    name: 'Paco',
    age: 25,
};

for (let prop in user) {
    console.log(prop, user[prop]);
}

let animales = ['perro', 'gato', 'raton'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}