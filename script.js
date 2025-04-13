let mood = document.querySelector(".mood");
let number = document.querySelector(".number");
let results = document.querySelector(".results");
let header = document.querySelector(".header");
let input = document.querySelector("input");
let answer = document.querySelector("h1");
console.log(mood);
console.log(number);
console.log(results);

let dog = document.querySelector(".dog");
let bat = document.querySelector(".bat");
let barn = document.querySelector(".barn");
let nest = document.querySelector(".nest");
let duck = document.querySelector(".duck");
dog.style.display = "none";
bat.style.display = "none";
barn.style.display = "none";
nest.style.display = "none";
duck.style.display = "block";

results.addEventListener('click', function(){
    console.log("Scadooooooosh");
    mood = mood.value;
    console.log(mood);
    number = Number(number.value);
    console.log(number);
    let x; 
    isEven(number);

    function isEven(number) {
   
x = (number === 0 || !!(number && !(number%2))); 

console.log(x);

    }

    console.log(x + "boval");
    
    // function isOdd(number) {
    //   console.log(isEven(Number(number) + 1));
    // }

    if (x === false){
      console.log("Pow true");
  }

  if (x === true){
    console.log("Wow false");
}

   if(x === true && mood === "Happy"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    input.style.display = "none";
    results.style.display = "none";
    barn.style.display = "block";
  }
  if(x === true && mood === "Sad"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    input.style.display = "none";
    results.style.display = "none";
    nest.style.display = "block";
  }
  if(x === false && mood === "Happy"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    input.style.display = "none";
    results.style.display = "none";
    dog.style.display = "block";
  }
  if(x === false && mood === "Sad"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    input.style.display = "none";
    results.style.display = "none";
    bat.style.display = "block";
  }
    
});
