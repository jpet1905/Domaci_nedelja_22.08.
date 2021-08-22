//2.ZADATAK: Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu.
//HTML kreirati proizvoljno.
const omotac = document.querySelector('.wrapper');
const divCalc = document.querySelector('#calc');
const prviSabirak = document.querySelector('#prvi');
const drugiSabirak = document.querySelector('#drugi');
const btnPlus = document.querySelector('button');

const pZaRez = document.createElement('p');
divCalc.appendChild(pZaRez);

function sabiranje(a, b) {
    return a + b;
}

btnPlus.addEventListener('click', () => {
    let resenje = sabiranje(Number(prviSabirak.value), Number(drugiSabirak.value));
    // console.log('Zbir dva broja je ' + resenje);

    pZaRez.innerHTML = `Zbir dva broja je ${resenje}`; //rezultat na ekranu
    //reset polja
    prviSabirak.value = "";
    drugiSabirak.value = "";
})
pZaRez.textContent = "";

//3.ZADATAK: Nadovezivanje na predhodni zadatak.
//Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.
const inputBox = document.querySelector('#prikazi');
inputBox.addEventListener('click', () => {
    if (inputBox.checked) {
        divCalc.style.display = 'block'; //mada je to po default-u
    } else {
        divCalc.style.display = "none"; //kada je inputBox.checked ==false
    }
});






