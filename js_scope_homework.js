// Episode 1
//
//Variable 'name' created/assigned to the name Keith.
//Function 'printName' created. This function will print the string 'My name is ' plus the value of the variable 'name'.
//
//Result: My name is Keith

var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();




// Episode 2
//
//Variable 'score' created globally + assigned value of 5.
//Function 'result' created and 'score' variable created + reassigned value of 3. This function returns the value of the score variable created within this function's scope.
//
//Result: 3

score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());




// Episode 3
//
//Array 'myAnimals' created.
//Function 'listAnimals' created and within its scope another the myAnimals array is reassigned.
//The function is looping through the array and returns both key/index + value.
//
//Result:
//0: Ducks
// 1: Dogs
// 2: Lions


var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();




// Episode 4
//
//Four suspect variables are created and assigned.
// Variable 'suspectThree' is reassigned (from Keith) to 'Harvey' within the 'allSuspects' function.
//
//Result: Suspects include: Jay, Val, Harvey, Rick
// Suspect three is:Keith



var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );




// Episode 5
//
//'detective' object was created.
//Funtion 'printName' is declared/created but not called.
//Function detectiveInfo in created and withing its scope the detective name is changed.
//funtion 'printName' is finally called.
//
//Result: Poirot.

var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());




// Episode 6
//
//Variable murdered assigned to 'rick'.
//Funtion 'outerFunction' created and variable has now been reassigned to 'marc'.
//Within this function, another is created: 'innerFunction' where the variable 'murderer' is once again reassigned: 'valerie'.
//Both the variable and the innerFunction within the outerFunction are only local to within this function.
//
//Result: The murderer is Rick.
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);




// Episode 7 - Make up your own episode/s!

// Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
