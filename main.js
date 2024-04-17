const toggleMenu = () => {
    document.querySelector('#menu').classList.toggle('closed')
    document.querySelector('#headerBurger').classList.toggle('closed')
    document.querySelector('#headerX').classList.toggle('closed')
}

document.querySelector('#headerBurger').addEventListener('click',toggleMenu)
document.querySelector('#headerX').addEventListener('click',toggleMenu)