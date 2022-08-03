let svetlo = document.querySelector(".svetlo");

let svestka = document.querySelector(".svestka");
svestka.addEventListener("click", function() {
    svetlo.style.backgroundColor = "plum"
})

let zelena = document.querySelector(".zelena");
zelena.addEventListener("click", function() {
    svetlo.style.backgroundColor = "lime"
})

let rajcatova = document.querySelector(".rajcatova");
rajcatova.addEventListener("click", function() {
    svetlo.style.backgroundColor = "tomato"
})

/*setTimeout(function(){
    svetlo.style.backgroundColor = "tomato", 1000})

setTimeout(function(){
svetlo.style.backgroundColor = "zelena", 2000})

setTimeout(function(){
    svetlo.style.backgroundColor = "plum", 3000})*/

setInterval(function(){
    svetlo.style.backgroundColor = "tomato", 1000})

setInterval(function(){
svetlo.style.backgroundColor = "zelena", 1000})

setInterval(function(){
    svetlo.style.backgroundColor = "plum", 1000})