const cif_0 = document.querySelector('.symbol-zero')
const cif_1 = document.querySelector('.symbol-unu')
const cif_2 = document.querySelector('.symbol-doi')
const cif_3 = document.querySelector('.symbol-trei')
const cif_4 = document.querySelector('.symbol-patru')
const cif_5 = document.querySelector('.symbol-cinci')
const cif_6 = document.querySelector('.symbol-sase')
const cif_7 = document.querySelector('.symbol-sapte')
const cif_8 = document.querySelector('.symbol-opt')
const cif_9 = document.querySelector('.symbol-noua')
const input = document.querySelector('.screen')

cif_0.addEventListener('click',(ev)=>{
        input.value += 0;
})
cif_1.addEventListener('click',(ev)=>{
    input.value += 1;
})
cif_2.addEventListener('click',(ev)=>{
    input.value += 2;
})
cif_3.addEventListener('click',(ev)=>{
    input.value += 3;
})
cif_4.addEventListener('click',(ev)=>{
    input.value += 4;
})
cif_5.addEventListener('click',(ev)=>{
    input.value += 5;
})
cif_6.addEventListener('click',(ev)=>{
    input.value += 6;
})
cif_7.addEventListener('click',(ev)=>{
    input.value += 7;
})
cif_8.addEventListener('click',(ev)=>{
    input.value += 8;
})
cif_9.addEventListener('click',(ev)=>{
    input.value += 9;
})


window.addEventListener('keydown',(ev)=>{
    if (ev.keyCode === 8) {
        let content = input.value;
        let rez = content.slice(0,-1)
        console.log(rez)
        input.value = rez;
    }
})