"use strict";
let palomaInput = document.getElementById("inputNumholder");
let subB = document.getElementById("submit");
let res = document.getElementById("pHolder");
let abc = [];
const accessStatus = localStorage.getItem('accessStatusGranted');
let body = document.getElementById('cuerpo')
let counts = {};
let Anum = [];
let Vnum = [];

/*body.addEventListener('load', ()=>{
    localStorage.setItem('accessStatusGranted', false)
})*/

/*bton de facnizar*/ 

function countNum() {
    const keys = Object.keys(counts);
    for (let i = 0; i < keys.length; i++) {
        const k = keys[i];
        if (isFinite(k) && String(k).trim() !== "") {
            Anum.push(k);
        }
    }
}
function valueNum() {
    Vnum = Object.values(counts);
}
function render() {
    let parts = [];
    for (let i = 0; i < Anum.length; i++) {
        const a = Anum[i];
        const v = Vnum[i];
        if (v === 1 || v === "1") {
        parts.push(`${a}`);
        } else {
        parts.push(`${a} ^ ${v}`);
        }
    }
    res.textContent = `buoeqb:  ${parts.join(' x ')}`
    parts =[];
}
function eeee() {
    countNum();
    valueNum();
    render();
    console.log(counts);
    console.log(Object.keys(counts));
    console.log(Object.values(counts));
    console.log(`why my codes suckscaiebvJHAD B`)
    console.log(Object.values(counts).length);
    console.log(Anum);
    console.log(Object.entries(counts));
    console.log(Vnum);
    console.log(`el resultado es: ${Anum[0]} ^ ${Vnum[0]}`);
    console.log(abc)
}

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
    for (let i = 0; i < abc.length; i++) {
        const valor = abc[i];
        counts[valor] = (counts[valor] || 0) + 1;
    }
    eeee();
    abc = [];
    Anum = [];
    Vnum = [];
    counts = {};
});
palomaInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        subB.click();
    }
});

if (accessStatus != 'true') {
    window.location.href = "index.html"
}
