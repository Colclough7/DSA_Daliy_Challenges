/*Teach snoopy and scooby doo how to bark using object methods. Currently only snoopy can bark and not scooby doo.

snoopy.bark(); // return "Woof"
scoobydoo.bark(); // undefined
Use method prototypes to enable all Dogs to bark.*/





/*JS*/




function Dog(breed) {
  this.breed = breed;
}

// Add the bark method to the Dog prototype
Dog.prototype.bark = function() {
  return "Woof";
};

var snoopy = new Dog("Beagle");
console.log(snoopy.bark()); // "Woof"

var scoobydoo = new Dog("Great Dane");
