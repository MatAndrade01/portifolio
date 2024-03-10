function clickMenu() {
    if (Menu.style.display == 'block') {
        Menu.style.display = 'none'
    }

    else {
        Menu.style.display = 'block'
        burguer.style.display = 'none'
        myselfe.style.display = 'none'
        text.style.display = 'none'
        redesSociais.style.display = 'none'
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
        myselfe.style.display = 'block'
        text.style.display = 'block'
        redesSociais.style.display = 'flex'
        document.body.style.overflowY = 'auto';
        topbar.style.height = '34px'
    }
}