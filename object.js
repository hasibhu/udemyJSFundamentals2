

const object1 = { firstName: 'Haisb', lastName: 'Islam', age: 33, job: 'student', friends: ['Unknown', 'mohi', 'chris'] };


// console.log(object1.lastName);
console.log(object1["lastName"]);

// add now element in the object

object1.loacton = 'Germany';

object1['media'] = 'Facebook'

// console.log(object1);

// console.log(`${object1.firstName} has ${object1.friends.length} friends and best friend is ${object1.friends[0]}.  `);


const object2 = {
    firstName: 'Haisb',
    lastName: 'Islam',
    birthYear:1990,
    age: 33,
    job: 'student',
    friends: ['Unknown', 'mohi', 'chris'],
    driverLicense: true,
    calcAge: function () {
        return 2050 - object2.birthYear;
    },
    calcAge2: function () {
        return 2050 - this.birthYear;
    },

    summary: function () {
        return `${this.firstName} is a ${this.calcAge2()} years old ${this.job} and he has ${this.driverLicense ? 'a' : 'no'} driving license `;
    }
    
};


console.log(object2.calcAge(1990));

console.log(object2["calcAge2"](1990));

console.log(object2.summary());