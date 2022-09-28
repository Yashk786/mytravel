/* hamburger icon */

const btn= document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const arrow = document.getElementById('arrow-icon')

btn.addEventListener('click' , () => {
    btn.classList.toggle('open')
    nav.classList.toggle('hidden')
    arrow.classList.toggle('hidden')

})

