const colorChanger = document.querySelector('.colorChanging')
const start = document.querySelector('.start')
const Stop = document.querySelector('.stop')
const colorCode = document.querySelector('.colorCode')
let changing
let check = 0 

function color() {
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)
    colorChanger.style.backgroundColor = `rgb(${r} ${g} ${b})`
    colorChanger.style.transition = 0.5+'s'


    colorCode.innerHTML = `rgb(${r},${g},${b})`
}

start.addEventListener("click",function(){
    if(check === 0){
        check = 1
        changing = setInterval(function(){
        
        color()
     },1200)}
     
})

Stop.addEventListener('click',function(){
    if(check === 1){
        check =0
    clearInterval(changing)
    }
    
})