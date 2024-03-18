let cont = 1;
//contador


setInterval( function() {
    document.getElementById('slide' + cont).checked = true;
    // pegando o elemento do index pelo ID juntamento com o contador 
    
    cont++;
    //acrescenta mais 1 ao contador

    if(cont > 4){
        cont=1;
    }

}, 3000 );