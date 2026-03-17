let lang = localStorage.getItem("siteLang") || "en";

function setLang(selected){
lang = selected;
localStorage.setItem("siteLang", lang);
loadLanguage();
}

function loadLanguage(){
document.querySelectorAll("[data-en]").forEach(el=>{
el.innerText = el.getAttribute("data-" + lang);
});
}

let fontSize = localStorage.getItem("siteFontSize");

if(!fontSize){
fontSize = 20;
}else{
fontSize = parseInt(fontSize);
}

function applyFont(){
document.body.style.fontSize = fontSize + "px";
localStorage.setItem("siteFontSize",fontSize);
}

function increaseText(){
fontSize+=4;
if(fontSize>36)fontSize=36;
applyFont();
}

function decreaseText(){
fontSize-=4;
if(fontSize<18)fontSize=18;
applyFont();
}

function resetText(){
fontSize=20;
applyFont();
}

document.addEventListener("DOMContentLoaded",()=>{
applyFont();
loadLanguage();
});