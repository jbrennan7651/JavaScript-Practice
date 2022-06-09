//
//ex1
//

const ex1 = () =>{
    const array = [1, '2', 3, 'test', 1.2];
    console.log(countNumbers(array));
}

const countNumbers = (array) =>{
    let retval = 0;
    for(let i of array){
        if (typeof i === 'number' && (i - Math.floor(i)) !== 0){
            retval++;
        }
    }
    return `There are ${retval} numbers in this array`;
}

//
//Ex 2
//
const ex2 = () =>{
    const array = [12, 55, "2", 22, 11, true];
    console.log(minNumber(array));
}

const minNumber = (array) =>{
    let value = array[0];
    for (let i of array){
        if (i < value && typeof i === 'number'){
            value = i;
        }
    }
    return `Min Number is: ${value}`;
}

//
//Ex3
//
const ex3 = () =>{
    array = ['this', 'is', 'a', 'test', 'happy'];
    console.log(shortestString(array));
}

const shortestString = array => {
    let value = array[0];
    for (let i of array){
        if (i.length < value.length){
            value = i;
        }
    }
    return `Shortest String is: ${value}`;
}

//
//Ex4
//
const ex4 = () =>{
    let array = ["this", "is", "a", "test"];
    console.log(countLetters(array));
}

const countLetters = array =>{
    let retval = 0;
    for (let i of array){
        retval += i.length
    }
    return `There are ${retval} letters`
}

//
//Ex5
//
const ex5 = () =>{
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    countIt(array);
}

const countIt = (array) => {
    countIntegerNumbers5(array);
    countStrings5(array);
    countDecimalNumbers5(array);
}

const countIntegerNumbers5 = array => {
    let intCount = 0;
    for (let i of array){
        if (typeof i == 'number' && (i - Math.floor(i)) === 0)
        intCount++;
    }
    console.log(`Number of Integers: ${intCount}`)
}

const countStrings5 = array => {
    let strCount = 0;
    for (let i of array){
        if (typeof i == 'string'){
            strCount++;
        }
    }
    console.log(`Number of Strings: ${strCount}`)
}

const countDecimalNumbers5 = array => {
    let decCount = 0;
    for (let i of array){
        if (typeof i == 'number' && (i - Math.floor(i)) !== 0){
            decCount++;
        }
    }
    console.log(`Number of Decimal Numbers: ${decCount}`)
}

//
//ex6
//
const ex6 = () =>{
    let array = ["this", "is", 1, 3, 2.1, "a", "test"];
    let result = countItems(array);
    console.log("Number of Integers: " + result.numIntegers)
    console.log("Number of Decimal Numbers: " + result.numDecimals)
    console.log("Number of Strings: " + result.numStrings)

}

const countItems = array =>{
    let result = {
        numIntegers: countIntegerNumbers6(array),
        numDecimals: countDecimalNumbers6(array),
        numStrings: countStrings6(array)
    }
    return result

}

const countIntegerNumbers6 = array => {
    let intCount = 0;
    for (let i of array){
        if (typeof i == 'number' && (i - Math.floor(i)) === 0)
        intCount++;
    }
    return intCount;
}

const countStrings6 = array => {
    let strCount = 0;
    for (let i of array){
        if (typeof i == 'string'){
            strCount++;
        }
    }
    return strCount;
}

const countDecimalNumbers6 = array => {
    let decCount = 0;
    for (let i of array){
        if (typeof i == 'number' && (i - Math.floor(i)) !== 0){
            decCount++;
        }
    }
    return decCount;
}

//
//Ex7
//
const ex7 = () => {
    let person1 = { name: "Alice", age: 22 }
    let person2 = { name: "Bob", age: 21 }
    let person3 = { name: "Charlie", age: 23 }

    let people = [];
    people.push(person1);
    people.push(person2);
    people.push(person3);
    people.sort((a, b) => {
        return a.age - b.age;
    })

    console.table(people)
}

//
//Ex8
//

const ex8 = () =>{
    let p1 = createPerson("Alice", 11)
    let p2 = createPerson("Bob", 22)
    let p3 = createPerson("Charlie", 33)

    let personArray = [];
    personArray.push(p1)
    personArray.push(p2)
    personArray.push(p3)

    console.log(countOver20(personArray))
}

const createPerson = (name, age) => {
    let obj = {
        name,
        age
    }
    return obj;
}

const countOver20 = array =>{
    let over20 = 0;
    for (let i of array){
        if (i.age > 20){
            over20++;
        }
    }
    return over20;
}

//
//ex9
//
const ex9 = () =>{
    let item1 = { quantity: 1, cost: 1.00 }
    let item2 = { quantity: 2, cost: 2.00 }
    let item3 = { quantity: 3, cost: 3.00 }

    let items = [];
    items.push(item1);
    items.push(item2);
    items.push(item3);

    console.log(calculateTotal(items));
}

const calculateTotal = array =>{
    let total = 0;
    for (let i of array){
        total += i.cost * i.quantity;
    }
    return total;
}

//
//ex10
//

const ex10 = () =>{
    let usageData = [
        { userId: 1111, minutes: 10.0 },
        { userId: 2222, minutes: 20.0 },
        { userId: 3333, minutes: 30.0 }
    ]
    
    let person = { userId: 3333, fullName: "Charlie" }
    let result = calcCellBillForPerson(usageData, person)
    console.log(result)
}

const calcCellBillForPerson = (array, obj) =>{
    let perMinCharge = 0.1
    let result = {};
    for (let i of array){
        if (i.userId = obj.userId){
            result ={
                'userId': i.userId,
                'fullName': obj.fullName,
                'minutes': i.minutes,
                'perMinuteCharge': perMinCharge,
                'charges': (i.minutes * perMinCharge).toLocaleString('en-US',{
                    style: 'currency',
                    currency: 'USD'
                })
            }
        }
    }
    return result;
}

//
//Main
//

const main = async () => {
    // ex1();
    // ex2();
    // ex3();
    // ex4();
    // ex5();
    //ex6();
    //ex7();
    //ex8();
    //ex9();
    ex10();
}

main();
