// Code your solutions in this file

const employees = ["Ada", "Brendan", "Ali"];

function printBadges(employees) {
var i;

  for(let i = 0; i < employees.count; i++); {
  console.log("Welcome ${employees}! You are employee #${employees[i]}.");
  // console.log([i])
  }
//   return badges
// }
// printBadges(employees)


function tailsNeverFails() {
  var heads = 0
  var tails = 0


  let i = 0
  while (Math.random() > 0.5) {
    console.log("You got ${tails} tails in a row!");

    if (Math.random() > 0.5)
    tails = tails + 1
    else {
      heads = heads + 1
    }
    i = i + 1
  }
}
