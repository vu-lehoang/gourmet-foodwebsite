const mainMenu = document.querySelector('.header-main-list');
const closeMenu = document.querySelector('.header-main-menuclose');
const openMenu = document.querySelector('.header-main-toggle');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'block';
    // mainMenu.style.top = '0';
    mainMenu.style.float = 'right';
    closeMenu.style.display = 'block';
    openMenu.style.display = 'none';
    mainMenu.style.height = '100vh';
}
function close(){
    // mainMenu.style.top = '-100%';
    mainMenu.style.display = 'none'; 
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
}

// random img
// function randomBg(){
//     const images = [
//         'src("/image/image-slide1.png")',
//         'src("/image/image-slide2.png")',
//         'src("/image/image-slide3.png")',   
//     ]
//     const section = document.querySelector('.banner-slider-images');
//     const bg = images[Math.floor(Math.random() *images.length)];
//     section.style.backgroundImages = bg;
// }
// setInterval(randomBg,1000);

let image = document.getElementById('image');
let images =  ['image/image-slide1.png', 'image/image-slide2.png', 'image/image-slide3.png']
setInterval(function()
{
    let random = Math.floor(Math.random() * 3);
    image.src = images[random];
},3000);
