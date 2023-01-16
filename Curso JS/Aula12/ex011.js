var idade = 12
console.log(`Você tem ${idade} anos.`)
if (idade < 16) { //Se minha idade for menor que...
console.log('Não vota')

} else if (idade < 18 || idade > 65) {  // Se não, se a idade for menor de que OU acima de 65
  console.log('Voto opcional')
} else {  // Acima de 18, o voto é obrigatório
    console.log('voto obrigatório')
}