export class Exams {
  constructor(answer, weight) {
    this.respostasCorretas = answer.values;
    this.pesos = weight;
    this.alunos = [];
  }

  add(exam) {
    let nota = 0;
    
    if (exam.values.q1 === this.respostasCorretas.q1) nota += this.pesos.q1;
    if (exam.values.q2 === this.respostasCorretas.q2) nota += this.pesos.q2;
    if (exam.values.q3 === this.respostasCorretas.q3) nota += this.pesos.q3;
    if (exam.values.q4 === this.respostasCorretas.q4) nota += this.pesos.q4;
    if (exam.values.q5 === this.respostasCorretas.q5) nota += this.pesos.q5;
    
    this.alunos.push({
      name: exam.student,
      score: nota
    });
  }

  avg() {
    if (this.alunos.length === 0) return 0;
    let soma = 0;
    for (let aluno of this.alunos) {
      soma += aluno.score;
    }
    return soma / this.alunos.length;
  }

  min(count = 1) {
    if (this.alunos.length === 0) return [];
    let copia = [...this.alunos];
    copia.sort((a, b) => a.score - b.score);
    return copia.slice(0, count).map(aluno => aluno.score);
  }

  max(count = 1) {
    if (this.alunos.length === 0) return [];
    let copia = [...this.alunos];
    copia.sort((a, b) => b.score - a.score);
    return copia.slice(0, count).map(aluno => aluno.score);
  }

  lt(limite) {
    return this.alunos
      .filter(aluno => aluno.score < limite)
      .map(aluno => aluno.score);
  }

  gt(limite) {
    return this.alunos
      .filter(aluno => aluno.score > limite)
      .map(aluno => aluno.score);
  }
}