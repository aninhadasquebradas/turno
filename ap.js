function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'Untitled.png'
        document.body.style.background = 'rgba(212, 146, 27, 1)'
    } else if (hora >= 12 && hora <=18){
        img.src = 'img2.png'
        document.body.style.background = 'rgba(159, 79, 18, 1)'
    } else {
        img.src = 'img.png'
        document.body.style.background = 'rgba(10, 9, 21, 1)'
    }
}

