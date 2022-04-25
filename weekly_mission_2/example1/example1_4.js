//Ejemplo 4: objeto con metodos
const pet = {
    name: "kika",
    //esta es una funcion que se guarda como propiedad
    sayHello: function()
    {
        //this.name hace referencia a la propiedad del objeto
        console.log(`${this.name} te saluda en español!`);
    }
}

console.log("Ejemplo 4: Objeto con metodos");
pet.sayHello();