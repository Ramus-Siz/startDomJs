
let comptage =0;

function incrementer() {
    document
    .getElementById('compteur')
    .innerHTML=(++comptage);

}

function decrementer() {
    let number =Number(document
    .getElementById('compteur').innerHTML);
    
    if (number > 0) {
        document
        .getElementById('compteur')
        .innerHTML=(--comptage);
    }
  
}

function reset() {
    comptage= 0;
    document
    .getElementById('compteur')
    .innerHTML=(comptage);
    
}
//incrementer 
document
.getElementById("btn-add")
.addEventListener('click', incrementer);
//decrementer
document
.getElementById("btn-remove")
.addEventListener('click', decrementer);

//reset
document
.getElementById("btn-reset")
.addEventListener('click', reset);
