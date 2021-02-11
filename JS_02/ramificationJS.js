function ramification(){
    let num1 = document.getElementById('inp1').value;
    let p = document.getElementById('out');
    num1 = parseInt(num1);

    if (num1==100) {
        p.innerHTML = 'Число равно 100';
    }
    else if (num1 > 100) {
        p.innerHTML = 'Число больше 100';
    }
    else {
        p.innerHTML = 'Это число меньше 100';
    }
}