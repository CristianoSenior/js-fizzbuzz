// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.


// Scrivi un programma che stampi i numeri da 1 a 100,

for(var i = 1 ; i <= 100 ; i++) {
var devifunzionarecazzo = i;
  // console.log(i);
// ma per i multipli di 3 stampi “Fizz” al posto del numero
  if ((devifunzionarecazzo%3==0) && (devifunzionarecazzo%5==0)) {
    devifunzionarecazzo = "FizzBuzz";
    // console.log(i);
    // e per i multipli di 5 stampi “Buzz”.
  } else if (devifunzionarecazzo%5==0) {
      devifunzionarecazzo = "Buzz";
      // console.log(i);
  }// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.
    else if (devifunzionarecazzo%3==0) {
      devifunzionarecazzo = "Fizz";
    }

      console.log(devifunzionarecazzo);
  }


    // console.log(i);
