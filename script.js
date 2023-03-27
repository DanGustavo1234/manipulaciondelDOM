// const title =document.getElementById(pid)
// const paragraph= document.getElementsByClassName(par)
// console.log(title)
const h1=document.querySelector('h1');
const p=document.querySelector('p');
const par=document.querySelector('.par');
const pid=document.querySelector('#pid');
const input1=document.querySelector('#numberone');
const input2=document.querySelector('#numbertwo');
const pResult=document.querySelector('#result');
const btn=document.querySelector('#btnCalcular');
const form=document.querySelector('#form');

//Solution 1 sin recargar la pagina 

// form.addEventListener('submit',sumValues);
// function sumValues(event){
//   console.log({event});
//   event.preventDefault();
//   const sumaInputs= input1.value + input2.value;
//   pResult.innerText="Resultado: "+ sumaInputs;
//   console.log(pResult)
// }
//solucion 2 sin recargar la pagina 

btn.addEventListener('click',sumValues);

function sumValues(event){
  // console.log({event});
  // event.preventDefault();
  const sumaInputs= input1.value + input2.value;
  pResult.innerText="Resultado: "+ sumaInputs;
  console.log(pResult)
}