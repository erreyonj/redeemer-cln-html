
// GLOBAL VARIABLES
///////////
const allOfHeaderMenu = document.querySelector('#burgerDiv')
const wrapper = document.querySelector('.wrapper')
const fullscreenLO = document.querySelector('#fullscreenLO')



// GLOBAL FUNCTIONS
//////////


// quick toggle menu function for header
const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('closed')
    document.querySelector('#headerBurger').classList.toggle('closed')
    document.querySelector('#headerX').classList.toggle('closed')
}


// screen-size 1200 functions
const hideMenu = () => {
    if(window.screen.availWidth>=1200){
        allOfHeaderMenu.setAttribute('style','display:none')
        return
    }
    allOfHeaderMenu.toggleAttribute('style')
}
const removeMobileLO = () => {
    if(window.screen.availWidth>=1200){
        wrapper.setAttribute('id','fullscreenLO')
        return
    }
    wrapper.setAttribute('id','mobileLayout')
}
const makeRows = () => {
    if(window.screen.availWidth>=1200){
        fullscreenLO.
        return
    }
}





const screen1200 = () => {
   hideMenu()
   removeMobileLO()
}


// EVENT LISTENERS
//////////////

// event listeners for both hanmburger and x icons in menu button
document.querySelector('#headerBurger').addEventListener('click',toggleMenu)
document.querySelector('#headerX').addEventListener('click',toggleMenu)
// resize event listener.. quick fix for broken styles
window.addEventListener('resize', screen1200)
