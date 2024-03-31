
//// Function declaration

function logger() {
    // console.log('My name is Hasib');
}


// logger();


///////////

function foodProcessor(apple, orange) {
    // console.log(apple, orange);
    const juice = ` Please make a apple juice with ${apple} apples and a orange juice with ${orange}.`;
    return juice;
}

const res = foodProcessor('apple', 'orange');
const res1 = foodProcessor(2, 4);
// console.log(res);
// console.log(res1);




function calcAge(birthyear) {
    // const age = 2035 - birthyear;
    return 2035 - birthyear;
}

const age = calcAge(1990);
// console.log(age);




////function expression

const calcAge2 = function (birthyear) { //this function is also called annonimous function
    // const age = 2035 - birthyear;
    return 2035 - birthyear;
}

const age2 = calcAge2(2005);
// console.log(age2);


//arrow function

const calc3 = birthyear => 2040 - birthyear;

// console.log(calc3(2080));





// test 


/* Write your code below. Good luck! 🙂 */

/* Write your code below. Good luck! 🙂 */

// const calcAverage = (score1, score2, score3) => {
//     return ((score1 + score2 + score3) / 3);
// }

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// console.log(avgKoalas, avgDolphins);

// const checkWinner = (avgDolphins, avgKoalas) => {
//     if (avgDolphins >= avgKoalas * 2) {
//         const message1 = `Dolphin win : (${avgDolphins} vs. ${avgKoalas})`
//         return message1;
//     } else if (avgKoalas >= avgDolphins * 2) {
//         const message2 = `Koalas win : ( ${avgKoalas}  vs. ${avgDolphins})`;
//         return message2;
//     } else {
//         return`No team wins...`;
//     }
// }

// console.log(checkWinner(avgDolphins, avgKoalas));



const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        const message1 = `Dolphin win : (${scoreDolphins} vs. ${scoreKoalas})`
        return message1;
    } else if (avgKoalas >= avgDolphins * 2) {
        const message2 = `Koalas win : ( ${scoreKoalas}  vs. ${scoreDolphins})`;
        return message2;
    } else {
        return `No team wins...`;
    }
}


console.log(checkWinner(scoreDolphins, scoreKoalas));


// last try 
















