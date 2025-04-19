"use strict"

const ojo = document.querySelector(`.cara-ojo`)
console.log(ojo)

window.addEventListener(`mousemove` , ( e )=>{
    let { clientX , clientY } = e

    let calculoX =( (window.innerWidth / 2) - clientX)/ 75

    let calculoY = ((window.innerWidth / 2) - clientY) / 75

    ojo.style.translate = ` ${calculoX}px ${calculoY}px`

})