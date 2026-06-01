function filtruj(kategoria){

    let pizze = document.querySelectorAll('.pizza');

    pizze.forEach(function(pizza){

        if(kategoria === 'wszystkie' || pizza.classList.contains(kategoria)){
            pizza.style.display = 'block';
        } else {
            pizza.style.display = 'none';
        }

    });
}