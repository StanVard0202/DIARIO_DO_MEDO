function ativar(){
    function porcento(value){
        return (value / 100)
    }

    function xp_doado(expD , value){
        var returnable = porcento(value) * expD
        return returnable
    }

    function resultado(expD , expM , value){
        var x = ((porcento(value) / 2) * expM) - (porcento(value) * expD)
        return (x)
    }

    var expD = parseInt(prompt("XP do Deus Da Morte"));
    var n = parseInt(prompt("Percentagem de xp(mas sem o %)"));
    var expM = parseInt(prompt("XP do Manancial"));
    
    alert("O xp doado ao Manancial será " + (xp_doado(expD,n)).toFixed(0));
    alert("O xp q o Deus Da MOrte receberá será " + (resultado(expD , expM , n)).toFixed(0));
}