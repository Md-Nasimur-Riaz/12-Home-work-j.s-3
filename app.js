let onBtm = document.querySelector('.on')
let image = document.querySelector('.img')

onBtm.addEventListener('click', function(){
    image.src = "https://www.w3schools.com/js/pic_bulbon.gif" 
})
let offBtm = document.querySelector('.off')

offBtm.addEventListener('click', function(){
     image.src = "https://www.w3schools.com/js/pic_bulboff.gif"
})

let gemerate = document.querySelector('#gemerate');
let btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round (Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    gemerate.style.background = `rgb(${red}, ${green}, ${blue})`
    rgb.innerHTML = `${red}, ${green}, ${blue}`
})
let rgb = document.querySelector('.rgb');

