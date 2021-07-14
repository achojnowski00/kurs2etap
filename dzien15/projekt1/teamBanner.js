const colorImgHtml = document.querySelector('.color');
const grayImgHtml = document.querySelector('.gray');
const nameHtml = document.querySelector('.member .name');
const profHtml = document.querySelector('.member .profesion');

const colorImgTab = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImgTab = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const personNameTab = ["Anna Baugart", "Marek Feliksiak", "Arek Pawłowicz"];
const personProfesionTab = ["Programistka JS", "UX i UI designer", "Front-End developer"];

let element = -1;
function changeBannerElements(){
  element++;

  if(element >= colorImgTab.length) element = 0;
  

  colorImgHtml.src = colorImgTab[element]
  grayImgHtml.src = grayImgTab[element]
  nameHtml.textContent = personNameTab[element]
  profHtml.textContent = personProfesionTab[element]
  
  setTimeout(changeBannerElements, 4000)
}
changeBannerElements()

// setInterval(changeBannerElements, 4000);
