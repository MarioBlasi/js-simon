/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
 i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
numeri da indovinare sono stati individuati.


Bonus:
Invece di usare prompt e allerte usate inputs ed elementi della 
dom per mostrare a schermo il risultato.*/

// ----STEP 1 ----//
//Visualizzare in pagina 5 numeri casuali.

function casuale() {
  num = Math.round(Math.random() * 4) + 1;
  document.getElementById("casuale").innerHTML = "Numero casuale " + num;
}

// ----STEP 2 ----//
// Da lì parte un timer di 30 secondi. /*

// ----STEP 3 ----//
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
//i numeri che ha visto precedentemente, tramite il prompt().

// ----STEP 4 ----//
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
//numeri da indovinare sono stati individuati.
