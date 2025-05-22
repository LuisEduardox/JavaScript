import { Exams } from './exams.js';

const pesos = { q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 };
const gabarito = {
  values: { q1: 'a', q2: 'b', q3: 'a', q4: 'c', q5: 'd' }
};

const exam = new Exams(gabarito, pesos);

exam.add({
  student: 'João',
  values: { q1: 'a', q2: 'b', q3: 'b', q4: 'b', q5: 'b' }
});

exam.add({
  student: 'Maria',
  values: { q1: 'c', q2: 'b', q3: 'a', q4: 'c', q5: 'd' }
});

console.log("Média:", exam.avg()); // 6
console.log("Menor nota:", exam.min()); // [4]
console.log("Maior nota:", exam.max()); // [8]
console.log("Notas < 5:", exam.lt(5)); // [4]
console.log("Notas > 5:", exam.gt(5)); // [8]