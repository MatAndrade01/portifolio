function clickMenu() {
    if (Menu.style.display == 'block') {
        Menu.style.display = 'none'
    }

    else {
        Menu.style.display = 'block'
        burguer.style.display = 'none'
        document.body.style.overflowY = 'hidden';
        topbar.style.height = '100vh'
    }
}

function clickArrow() {
    if (Menu.style.display == 'block') {
        Menu.style.display = 'none'
    }

    if(Menu.style.display == 'none') {
        burguer.style.display = 'block'
        certificacao.style.display = 'block'
        document.body.style.overflowY = 'auto';
        topbar.style.height = '34px'
    }
}