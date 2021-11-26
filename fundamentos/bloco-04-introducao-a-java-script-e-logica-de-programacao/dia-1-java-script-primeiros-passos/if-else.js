const challengeScore = -3;

if (challengeScore >= 80 && challengeScore <= 100) {
    console.log("Parabéns, você foi aprovado(a)!");
}
else if (challengeScore < 80 && challengeScore >= 60) {
    console.log("Você está na lista de espera.");
}    
else if (challengeScore < 60 && challengeScore >= 0) {
    console.log("Você foi reprovado(a)");    
}    
else {
        console.log("Nota incorreta")        
}        