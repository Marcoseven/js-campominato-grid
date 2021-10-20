/* 
-> Richiesta esercizio:
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

-> Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
*/

// DOM
const element = document.getElementById("container");

// ciclo for per difficoltà 1
for (let i = 1; i <= 100; i++) {
	// creato elemento DOM da mettere nella gliglia (cella)
	const elementCell = document.createElement("div");
	// aggiunta classe e variabile i all'elemento creato in precedenza
	elementCell.insertAdjacentHTML(
		"beforeend",
		`<div class="cell">${i}</div>`
	);
	// appeso elemento creato prima al container
	element.append(elementCell);
	// inserito un EventListener a ciascun elemento creato nel ciclo
	elementCell.addEventListener("click", function () {
		// modificato il colore dell'elemento con style
		this.style.backgroundColor = "#4877f4";
	});
}
