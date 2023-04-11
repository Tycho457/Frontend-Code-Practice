 let a1:symbol = Symbol(1);
 let a2:symbol = Symbol(2);

console.log(a1 === a2)  //false

//  for在全局symbol在查找有没有注册过这个key，若有就直接拿来用，没有则创建
console.log(Symbol.for('xiaoman') === Symbol.for('xiaoman'))    // true

let obj = {
    name: 1,
    [a1]: 111,
    [a2]: 222
}

console.log(obj);   // { name: 1, a1: 111, a2: 222 }

// for in 不能读到symbol
for(let key in obj ) {
    console.log(key);
}

// key 也读不到symbol
console.log(Object.keys(obj));  // [ 'name' ]


// getOwnPropertySymbols可以读到symbol
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(1), Symbol(2) ]

