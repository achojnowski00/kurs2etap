var firstDiv = document.querySelector('.s1');
var secondDiv = document.querySelector('.s2');

function changeColor(){
    firstDiv.classList.toggle('red');
    secondDiv.classList.toggle('red');
}

function changeThisColor(){
    this.classList.toggle('red');
}






// firstDiv.addEventListener("click", changeColor);
// secondDiv.addEventListener("click", changeColor);
firstDiv.addEventListener("click", changeThisColor);
secondDiv.addEventListener("click", changeThisColor);