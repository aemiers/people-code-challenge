// const zoos = {
//   lincolnParkZoo: [
//     { class: 'Mammal', name: 'Kangaroo' },
//     { class: 'Reptile', name: 'Crocodile' },
//     { class: 'Reptile', name: 'Alligator' },
//   ],
//   sanDiegoZoo: [
//     { class: 'Bird', name: 'Penguin' },
//     { class: 'Mammal', name: 'Tiger' },
//     { class: 'Reptile', name: 'Alligator' },

//   ],
//   detroitZoo: [
//     { class: 'Fish', name: 'Clown Fish' },
//     { class: 'Amphibian', name: 'Salamander' },
//     { class: 'Mammal', name: 'Tiger' },
//     { class: 'Reptile', name: 'Alligator' },
//     { class: 'Mammal', name: 'Capybara' },
//   ],
// }


const organizeAnimalsByClass = () => {
  let organizedAnimals = {};
  Object.values(zoos).forEach(zoo => {
    zoo.forEach(animal => {
      if (!organizedAnimals[animal.class]) {
        organizedAnimals[animal.class] = [animal.name];
        return;
      }
      if (!organizedAnimals[animal.class].includes(animal.name)) {
        organizedAnimals[animal.class].push(animal.name)
      }
    })
  })
  Object.values(organizedAnimals).forEach(animalName => animalName.sort());
  return organizedAnimals;
}

organizeAnimalsByClass();


// On my first attempt, I had the sort() inside of the forEach. I think running the sort every time a new animal is added would slow down the process when dealing with a large data set, so I moved the sort outside of the forEach.

//  Pseudo Code-
// Input: a zoo object with zoo arrays of animal objects
// Output: object one key per animal class with values of animals in alpha order, no duplicates
// Methods: object.keys, forEach, reduce, sort
// How: 
// create a new object for end result
//  for each zoo, for each class, check if class value is in new object,
      // if it is not in there, add it to the object w/ value of []
      // Next, check values
          //value not already existing inside of the {} inside of it's key? push
          //value is? skip
// Then check for sorting order



// Prompt - 
// Transform the "zoos" object so that animals across every zoo are organized
// by "class" and alphabetized by "name". Try to make the transformation
// efficient as you may have to manipulate a very large dataset.
//
// The result should be an object with a single key for each distinct animal
// class within the dataset (mammal, reptile, bird, etc.) Each of these class
// keys should map to a list of name strings for animals of that class. These
// lists may or may not contain duplicates and should be alphabetized
// from "A" to "z".
