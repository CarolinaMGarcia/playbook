// ejemplo 5: Objeto con metodo que recibe parametros

const myPet = {
    name: "kika",
    SayHelloToMyPet: function(yourpet){
        console.log(`${this.name} say's hello to ${yourpet}`);
    }
}

console.log("Ejemplo 5: Objeto con metodo que recibe parametros");
myPet.SayHelloToMyPet("kiku, manchas");