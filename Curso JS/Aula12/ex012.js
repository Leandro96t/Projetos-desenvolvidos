var hora = new Date()
var hora = hora.getHours() //Pega a hora atual do sistema, que esta rodando no cliente 
console.log(`Agora são exatamnete ${hora} horas.`)
if (hora < 12) {           // Se a hora for menor que 
    console.log('Bom Dia!')
} else if (hora <=18) {    // Se a hora for menor ou igual a 18
    console.log('Boa Tarde!') 
} else {                  // Se a hora for mais que 18
    console.log('Boa Noite!')
}
