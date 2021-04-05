/**
 **
 **  const zoos = {
 **    lincolnParkZoo: [
 **      {class: 'Mammal', name: 'Kangaroo'},
 **      {class: 'Reptile', name: 'Crocodile'},
 **      …
 **    ],
 **    sanDiegoZoo: [
 **      {class: 'Bird', name: 'Penguin'},
 **      {class: 'Mammal', name: 'Tiger'},
 **      …
 **    ],
 **    detroitZoo: [
 **      {class: 'Fish', name: 'Clown Fish'},
 **      {class: 'Amphibian', name: 'Salamander'},
 **      …
 **    ],
 **    …
 **  }
 **
 **/

// Transform the "zoos" object so that animals across every zoo are organized
// by "class" and alphabetized by "name". Try to make the transformation
// efficient as you may have to manipulate a very large dataset.
//
// The result should be an object with a single key for each distinct animal
// class within the dataset (mammal, reptile, bird, etc.) Each of these class
// keys should map to a list of name strings for animals of that class. These
// lists may or may not contain duplicates and should be alphabetized
// from "A" to "z".
