function chooseAvatar(event) {
    const avatars = document.querySelectorAll('.avatar-container img');
    avatars.forEach(avatar => avatar.classList.remove('selected'));
    const selectedAvatar = event.target;
    selectedAvatar.classList.add('selected');
    const playerAvatar = document.querySelector('.player-content .circle');
    playerAvatar.src = selectedAvatar.src;
}


const avatarImages = document.querySelectorAll('.avatar-container img');
avatarImages.forEach(avatar => avatar.addEventListener('click', chooseAvatar));


const style = document.createElement('style');
style.innerHTML = `
    .avatar-container img.selected {
        border: 2px solid #000;
        border-radius: 50%; 
        box-shadow: 0 0 10px rgba(0,255,0); 
    }
`;
document.head.appendChild(style);


let win = 0;

const imgFeu = document.getElementById('img-feu');
const imgEau = document.getElementById('img-eau');
const imgPlante = document.getElementById('img-plante');
const imgPyrobut = document.getElementById('pyrobut');
const imgOratoria = document.getElementById('oratoria');
const imgJunko = document.getElementById('jungko');
const resultElement = document.getElementById('result');
const winCountElement = document.getElementById('win-count');
const div1 =document.getElementById('premiere partie');
const div2 =document.getElementById('deuxime partie');
const div3 =document.getElementById('troisieme partie');

function masquerImage() {
    imgFeu.style.display = 'none';
    imgEau.style.display = 'none';
    imgPlante.style.display = 'none';
    imgPyrobut.style.display = 'none';
    imgOratoria.style.display = 'none';
    imgJunko.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
}
function montrediv2(){
    div2.style.display ='block'
    div3.style.display = 'none'
    div1.style.display = 'none'
}

function montrediv3(){
    div2.style.display ='none'
    div3.style.display = 'block'
    div1.style.display = 'none'
}
function montrediv1(){
    div2.style.display ='none'
    div3.style.display = 'none'
    div1.style.display = 'block'
}
function play(playerChoice) {
    const choices = ['feu', 'eau', 'plante'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;
    masquerImage();
    if (computerChoice === 'feu') {
        imgFeu.style.display = 'block';
    } 
    else if (computerChoice === 'eau') {
        imgEau.style.display = 'block';
    } 
    else if (computerChoice === 'plante') {
        imgPlante.style.display = 'block';
    }


    if (playerChoice === 'feu') {
        imgPyrobut.style.display = 'block';
    } 
    else if (playerChoice === 'eau') {
        imgOratoria.style.display = 'block';
    } 
    else if (playerChoice === 'plante') {
        imgJunko.style.display = 'block';
    }

    
    if (playerChoice === computerChoice) {
        result = "Égalité !";
    } 
    else if (
        (playerChoice === 'eau' && computerChoice === 'feu') ||
        (playerChoice === 'plante' && computerChoice === 'eau') ||
        (playerChoice === 'feu' && computerChoice === 'plante')
    ) {
        result = `Gagné ! L'ordinateur a choisi ${computerChoice}.`;
        win++;
    } 
    else {
        result = `Perdu ! L'ordinateur a choisi ${computerChoice}.`;
    }

    resultElement.innerText = result;
    winCountElement.innerText = `Nombre de victoires: ${win}`;
}

// ne fonctionne pas
function changerNom(){
    let nom =document.getElementById('nominput').value
if (nom){
    document.getElementById('nomtextexte').textContent =nom
}
else{
    document.getElementById('nomtexte').textContent = "non definie"
}
}




masquerImage();