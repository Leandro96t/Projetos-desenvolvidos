function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${10} horas.`
    if (hora >= 0 && hora < 12 ) {
    //Bom dia!
    img.src = 'fotomanha.png'
    document.body.style.background = '#b4bc26'; //Altera a cor de fundo quando for a hora do seu dispositivo
   } else if ( hora >=12 && hora <= 18) {
    //Boa Tarde!
    img.src = 'fototarde.png'
    document.body.style.background = '#cb712d';
   } else {
   // Boa Noite!
   img.src = 'fotonoite.png'
   document.body.style.background = '#3e4845';
   }
}

