function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minu} horas`
    if( hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'Manha.jpg'
        document.body.style.background = "#ACA9FF"        
    }
    else  if( hora >= 12 && hora < 18){
        // BOm tarde
        img.src = 'tarde.jpg'
        document.body.style.background = "#FAC580"
    }
    else{
        img.src = 'noite.jpg'
        document.body.style.background = "#49494D"
    }
}