var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    if(currentNumber<10){
        currentNumber = currentNumber + 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    verify(currentNumber);
}

function decrement() {
    if(currentNumber>-10){
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
    }
    verify(currentNumber);
}

function verify(){
    if(currentNumber>=0){
        currentNumberWrapper.style.color='black'
    }else{
        currentNumberWrapper.style.color='red'
    }
}