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
const cos = document.querySelector('.cos')
const sin = document.querySelector('.sin')
const tan = document.querySelector('.tan')
const plus_minus = document.querySelector('.plus_minus')
const put_2 = document.querySelector('.put_2')
const put_3 = document.querySelector('.put_3')
const put_10 = document.querySelector('.zece')
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

stergere.addEventListener('click',(ev)=>{
      input.value = '';
})

cos.addEventListener('click',(ev)=>{
        let rez = Math.cos(input.value);
        input.value =rez;
})

sin.addEventListener('click',(ev)=>{
    let rez = Math.sin(input.value);
    input.value =rez;
})

tan.addEventListener('click',(ev)=>{
    let rez = Math.tan(input.value);
    input.value =rez;
})

plus_minus.addEventListener('click',(ev)=>{
    input.value = +input.value * -1;
})

put_2.addEventListener('click',(ev)=>{
    input.value = +input.value * +input.value;
})

put_3.addEventListener('click',(ev)=>{
    input.value = +input.value * +input.value * +input.value;
})

put_10.addEventListener('click',(ev)=>{
    let rez = 1;
    for (let i = 0; i < input.value; i++) {
        rez *= 10
    }
    input.value = rez;
})

const comma = () => {
    let current = input.value;
    if (!current.includes(".")) {
        screen.value += ".";
    }
}


const equal = (value) => {
    let current = input.value;

    if (value === "=") {
        let result = eval(current);
        input.value = result;
    } else if (value === "C") {
        input.value = "";
    } else {
        input.value += value;
    }
}
