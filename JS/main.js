let menu=document.querySelector('#menu-icon')
let navbar=document.querySelector('.navbar')

menu.onclick=()=>{
    menu.classList.toggle('ri-cross-line')
    navbar.classList.toggle('active')
}

window.onscroll=()=>{
    menu.classList.remove('ri-cross-line')
    navbar.classList.remove('active')
}