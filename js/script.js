const menubar = document.getElementById('menu-bar');
const navlinks  =document.getElementById('nav-links');


menubar.addEventListener('click',()=>{
    navlinks.classList.toggle('show');

    if (navlinks.classList.contains('show')) {
        menubar.src ="img/Closebar.svg";
    } else {
        menubar.src ="img/Menubar.svg";
    }
})