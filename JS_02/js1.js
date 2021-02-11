function plus(){
    let p = document.getElementById("number1").value;
    let h = document.getElementById("number2").value;
    p = parseInt(p);
    h = parseInt(h);
    
    let result = p+h;
    document.getElementById('out').innerHTML = result;
}

function minus(){
    let p = document.getElementById("number1").value;
    let h = document.getElementById("number2").value;
    p = parseInt(p);
    h = parseInt(h);
    
    let result = p-h;
    document.getElementById('out').innerHTML = result;
}

function multiply(){
    let num1, num2, result;

    num1 = document.getElementById("number1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("number2").value;
    num2 = parseInt(num2);

    result = num1*num2;
    document.getElementById("out").innerHTML = result;
}

function division(){
    let num1, num2, result;

    num1 = document.getElementById("number1").value;
    num1 = parseInt(num1);

    num2 = document.getElementById("number2").value;
    num2 = parseInt(num2);

    result = num1/num2;
    document.getElementById("out").innerHTML = result;
}