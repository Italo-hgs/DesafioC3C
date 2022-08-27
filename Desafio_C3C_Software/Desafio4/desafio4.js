const numero = document.getElementById('numero');
const btn = document.getElementById('btnExecutar')
const res = document.getElementsByClassName('resultado')

btn.onclick = () => {
    var nums = [];
    for(var i = 1; i <= numero.value; i++) {

        if(i % 3 == 0 && i % 5 == 0)
            nums.push("LuidyMoura");
        else if(i % 9 == 0)
            nums.push("Moura");
        else if(i % 5 == 0) 
            nums.push("Luidy");
        else
            nums.push(i);
    }
    console.log(nums)
    alert(nums)
}










