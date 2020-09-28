function fruitColor(fruit) {
    switch (fruit) {
        case "apple": {
            let color = "red"
            return color;
        }
        case "banana": {
            let color = "yellow"
            return color;
        }
        default:
            return "other color"
    }
}

console.log(fruitColor("apple"));
console.log(fruitColor("banana"));
console.log(fruitColor("Stefani"));

function sayMyName(name){
    return `My name is ${name}`;
}

console.log(sayMyName("Peter"));

const sayMyName2 = (name) => {
    return `My name is ${name}`};

console.log(sayMyName2("Sam"));

const sayMyName3 = name => `My name is ${name}`

console.log(sayMyName3("Julien"));

/**
 * animal class has inheritence
 */

 class Animal{
     eat = () => console.log("I eat when I'm hungry and able.");
 }

 class Dog extends Animal{
     weight = 20;
     age = 8;
     bark = () => console.log("I'm a dog so I can bark.");
 }

 puppy = new Dog();

 puppy.bark();
 puppy.eat();

 myArr = [1, 2, 3];
 yourArr = [...myArr, 4, 5, 6];

 console.log(yourArr);

 myObj = {
     name:"peter",
     height:5.10
 }

 yourObj = {
     ...myObj, height:6.1
 }

 console.log(yourObj);

 const showValues = (...args) =>{
     console.log(...args)
     for(let i = 0; i < args.length; i++){
         console.log(args[i]);
     }
 }

 showValues("apple", "pear", "plum");