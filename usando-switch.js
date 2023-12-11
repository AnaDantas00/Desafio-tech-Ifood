let nomeDoHeroi = "Abraão o Grande"
let xp = 875123

switch(true){
    case xp <=1000:
        console.log("O herói " + nomeDoHeroi + " está no nível Ferro")
    break
    case xp >1000 && xp <= 2000:
        console.log("O herói " + nomeDoHeroi + " está no nível Bronze")
    break
    case xp >2000 && xp <= 5000:
        console.log("O herói " + nomeDoHeroi + "está no nível Prata")
    break
    case xp >5000 && xp <= 6000:
        console.log("O herói " + nomeDoHeroi + "está no nível Ouro")
    break
    case xp >6000 && xp <= 7000:
        console.log("O herói " + nomeDoHeroi + "está no nível Platina")
    break
    case xp > 7000 && xp <= 8000:
        console.log("O herói " + nomeDoHeroi + "está no nível Ascendente")
    break
    case xp > 8000 && xp <= 9000:
        console.log("O herói " + nomeDoHeroi + "está no nível Imortal")
    break
    case xp >9000:
        console.log("O herói " + nomeDoHeroi + "está no nível IMBATIVEL")
    
    }
