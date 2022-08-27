function tipoTriangulo() {

    // Selecionando os campos da tela
    // inputs e botao
    const p1 = document.getElementById('primeira')
    const p2 = document.getElementById('segunda')
    const p3 = document.getElementById('terceira')
    const btn = document.getElementById('btnExecutar')

    // labels
    const l1 = document.getElementById('l1')
    const l2 = document.getElementById('l2')
    const l3 = document.getElementById('l3')

    // mensagem de aviso
    const aviso = document.getElementById('aviso')

    // resultado
    const res = document.getElementById('resultado')

    p1.onblur = () => {
        if(p1.value == ''){
            l1.style = 'color: red'
            p1.style = 'border-color: red'
        }
        else {
            l1.style = 'color: #fff'
            p1.style = 'border-color: #fff'
        }
    }

    p2.onblur = () => {
        if(p2.value == ''){
            l2.style = 'color: red'
            p2.style = 'border-color: red'
        }
        else {
            l2.style = 'color: #fff'
            p2.style = 'border-color: #fff'
        }
    }

    p3.onblur = () => {
        if(p3.value == ''){
            l3.style = 'color: red'
            p3.style = 'border-color: red'
        }
        else {
            l3.style = 'color: #fff'
            p3.style = 'border-color: #fff'
        }
    }

    btn.onclick = () => {
        if(p1.value == '' && p2.value != '' && p3.value != ''){
            p1.focus();
        }
        else if (p2.value == '' && p1.value != '' && p3.value != ''){
            p2.focus();
        }
        else if(p3.value == '' && p1.value != '' && p2.value != ''){
            p3.focus();
        } 
        else if(p1.value == '' || p2.value == '' || p3.value == ''){
            aviso.innerText = 'Nenhum campo pode ser vazio'
            aviso.style.display = 'block'
            res.value = ''
        }
        else {
            res.value = paramTriangulo(p1.value, p2.value, p3.value)
            aviso.style.display = 'none'
        }
    }

    const paramTriangulo = (valor1, valor2, valor3) => {
        valor1 = Number.parseFloat(valor1)
        valor2 = Number.parseFloat(valor2)
        valor3 = Number.parseFloat(valor3)

        //return (valor1 + valor2 + valor3)
        if(valor1 == valor2 && valor2 == valor3){
            return 'Triângulo equilátero'
        }
        else if (valor1 == valor2 || valor1 == valor3 || valor3 == valor2){
           return 'Triângulo isóceles'
        }
        else {
            return 'Triângulo escaleno'
        }
    }
}

tipoTriangulo();