let svetlo = document.querySelector(".svetlo");

/*let svestka = document.querySelector(".svestka");
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

setTimeout(function(){
    svetlo.style.backgroundColor = "plum"}, 3000)

setTimeout(function(){
svetlo.style.backgroundColor = "zelena"}, 3000)

setTimeout(function(){
    svetlo.style.backgroundColor = "tomato"}, 3000)

ssetInterval(function(){
    svetlo.style.backgroundColor = "tomato"}, 3000)

etInterval(function(){
svetlo.style.backgroundColor = "zelena"}, 3000)

setInterval(function(){
    svetlo.style.backgroundColor = "plum"}, 3000)*/

let barvy = ["tomato", "lime", "plum", "cyan", "yellow", "hotpink"]
let pocetTiku = 0
let casovac

let stop = document.querySelector(".stop");
stop.addEventListener("click", function(){
    clearInterval(casovac);
})


let start = document.querySelector(".start");
start.addEventListener("click", function(){
    casovac = setInterval(function(){
    svetlo.style.backgroundColor = barvy[pocetTiku]

if (pocetTiku > 4){
    pocetTiku = 0
} else {
    pocetTiku += 1
}
},1000);
})







