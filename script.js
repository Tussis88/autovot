const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const total = document.getElementById('total');
const grade = document.getElementById('voto');

correct.addEventListener('input', calcTotal);
wrong.addEventListener('input', calcTotal);

function calcTotal() {
    const correctValue = parseInt(correct.value) || 0;
    const wrongValue = parseFloat(wrong.value) || 0;

    const totalValue = correctValue - (wrongValue / 2);
    tottext = totalValue + '/ 30';

    const totalGrade = (totalValue / 30) * 10;
    gradetext = totalGrade.toFixed(1) + '/10';

    total.textContent = tottext;
    grade.textContent = gradetext;

}