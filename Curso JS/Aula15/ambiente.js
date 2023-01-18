var valores = [8,1,7,4,2,9]
valores.sort() // ordena os valores 
/*console.log(valores)*/

/*for(var pos=0; pos < valores.length; pos++) {
    //crio uma variavel pos, que ira iniciar com 0. Enquanto o pos for menor de que o tamanho do veto, o pos vai receber pos + 1
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/
for (let pos in valores) { //para cada posição dentro da variável pos
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //eu irei mostrar o pos
}

