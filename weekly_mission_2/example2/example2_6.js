// ejemplo 6: uso de map para convertir todos los nombres de una lista a myusculas
const nombres = ['diana','sofia','danna','maria'];
const nombresFirstThreeLetters = nombres.map((nombres) => nombres.toUpperCase().slice(0,3)); //slce obtiene solo la longitud marcada del string
console.log("ejemplo 6: uso de la map para convertir todos los nombres de una lista a mayusculas");3
console.log(nombresFirstThreeLetters);
