let mood = document.querySelector(".mood");
let number = document.querySelector(".number");
let results = document.querySelector(".results");
let header = document.querySelector(".header");
console.log(mood);
console.log(number);
console.log(results);

let dog = document.querySelector(".dog");
let bat = document.querySelector(".bat");
let barn = document.querySelector(".barn");
let nest = document.querySelector(".nest");
//dog.style.display = "none"
//bat.style.display = "none"
//barn.style.display = "none"
//nest.style.display = "none"

results.addEventListener('click', function(){
    console.log("Scadooooooosh");
    mood = mood.value;
    console.log(mood);
    number = Number(number.value);
    console.log(number);
    isEven(number);

    function isEven(n) {
      n = Number(n);
    console.log(n === 0 || !!(n && !(n%2))); 
    }
    
    if (isEven){
      console.log("Pow");
  }

  if(isEven && mood === "Happy"){


  }
    
});
