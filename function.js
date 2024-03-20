

function logger() {
    console.log('My name is Hasib');
}


// logger();


///////////

function foodProcessor(apple, orange) {
    console.log(apple, orange);
    const juice = ` Please make a apple juice with ${apple} apples and a orange juice with ${orange}.`;
    return juice;
}

const res = foodProcessor('apple', 'orange');
const res1 = foodProcessor(2, 4);
console.log(res);
console.log(res1);

