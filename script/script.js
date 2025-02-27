let sum = 0;
document.getElementById('zero').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '0';
})
document.getElementById('one').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '1';
})
document.getElementById('two').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '2';
})
document.getElementById('three').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '3';
})
document.getElementById('four').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '4';
})
document.getElementById('five').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '5';
})
document.getElementById('six').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '6';
})
document.getElementById('seven').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '7';
})
document.getElementById('eight').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '8';
})
document.getElementById('nine').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '9';
})
document.getElementById('plus').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '+';
})
document.getElementById('minus').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '-';
})
document.getElementById('muktiple').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '*';
})
document.getElementById('division').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    displayText.innerText += '/';
})
document.getElementById('equal').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text");
    let text = displayText.innerText;
    text = text.substring(0,text.length);
    const displayAnswer = document.getElementById('display-answer');
    try {
         let answer = eval(text);
         displayAnswer.innerText = '=' + ' ' + answer; // Evaluates the expression
    } catch {
         displayAnswer.innerText = "Error"; // Handles invalid input
    }
})
document.getElementById('delete').addEventListener('click', function(event){
    const displayText = document.getElementById("display-text").innerText;
    const text = displayText.substring(0, displayText.length-1);
    document.getElementById('display-text').innerText = text;
})