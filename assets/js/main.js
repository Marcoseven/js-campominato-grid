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

// alert
// alert("Scegli un livello di difficoltà");

// DOM
const grid_1 = document.getElementById("grid_1");
const grid_2 = document.getElementById("grid_2");
const grid_3 = document.getElementById("grid_3");
const button_1 = document.getElementById("button_1");
const button_2 = document.getElementById("button_2");
const button_3 = document.getElementById("button_3");

// ciclo for per difficoltà 1
for (let i = 1; i <= 100; i++) {
	const elementCell = document.createElement("div");
	elementCell.insertAdjacentHTML("beforeend", `<div class="cell">${i}</div>`);
	grid_1.append(elementCell);
	elementCell.addEventListener("click", function () {
		this.style.backgroundColor = "#4877f4";
	});
}

// ciclo for per difficoltà 2
for (let i = 1; i <= 81; i++) {
	const elementCell = document.createElement("div");
	elementCell.insertAdjacentHTML("beforeend", `<div class="cell">${i}</div>`);
	grid_2.append(elementCell);
	elementCell.addEventListener("click", function () {
		this.style.backgroundColor = "#4877f4";
	});
}

// ciclo for per difficoltà 3
for (let i = 1; i <= 49; i++) {
	const elementCell = document.createElement("div");
	elementCell.insertAdjacentHTML("beforeend", `<div class="cell">${i}</div>`);
	grid_3.append(elementCell);
	elementCell.addEventListener("click", function () {
		this.style.backgroundColor = "#4877f4";
	});
}

// EventListener
button_1.addEventListener("click", function () {
	grid_1.classList.add("active");
	grid_1.classList.add("div");
});

button_2.addEventListener("click", function () {
	grid_2.classList.add("active");
});

button_3.addEventListener("click", function () {
	grid_3.classList.add("active");
});
