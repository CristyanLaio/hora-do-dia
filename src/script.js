function carregar() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = './src/images/fotomanha.png'
        document.body.style.background = '#d2b57b'
    } else if (hora >= 12 && hora < 18) {
        img.src = './src/images/fototarde.png'
        document.body.style.background = '#b6b5c0'
    } else {
        img.src = './src/images/fotonoite.png'
        document.body.style.background = '#003136'
    }
}