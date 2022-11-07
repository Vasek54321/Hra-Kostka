// Promměnná zachycuje stav hry
let timer = false;
let cas = false;
// Proměnná typu number, do které generujeme náhodné číslo 1-6
let turn;
let trn;
// Proměnná typu array (pole), do níž uložíme hody
let rounds = [];
let rnds = [];

let vicAudio = new Audio();
vicAudio.src = "./img/victory.mp3";
let failAudio =  new Audio();
failAudio.src = "./img/fail.mp3";

// Animace kostky a generování náhodného hodu
function animation() {
    turn = Math.ceil(Math.random() * 6);
    dice.src = `img/kostka0${turn}.png`;
}
function animace() {
    trn = Math.ceil(Math.random() * 3);
    img.src = `img/knp/knp${trn}.png`;
}

// Součet všech hodů
function sum() {
    let s = 0;
    for (let i = 0; i < rounds.length; i++) {
        s += rounds[i];
    }
    return s;
}

// Statistika hodů
function stats() {
    let results = `<p>Aktuální hod: ${turn}</p>`;
    results += `<p>Přehled hodů: ${rounds}</p>`;
    results += `<p>Počet hodů: ${rounds.length}</p>`;
    results += `<p>Součet hodů: ${sum()}</p>`;
    results += `<p>Průměr hodů: ${sum() / rounds.length}</p>`;
    return results;
}
function staty() {
    let vysledky = `<p>Výsledek</p>`;
    return vysledky;
}

// Kliknutí na tlačítko HREJ / STOP
play.addEventListener('click', function() {
    if (!timer) {
        play.innerText = 'STOP';
        timer = setInterval(animation, 40);
    } else {
        play.innerText = 'START';
        clearInterval(timer);
        timer = false;
        rounds.push(turn);
        result.innerHTML = stats();
    }
})
hrej.addEventListener('click', function() {
    if (!cas) {
        hrej.innerText = 'STOP';
        cas = setInterval(animace, 40);
    } else {
        hrej.innerText = 'START';
        clearInterval(cas);
        cas = false;
        rnds.push(trn);
        vysledek.innerHTML = staty();
    }
})

k.addEventListener('click', function() {
    hrej.innerText = 'START';
    clearInterval(cas);
    cas = false;
    rnds.push(trn);
    if(trn==2){
        vysledek.innerHTML = `<p>Jsi VÍTĚZ</p>`;
        vicAudio.play();
    }
    else if(trn==3){
        vysledek.innerHTML = `<p>Prohrál Jsi</p>`;
        failAudio.play();
    }
    else{
        vysledek.innerHTML = `<p>REMÍZA</p>`;
    }
})
n.addEventListener('click', function() {
    hrej.innerText = 'START';
    clearInterval(cas);
    cas = false;
    rnds.push(trn);
    if(trn==3){
        vysledek.innerHTML = `<p>Jsi VÍTĚZ</p>`;
        vicAudio.play();
    }
    else if(trn==1){
        vysledek.innerHTML = `<p>Prohrál Jsi</p>`;
        failAudio.play();
    }
    else{
        vysledek.innerHTML = `<p>REMÍZA</p>`;
    }
})
p.addEventListener('click', function() {
    hrej.innerText = 'START';
    clearInterval(cas);
    cas = false;
    rnds.push(trn);
    if(trn==1){
        vysledek.innerHTML = `<p>Jsi VÍTĚZ</p>`;
        vicAudio.play();
    }
    else if(trn==2){
        vysledek.innerHTML = `<p>Prohrál Jsi</p>`;
        failAudio.play();
    }
    else{
        vysledek.innerHTML = `<p>REMÍZA</p>`;
    }
})


