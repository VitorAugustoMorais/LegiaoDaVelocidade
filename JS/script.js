openMenu.addEventListener('click', function(){
    openMenu.style.display = 'none'
    closeMenu.style.display = 'inline'
    nav.style.display = 'inline'
})

closeMenu.addEventListener('click', function(){
    openMenu.style.display = 'inline'
    closeMenu.style.display = 'none'
    nav.style.display = 'none'
})


function detectarClique(event) {
    const elemento = event.target
    console.log(elemento);
}
