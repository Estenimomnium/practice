function out(){
    let p = document.getElementById('out');
    //p.innerHTML += "Hello;"
    //p.innerText += " Hi";
    //p.insertAdjacentHTML('afterEnd','Hi');
    //beforeBegin - перед открывающем тегом
    //afterBegin - после открывающего тега, но перед содержимым
    //beforeEnd - перед закрывающем тегом, но после текста
    //afterEnd - после закрывающего тега
    p.outerHTML = '<div class="one">Hello</div>'
} 

