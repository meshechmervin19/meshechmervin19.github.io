let currentColor = document.querySelector('.current-color')
let bodyElem = document.querySelector('body')
let generateBtn = document.querySelector('.generate-btn')

bodyElem.style.backgroundColor = currentColor.innerText;

generateBtn.addEventListener('click', ()=> {
    let randomColor = "";
    let charactors = "0123456789abcdefg";

/*
    THE FOR LOOP IS VERY USEFUL IN JAVASCRIPT SYNTAX:
    FOR (INITIALISER; CONDITION; INCREMENT) {
        CODE
    }    
*/

    for(let i = 0; i < 6; i++) {
        randomColor = randomColor + charactors[Math.floor(Math.random() * 16)];
    }

    currentColor.innerText = "#" + randomColor;
    bodyElem.style.backgroundColor = "#" + randomColor;
})