//1.ZADATAK: Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.
const omotac = document.querySelector('.wrapper');
const btnAdd = document.querySelector('#add-row');

//kreiranje tabele
const mojaTabela = document.createElement('table');
//izgled tabele
mojaTabela.style.width = '400px';
// tabela.style.height = '210px';
mojaTabela.style.border = '2px solid black';
mojaTabela.style.borderCollapse = "collapse";
omotac.appendChild(mojaTabela);
for (let i = 0; i < 3; i++) {
    const redUTabeli = document.createElement('tr');
    redUTabeli.style.height = '50px'; //visinu moram da zadam redu (a ne celoj tabeli) da bi mogla da "raste" u visinu
    mojaTabela.appendChild(redUTabeli);
    if (i == 0) {
        for (let j = 0; j < 4; j++) {
            const poljeHeadera = document.createElement('th');
            poljeHeadera.style.border = '2px solid black';
            redUTabeli.appendChild(poljeHeadera);
        }
    } else {
        for (j = 0; j < 4; j++) {
            const obicnoPolje = document.createElement('td');
            obicnoPolje.style.border = '2px dashed black';
            redUTabeli.appendChild(obicnoPolje);
        }
    }
}
//definisemo funkciju
function dodajRed(brojPoljaURedu, tabela) {
    const red = document.createElement('tr');
    red.style.height = '50px';
    tabela.appendChild(red);
    for (let j = 0; j < brojPoljaURedu; j++) {
        let polje = document.createElement('td');
        polje.style.border = '2px dashed black';
        red.appendChild(polje);
    }
    console.log(red);
}
//na klik pozivamo funkciju
let N = 4;
btnAdd.addEventListener('click', () => {
    dodajRed(N, mojaTabela);
})