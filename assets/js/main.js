/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
numeri da indovinare sono stati individuati.


Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della 
dom per mostrare a schermo il risultato.*/

// ----STEP 1 ----//  Math.round(Math.random generiamo un ciclo for
//Visualizzare in pagina 5 numeri casuali.

for (let i = 0; i < 5; i++) {
  const numeroCasuale = Math.floor(Math.random() * 100) + 1;
  const nuovoElemento = document.createElement("li");
  nuovoElemento.innerText = numeroCasuale;
  document.getElementById("numeri").appendChild(nuovoElemento);
}

// ----STEP 2 ----//  setTimeout
// Da lì parte un timer di 30 secondi. /*
setTimeout("alert('timer')", 3000);

// ----STEP 3 ----//
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
//i numeri che ha visto precedentemente, tramite il prompt().

// ----STEP 4 ----//
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
//numeri da indovinare sono stati individuati.
