export function triangulo(a , b , c){
    if (a + b > c && a + c > b && c + b > a && a > 0 && b > 0 && c > 0){
        if (a === b && b === c){
            console.log("equilateral")
        }
        else if (a === b || b === c || a === c){
            console.log("isosceles")
        }
        else{
            console.log("scalene")
        }
    }
    else{
        console.log("none")
    }
}