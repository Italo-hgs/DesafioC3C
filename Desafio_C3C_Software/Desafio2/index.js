
const valor = document.querySelector("#valor");
const valor2 = document.querySelector("#valor2");
const valor3 = document.querySelector("#valor3");
const btn = document.getElementById("calcular");

btn.onclick = () => {
    if(valor.value == ""){
        valor.focus();
        document.getElementById("resultado").innerHTML = "Digite um numero inteiro nas 3 caixas";
    } else if (valor2.value == "") {
        valor2.focus();
        document.getElementById("resultado").innerHTML = "Digite um numero inteiro nas 3 caixas";
    } else if (valor3.value == ""){
        valor3.focus();
        document.getElementById("resultado").innerHTML = "Digite um numero inteiro nas 3 caixas";
    } else {
        document.getElementById("resultado").innerHTML = "O Resultado é: " + bhaskara(valor.value, valor2.value, valor3.value);
    }
}

const bhaskara = (ax2, bx, c) => {
    let res = [];
    let delta = (bx ** 2) - (4 * ax2 * c);
    if (delta < 0) {
        return "Delta é negativo";
    }
    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2;
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2;
    res.push(x1);
    res.push(x2);
    return res.join(', ');
}
