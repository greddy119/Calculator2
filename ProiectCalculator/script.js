// const cif_0 = document.querySelector('')
// const cif_1 = document.querySelector('')
// const cif_2 = document.querySelector('')
// const cif_3 = document.querySelector('')
// const cif_4 = document.querySelector('')
// const cif_5 = document.querySelector('')
// const cif_6 = document.querySelector('')
// const cif_7 = document.querySelector('')
// const cif_8 = document.querySelector('')
// const cif_9 = document.querySelector('')
const input = document.querySelector('.screen')

// cif_0.addEventListener('click',(ev)=>{
//         input.textContent = 0;
// })
// cif_1.addEventListener('click',(ev)=>{
//     input.textContent = 1;
// })
// cif_2.addEventListener('click',(ev)=>{
//     input.textContent = 2;
// })
// cif_3.addEventListener('click',(ev)=>{
//     input.textContent = 3;
// })
// cif_4.addEventListener('click',(ev)=>{
//     input.textContent = 4;
// })
// cif_5.addEventListener('click',(ev)=>{
//     input.textContent = 5;
// })
// cif_6.addEventListener('click',(ev)=>{
//     input.textContent = 6;
// })
// cif_7.addEventListener('click',(ev)=>{
//     input.textContent = 7;
// })
// cif_8.addEventListener('click',(ev)=>{
//     input.textContent = 8;
// })
// cif_9.addEventListener('click',(ev)=>{
//     input.textContent = 9;
// })


window.addEventListener('keydown',(ev)=>{
    if (ev.keyCode === 8) {
        let content = input.value;
        let rez = content.slice(0,-1)
        console.log(rez)
        input.value = rez;
    }
})