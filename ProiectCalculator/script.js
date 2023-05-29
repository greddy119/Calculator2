const cif_0 = document.querySelector('.zero')
const cif_1 = document.querySelector('.unu')
const cif_2 = document.querySelector('.doi')
const cif_3 = document.querySelector('.trei')
const cif_4 = document.querySelector('.patru')
const cif_5 = document.querySelector('.cinci')
const cif_6 = document.querySelector('.sase')
const cif_7 = document.querySelector('.sapte')
const cif_8 = document.querySelector('.opt')
const cif_9 = document.querySelector('.noua')
const input = document.querySelector('.screen')
const plus = document.querySelector('.plus');
const egal = document.querySelector('.egal')
const stergere = document.querySelector('.stergere')
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

plus.addEventListener('click',(ev)=>{
    let add = plus.textContent;
    input.value += add;
})
egal.addEventListener('click',(ev)=>{
    input.value
})
stergere.addEventListener('click',(ev)=>{

})