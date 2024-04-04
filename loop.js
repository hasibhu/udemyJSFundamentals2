


// for looop keep running while condition is true;

for (let rep = 1; rep <= 10; rep++){
    console.log(`I am number ${rep}`);
}



const array = [
    'berlin',
    true,
    1971,
    [23, 56, 'me'],
    'Germany',
    'copenhagen',
    'denmark'
]

for (let i = 0; i < array.length; i++){
    console.log(array[i], typeof array[i]);
    
}

// CHALLENGE #4
// Let's improve Steven's tip calculator even more, this time using loops!

// Your tasks:

// Create an array called bills containing all 10 test bill values.

// Create empty arrays for the tips and the totals(tips and totals)

// Use the calcTip function we wrote before(included in the starter code) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!
// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];


for (let i = 0; i < bills.length; i++){

    let tip = calcTip(bills[i]);
    totals.push(tip + (bills[i]))
}

console.log(tips, totals);