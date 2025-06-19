

function sum(vetor) {
    return vetor.reduce((acc, val) => acc + val, 0);
}

function sumOdds(vetor) {
    let vetor_atual = vetor.filter((val) => val % 2 !== 0)
    return vetor_atual.reduce((acc, val) => acc + val, 0);
}

function product(vetor) {
    return vetor.reduce((acc, val) => acc * val, 1);
}


console.log(sum([1, 2, 3])); // 6
console.log(sum([2, 2, 2])); // 6
console.log(sum([1, 2, 3, 4, 5, 6])); // 21

console.log(sumOdds([1, 2, 3])); // 4
console.log(sumOdds([2, 2, 2])); // 0
console.log(sumOdds([1, 2, 3, 4, 5, 6])); // 9

console.log(product([1, 2, 3])); // 6
console.log(product([2, 2, 2])); // 8
console.log(product([1, 2, 3, 4, 5, 6])); // 720