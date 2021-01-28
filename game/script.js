const cat = document.getElementById('cat');
const stol = document.getElementById('stol');

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if (cat.classList != 'jump') {
        cat.classList.add('jump')
    }
    setTimeout(function() {
        cat.classList.remove('jump')
    }, 300)
}

let isAlive = setInterval( function() {
    let catTop = parseInt(window.getComputedStyle(cat).getPropertyValue('top'))
    let stolLeft = parseInt(window.getComputedStyle(stol).getPropertyValue('left'));

    if (stolLeft < 50 && stolLeft > 0 && catTop >= 140) {
        alert('game over')
    }
}, 10)