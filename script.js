let a = {
    name: 'Мадина',
    age: 25,
};
let b = { 
    name: "Аслан", 
    age: 29 };
let c = { 
    name: "Элмира", 
    age: 27 };

let d = [];

function taskOne(obj) {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    for(let i = 0; i < keys.length; i++){
        d.push(keys[i], values[i])
    }
    return d
};

console.log(taskOne(a));

let obj = [a, b, c];

function taskTwo(obj) {
    obj.sort((a, b) => a.age > b.age ? 1 : -1);
  }

taskTwo(obj);

console.log(obj[0].name);
console.log(obj[1].name);
console.log(obj[2].name);
