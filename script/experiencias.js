function clickMenu() {
    if (Menu.style.display == 'block') {
        Menu.style.display = 'none'
    }

    else {
        Menu.style.display = 'block'
        burguer.style.display = 'none'
        document.body.style.overflowY = 'hidden';
        experiencias.style.display = 'none'
        topbar.style.height = '100vh'
        logo.style.height = '38px'
        footer.style.display = 'none'
    }
}

function clickArrow() {
    if (Menu.style.display == 'block') {
        Menu.style.display = 'none'
    }

    if(Menu.style.display == 'none') {
        burguer.style.display = 'block'
        experiencias.style.display = 'block'
        document.body.style.overflowY = 'auto';
        topbar.style.height = '34px'
        logo.style.height = '38px'
        footer.style.display = 'block'
    }
}