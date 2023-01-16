function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            console.log('eh homem')
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebehomem.png')    
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomen.png')
            }else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homemadulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        } else  if (fsex[1].checked) {
            console.log('eh mulher')

            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'mulheradulta.png')
            } else  {
                //idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
         res.appendChild(img) //Irá mostra as imagens 
    }
    
}