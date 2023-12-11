let nomeDoHeroi = "Amanias o Impiedoso"
let xp = 6001

if(xp <=1000){
    nivel = "ferro"
}

else if (xp >1000 && xp <= 2000){
    nivel = "bronze"
}

else if (xp > 2000 && xp <= 6000) {
    nivel = "prata"
}

else if (xp > 6000 && xp <= 7000){
    nivel = "ouro"
}

else if (xp > 7000 && xp <= 9000){
    nivel = "platina"
}

else if (xp >9000){
    nivel = "IMBATÍVEL"
}

console. log("O herói " + nomeDoHeroi + " está no nível " + nivel)
