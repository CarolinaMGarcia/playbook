const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("ejercicio 2.1");
   explorers.forEach((elemento) => console.log(elemento.name));
   console.log("ejercicio 2.2");
   explorers.forEach((elemento) => console.log(elemento.stack));

   console.log("ejercicio 2.3");
const nueva_lista = explorers.map((elemento) => elemento.stack)

console.log(nueva_lista);

console.log("ejercicio 2.4");


const filtrado_stack = explorers.filter((explorer) => explorer.stack == "js")

console.log(filtrado_stack);


console.log("ejercicio 2.5");

const findExplorers = explorers.find((elemento) => elemento.city === "CDMX")

console.log(findExplorers);

console.log("ejercicio 2.6");


const reduceExplorers = explorers.reduce((acumulador, elemento) => acumulador + elemento.exercises_completed,0);

console.log(reduceExplorers);

console.log("ejercico 2.7");


const someExplorers = explorers.some((elemento) => elemento.missions.frontend.exercisesFinished === true);
console.log(someExplorers);

console.log("ejercicio 2.8");
const everyExplorers = explorers.every((elemento) => elemento.missions.onboarding.isFinished === true);
console.log(everyExplorers);
