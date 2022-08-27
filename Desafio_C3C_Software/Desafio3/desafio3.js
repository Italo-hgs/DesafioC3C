// pegando os campos da tela
const nota = document.getElementById('nota')
const btn = document.getElementById('calcular')
const res = document.getElementById('resultado')

// função de clique
btn.onclick = () => {
    if(nota.value == ''){
        alert('Informe a nota do aluno')
    }
    else if(nota.value < 40 ){
        alert(`Aluno reprovado, nota final: ${nota.value}`)
    }
    else if(nota.value % 3 == 1 || nota.value % 5 == 4 && nota.value >= 40){
        alert( 'Aluno aprovado, nota final: ' + Math.ceil(nota.value / 5) * 5 );
    } else {
        alert(Math.floor(nota.value / 1) * 1)
    }
}


// se a nota for % 3 == 0 entao nota + 2