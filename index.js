/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const str = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;


// Print out the concatenated string
console.log(str);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let result = part1.slice(0, part1.length-1) + part1[part1.length - 1].toUpperCase();
result += part2.slice(0, part2.length-1) + part2[part2.length - 1].toUpperCase();


// Print the cameLtaiL-formatted string
console.log(result);



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal * 0.15;

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const randomNumber = getRandomIntInclusive(1, 10);

// Print the generated random number
console.log(randomNumber);

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
// FALSE

const expression2 = a || b;
// TRUE

const expression3 = !a && b;
// FALSE

const expression4 = !(a && b);
// TRUE

const expression5 = !a || !b;
// TRUE

const expression6 = !(a || b);
// FALSE

const expression7 = a && a;
// TRUE

// console.log(expression1);
// console.log(expression2);
// console.log(expression3);
// console.log(expression4);
// console.log(expression5);
// console.log(expression6);
// console.log(expression7);