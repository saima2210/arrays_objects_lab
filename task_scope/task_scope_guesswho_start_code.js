// GUESS 1 ///////////////////
// let guess = {
//   hair_colour: "red",
//   eye_colour: "blue",
//   hat: false,
//   glasses: true,
//   firstName: "Joseph",
// };

// const guessWho = function () {
//   return `Guess who is ${guess.firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);
// Prediction: joseph because the variable has been declared and called. 

// // GUESS 2 ///////////////////

// let firstName = "Donna";

// const guessWho = function () {
//   const glasses = false;
//   let firstName = "Liz";
//   return `Guess Who is ${firstName}.`;
// };

// const guess1 = guessWho();
// console.log("guess1: ", guess1);

// const guess2 = `Guess Who is ${firstName}`;
// console.log("guess2: ", guess2);
// prediction: guess1 is liz and guess2 is Donna because firstName has been reassigned. 

// // GUESS 3 ///////////////////

// const guess = {
//   hair_colour: "black",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Andy",
// };

// const changeHat = function () {
//   guess.hat = !guess.hat;
// };

// const changeGuess = function (newName) {
//   guess.firstName = newName;
// };

// const guessWho = function () {
//   return `Guess Who is ${guess.firstName}`;
// };

// changeHat();

// if (guess.hat) {
//   changeGuess("Chris");
// }

// const finalAnswer = guessWho();
// console.log(finalAnswer);

// prediction: chris because hat key is being called and Andy does not have one. 

// // GUESS 4 ///////////////////

// let firstName = "Gail";

// if (firstName === "Gail") {
//   let firstName = "Ashley";
// }

// const guessWho = function () {
//   return `Guess Who is ${firstName}`;
// };

// const finalAnswer = guessWho();
// console.log(finalAnswer);

// prediction: Gail because Gail is equal to the firstName which is declared. so the firstName inside the block can only be accessed from that block. 

// GUESS 5 ///////////////////

// const guess = {
//   hair_colour: "blonde",
//   eye_colour: "brown",
//   hat: false,
//   glasses: false,
//   firstName: "Jennifer",
// };

// const changeGuess = function () {
//   guess = {
//     hair_colour: "blonde",
//     eye_colour: "blue",
//     hat: false,
//     glasses: false,
//     firstName: "Kyle",
//   };
// };

// changeGuess();
// console.log(`Guess Who is ${guess.firstName}`);

// prediction: Kyle;
// result: error 
