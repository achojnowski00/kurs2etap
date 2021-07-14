const btn = document.querySelector('button');
const paragraph = document.querySelector('p');

// btn.addEventListener('click', function(){
//     console.log("KLIK");
//     paragraph.style.backgroundColor = "red";
// })

// btn.addEventListener('mouseover', function(){
//     console.log("NAJECHANIE");
// })

// btn.addEventListener('mousemove',function(){
//     console.log("Wykryto ruch myszki");
// })

// btn.addEventListener("click", function(){
//     alert("dzęki");
// })

let clickNumber = 0;

btn.addEventListener("click", function(){
    clickNumber++;
    console.log("Kliknieto " + clickNumber + " razy")
})