const cardsNames = ["bobross", "explody", "fiesta", "metal", "revertit", "triplets", "unicorn"];
let numberOfCards = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");
let isValid;



verifyNumberCards(numberOfCards);
console.log(numberOfCards)

function verifyNumberCards(){
    numberOfCards = prompt("Com quantas cartas deseja jogar? Escolha um número par entre 4 e 14");
    if (numberOfCards < 4){
        alert ("Deve ser um número maior do que 4");
        verifyNumberCards();
    } else if (numberOfCards > 14){
        alert ("Deve ser um número menor do que 14");
        verifyNumberCards();
    } else if (numberOfCards %2 != 0){
        alert ("Deve ser um número par!");
        verifyNumberCards();
    }
    console.log(numberOfCards)
}
console.log(numberOfCards)