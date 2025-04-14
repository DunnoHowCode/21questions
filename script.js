let mood = document.querySelector(".mood");
console.log(mood);
let number = document.querySelector(".number");
let results = document.querySelector(".results");
let header = document.querySelector(".header");
let input = document.querySelector("input");
let answer = document.querySelector("h1");



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
    let moodV =  mood.value;
    console.log(moodV);
    let numberV = Number(number.value);
    console.log(numberV);
    let x; 
    isEven(numberV);
    restart.style.display = "block";
    function isEven(numberV) {
   
x = (numberV === 0 || !!(numberV && !(numberV%2))); 

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

   if(x === true && moodV === "Happy"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    number.style.display = "none";
    mood.style.display = "none";
    results.style.display = "none";
    barn.style.display = "block";
  }
  if(x === true && moodV === "Sad"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    number.style.display = "none";
    mood.style.display = "none";
    results.style.display = "none";
    nest.style.display = "block";
  }
  if(x === false && moodV === "Happy"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    number.style.display = "none";
    mood.style.display = "none";
    results.style.display = "none";
    dog.style.display = "block";
  }
  if(x === false && moodV === "Sad"){
    answer.innerHTML = "Your word is...";
    duck.style.display = "none";
    number.style.display = "none";
    mood.style.display = "none";
    results.style.display = "none";
    bat.style.display = "block";
  }
    
});