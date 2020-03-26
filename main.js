// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.




var ricordailprima , bananajoe;
// Scrivi un programma che stampi i numeri da 1 a 100,

for(var i = 1 ; i <= 100 ; i++) {
  // console.log(i);
// ma per i multipli di 3 stampi “Fizz” al posto del numero
  if (i%3==0 && i%5==0) {
    console.log("FizzBuzz");
    bananajoe = "FizzBuzz";
    // console.log(i);
    // e per i multipli di 5 stampi “Buzz”.
  } else if (i%5==0) {
      console.log("Buzz");
      bananajoe = "Buzz";
      // console.log(i);
  }// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.
    else if (i%3==0) {
      console.log("Fizz");
      bananajoe = "Fizz";
  }else {
      console.log(i);
      bananajoe = i ;
  }
  ricordailprima = document.getElementById('calcoli').innerHTML;
  document.getElementById('calcoli').innerHTML = ricordailprima + bananajoe;

// console.log(Math.floor(Math.random(bananajoe + i)));
}


    // console.log(i);
