console.log("Scadoosh");

let mood = document.querySelector(".mood");
let number = document.querySelector(".number");
let results = document.querySelector(".results");
let header = document.querySelector(".header");
console.log(mood);
console.log(number);
console.log(results);

results.addEventListener('click', function(){
    console.log("Scadooooooosh");
    mood = mood.value;
    console.log(mood);
    number = Number(number.value);
    console.log(number);
    isEven(number);

    if (isEven === true){
        header.innerHTML("Boop");
        console.log("Pow");
    }
});

function isEven(n) {
  n = Number(n);
console.log(n === 0 || !!(n && !(n%2))); 
}

