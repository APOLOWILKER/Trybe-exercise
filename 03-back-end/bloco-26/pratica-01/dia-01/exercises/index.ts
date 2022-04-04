// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango que tem D = 32cm e d = 18cm: ${Exercise.losangle(32, 18)}cm²`);
console.log(`Losango que tem D = 200cm e d = 50cm: ${Exercise.losangle(200, 50)}cm²`);
console.log(`Losango que tem D = 75cm e d = 25cm: ${Exercise.losangle(75, 25)}cm²`);

console.log(`Trapezio que tem altura = 50cm, B = 100cm e b = 70 e: ${Exercise.trapezio(50, 100, 70)}cm²`);
console.log(`Trapezio que tem altura = 35cm, B = 75cm e b = 50 e: ${Exercise.trapezio(35, 75, 50)}cm²`);
console.log(`Trapezio que tem altura = 80cm, B = 80cm e b = 120 e: ${Exercise.trapezio(80, 80, 120)}cm²`);

console.log(`Circulo de raio = 25cm e: ${Exercise.circle(25)}cm²`);
console.log(`Circulo de raio = 100cm e: ${Exercise.circle(100)}cm²`);
console.log(`Circulo de raio = 12.5cm e: ${Exercise.circle(12.5)}cm²`);