function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var dia = data.getDay()

    var fano = window.document.getElementById('year')
    var res = document.querySelector('div#res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

         

       

       function DiasnoMes(mes,dia){
            //       console.log('Recebido mes: '+mesRecente);
            //        console.log('Recebido ano: '+anoRecente);
            //        console.log('Valor resto da divisao: '+(anoRecente % 4));
                if (mes==2){
                    if((ano % 4)==0){
            //                console.log('retornei 29 dias');
                        return 29;
                    }
                    else
                    {
            //               console.log('retornei 28 dias');                
                        return 28;
                    }
                }
                if ( (mes=1) || (mes=3) || (mes=5) || (mes=7) || (mes=8) || (mes=10) || (mes=12) )
                {
            //            console.log('retornei 31 dias');
                    return 31;
                }
                if ( (mes=4) || (mes=6) || (mes=9) || (mes=11) )
                {
            //            console.log('retornei 30 dias');
                    return 30;
                }        
            }
        }
         

        
        
         res.style.textAlign = 'center'
         res.innerHTML = `Sua idade é ${idade} anos, ${mes} meses, ${dia} dias.`
         
        }
    
