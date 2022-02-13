
//Cod usados na aula

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    

    }
    
/* Exercicio com addEventListener
 quando clicar na pagina muda a cor do fundo */

document.addEventListener("click", function(){
    document.body.style.backgroundColor = "pink";

});


