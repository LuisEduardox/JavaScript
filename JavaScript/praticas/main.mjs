import {calc ,soma , subtracao , divisao , multiplicacao} from './calc.mjs'
import { triangulo } from './triangulo.mjs'
import { areaofcircle } from './areaofcircle.mjs'
import { fibonacci } from './fibonacci.mjs'

console.log("calculadora\n")

console.log(calc(10 , 5 , soma)) // 15

console.log(calc(10 , 5, subtracao)) // 5

console.log(calc(10 , 5, divisao)) // 2

console.log(calc(10 , 5, multiplicacao)) // 50
console.log("\n")

console.log("verificação de triângulos\n")

triangulo(2, 2, 2) // equilateral

triangulo(1, 2, 2) // isosceles

triangulo(2, 3, 4) // scalene

triangulo(0, 2, 2) // none

triangulo(-1, 10 ,10) // none
console.log("\n")

console.log("calculando a área do circulo\n")

console.log(areaofcircle(1))
console.log(areaofcircle(10))
console.log("\n")

console.log("sequência de fibonacci\n")

console.log(fibonacci(6))
console.log(fibonacci(0))
console.log(fibonacci())
console.log("\n")