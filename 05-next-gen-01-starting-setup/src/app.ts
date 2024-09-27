const userName = "jerome";
//userName = 'challet';
let age = 38;

age = 28;

// function add(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// console.log(result);

//const add = (a: number, b: number = 1) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(5));

const hobbies = ["sport", "games"];
const activeHobbies = ["hiking"];

activeHobbies.push(...hobbies);

const person = {
  personName: "jerome",
  personAge: 38,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 19, 23, 5.4);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { personName, personAge } = person;
