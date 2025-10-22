"use strict";
let palomaInput = document.getElementById("inputNumholder");
let subB = document.getElementById("submit");
let res = document.getElementById("pHolder");
let abc = [];
subB.addEventListener('click', () =>{
    let x = palomaInput.value;
    let div = 2;
        while (x > 1) {
            while(x % div === 0) {
                abc.push(div);
                x /= div;
            }
            div++;
        }
    let resultado = `<b> El resultado es: </b> ${abc.join(' x ')}`;
    res.innerHTML = resultado
    abc = [];
})

palomaInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        subB.click();
    }
});
