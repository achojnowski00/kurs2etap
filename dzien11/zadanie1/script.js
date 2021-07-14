// transform: rotate(45deg);

let kwadrat = document.querySelector('.squere');
let btn = document.querySelector('button');

let stopien = 0;
function rotate10deg(){
    stopien += 10;
    kwadrat.style.transform = "rotate("+ stopien +"deg)";
}

btn.addEventListener('click', rotate10deg);