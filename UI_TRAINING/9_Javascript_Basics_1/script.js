// execution of javascript
console.log('abc') // synchronus

setTimeout(() => { // asynchronus
    console.log('run after 2 sec')
}, 2000)

console.log('xyz') // synchronus

// OUTPUT
// abc
// xyz
// run after 2 sec

// ============

var firstValue; //undefined
console.log(firstValue);
firstValue = 'ABC'; //defined
FirstValue = 'CaseSensitive value';
firstValue = 'MNO';
console.log(firstValue);
console.log(FirstValue);

// ====RULES=====//
//case sensitive
// firstValue is not same as FirstValue
// it can start with letter, number, _, $
// it should not start with number, special symbols


