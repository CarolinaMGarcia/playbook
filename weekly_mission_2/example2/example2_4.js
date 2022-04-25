// ejemplo 4: uso de map para recorreer los elementos de una lista y crear una nueva lista
/**
 * arrow function and explicit return
 * const modifiedArray = arr.map((element,index) => element);
 */
const number = [1,2,3,4,5]
const numberSquare = number.map(function(num){return num * num});
// tambien puedes escribri la funcion como fat arrow
//const numberSquare = numbers4.map((num) => return num * num)
console.log("Ejemplo 4: imprimiendo la lista de elementos al cuadrado");3
console.log(numberSquare);