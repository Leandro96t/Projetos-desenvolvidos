class datanascimento{

    datanascimento (dataNascimento, dataAtual) {
    var dataNasc = dataNascimento.split("/");

                var fdia = window.document.getElementById('day').value
                var fmes = window.document.getElementById('month').value
                var fano = window.document.getElementById('year').value



    var ano = fano;
    var mes = fmes;
    var dia = fdia;

    var data = new Date()
    var anoAtual = data.getFullYear()
    var mesAtual = data.getMonth() + 1;
    var diaAtual = data.getDate()
    
    
        if  (anoAtual >= ano) {
            if ( mesAtual >= mes )     {
                if (diaAtual >= dia)  {
                    var idade = anoAtual - ano;
                    var idadeMes = mesAtual - mes;
                    var idadeDia = diaAtual - dia;

                    return ('Sua idade é: '+ idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.');
                }        
                else      {  //Ano >= e Mes >= Dia <
          
                    if ( mesAtual > mes )  {
                  
                        var idade = anoAtual - ano;
                        var idadeMes = mesAtual - mes;
   //                   idadeMes--;
                        var idadeDia = diaAtual - dia; 
                        //idadeDia += 30; 
                        if (mesAtual==1){
                            idadeDia += this.calculaDiasMes(12,anoAtual);
                            //idadeDia += 30;
                        } 
                        else{
    //                            console.log('enviando mes: '+(mesAtual-1)+' ano:'+anoAtual);
                        idadeDia += this.calculaDiasMes(mesAtual-1,anoAtual);
                        }
                        return ('Sua idade é: '+ idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.');                      
                    }
                    else //Ano >= e Mes < Dia <
                    {
                        if (anoAtual > ano){
                            var idade = anoAtual - ano;
                            idade --;
                            var idadeMes = mesAtual - mes;
                            idadeMes+=12-1;
                            var idadeDia = diaAtual - dia; 
                            //idadeDia += 30;  
                            if (mesAtual==1){
                                idadeDia += this.calculaDiasMes(12,anoAtual);
                                //idadeDia += 30;
                            } 
                            else{
    //                                console.log('enviando mes: '+(mesAtual-1)+' ano:'+anoAtual);
                                idadeDia += this.calculaDiasMes(mesAtual-1,anoAtual);
                            }
                            return ('Sua idade é: '+ idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.');                           
                            
                        }
                        else //Ano < e Mes < Dia <
                        {
                            return 'Não nasceu ainda!';
                        }
                    }
                
                }
            }
            else //Ano >= e Mes <
            {

                if (anoAtual > ano)
                {
                    if (diaAtual >= dia) 
                    {
                        var idade = anoAtual - ano;
                        idade--;
                        var idadeMes = mesAtual - mes;
                        idadeMes +=12;
                        var idadeDia = diaAtual - dia;

                        return ('Sua idade é: '+ idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.');                     
                    } 
                    else //Ano > e Mes < e Dia <
                    {
                        var idade = anoAtual - ano;
                        idade --;
                        var idadeMes = mesAtual - mes;
                        idadeMes+=12-1;
                        var idadeDia = diaAtual - dia; 
                        //idadeDia += 30;
                        //Dependendo do mês (31, 30, 29, 28)
                        if (mesAtual==1){
                            idadeDia += this.calculaDiasMes(12,anoAtual);
                            //idadeDia += 30;
                        } 
                        else{
    //                           console.log('enviando mes: '+(mesAtual-1)+' ano:'+anoAtual);
                            idadeDia += this.calculaDiasMes(mesAtual-1,anoAtual);
                        }

                        return idade+' Anos, '+idadeMes+' Meses e '+idadeDia+ ' Dias.';                  
                    }                           
                } //Ano < e Mes <
                else
                {
                    return 'Não nasceu ainda!';
                }                
            }

        }
        else
        {
            return 'Não nasceu ainda!';
        }
    }
    
         calculaDiasMes(mesRecente,anoRecente){
            //       console.log('Recebido mes: '+mesRecente);
            //        console.log('Recebido ano: '+anoRecente);
            //        console.log('Valor resto da divisao: '+(anoRecente % 4));
                if (mesRecente==2){
                    if((anoRecente % 4)==0){
            //                console.log('retornei 29 dias');
                        return 29;
                    }
                    else
                    {
            //               console.log('retornei 28 dias');                
                        return 28;
                    }
                }
                if ( (mesRecente=1) || (mesRecente=3) || (mesRecente=5) || (mesRecente=7) || (mesRecente=8) || (mesRecente=10) || (mesRecente=12) )
                {
            //            console.log('retornei 31 dias');
                    return 31;
                }
                if ( (mesRecente=4) || (mesRecente=6) || (mesRecente=9) || (mesRecente=11) )
                {
            //            console.log('retornei 30 dias');
                    return 30;
                }        
            }
        }
    
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

            function verificar(){

                var fdia = window.document.getElementById('day').value
                var fmes = window.document.getElementById('month').value
                var fano = window.document.getElementById('year').value
                let res = document.querySelector('div#res')

                var ano = fano;
                var mes = fmes;
                var dia = fdia;

            const date2 = new Date();

            var hoje = new Intl.DateTimeFormat('pt-BR').format(date2);
            var objCalculoIdade = new datanascimento;
            var textoIdade = objCalculoIdade.datanascimento(hoje)
        
            if ((fdia === " ") || (fmes === " ") || fano <= 0){
                window.alert('[ERRO] Insira os dados e tente novamente!')

            }

            /*if ((fdia === " ") & (fmes !== " ") & fano >= 1){
                window.alert('[ERRO] Insira os dados DIA tente novamente!')

               }     if ((fdia === " ") || (fmes !== " ") || fano >= 1 ){ 
                         window.alert('[ERRO] Insira os dados MES tente novamente!')
                    }
                           if (fano <= 0 & fmes > 1 & fdia>1){
                             window.alert('[ERRO] Insira os dados ANO tente novamente!')
                

                          } */
            else{res.innerHTML = (textoIdade)
            }
        };