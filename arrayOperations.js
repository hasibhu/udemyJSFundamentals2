

// console.log('Helllo Array');

const calcAge = birthYear => 2031 - birthYear;

const year = [1990, 1980, 2000, 2005];

const age1 = calcAge(year[0]);
// console.log(age1);


const ages = [calcAge(year[1]), calcAge(year[2]), calcAge(year[3])];


// console.log(ages);



// Push method


const friends = ['mike', 'john', 'heinz'];

friends.push('hasib');

// console.log(friends);


// adding an element at the begining of the array

friends.unshift('chris');

// console.log(friends);



// remove last element
const popped = friends.pop();
// console.log(friends);
// console.log(popped);

// console.log(friends.indexOf("heinz"));
// console.log(friends.indexOf("hein"));
// console.log(friends.includes("heinz"));
// console.log(friends.includes("hein"));



// includes with ternary operator
const has = friends.includes("mike") ? 'I am with mike' : "Mike is not available";
console.log(has);




// CHALLENGE #2
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above(you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most.Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

//     BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.


// my solution

/* Write your code below. Good luck! 🙂 */

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

// console.log(calcTip(100));
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// bonus solution
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[3] + tips[3]]

// console.log(totals);
