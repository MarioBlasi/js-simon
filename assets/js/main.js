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
//array numeri
// Genera 5 numeri casuali e visualizzali nella pagina

let numeri = [];
for (var i = 0; i < 5; i++) {
  numeri.push(Math.floor(Math.random() * 100));
}
document.getElementById("numeri").innerHTML = numeri.join(", ");

// ----STEP 2 ----//  setTimeout
// Da lì parte un timer di 30 secondi.

// Dopo 30 secondi, rimuovi i numeri dalla pagina
setTimeout(function () {
  let numeriIndovinati = [];

  for (let i = 0; i < 5; i++) {
    let input = prompt("Inserisci il " + (i + 1) + " numero che hai visto:");
    let numero = parseInt(input);

    if (!isNaN(numero)) {
      numeri.push(numero);
      if (numeri.includes(numero)) {
        numeriIndovinati.push(numero);
      }
    } else {
      alert("Inserisci un numero valido!");
      i--;
    }
  }
  // usiamo if and else quanti e quali numeri sono stati in dovinati con 2 alert
  if (numeriIndovinati.length === 0) {
    alert(" NON hai indovinato");
  } else {
    numeriIndovinati.length + numeriIndovinati;
    alert("HAI indovinato");
  }
}, 3000);
// utilizziamo parseInt per convertire il testo dell utente in un numero
// dopodiché useremo if and else  con iSNAN per vedere se quello che e stato inserito sia un numero valido
//----STEP 3 ----//
/*Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
i numeri che ha visto precedentemente, tramite il prompt().*/
// utilizziamo un altro ciclo for per chiedere all utente di inserire i numer i e confrontarli

// ----STEP 4 ----//
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei
//numeri da indovinare sono stati individuati.
