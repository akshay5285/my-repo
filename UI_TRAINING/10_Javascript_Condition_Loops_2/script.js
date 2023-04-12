// Javascripts Conditions and Loops

// If conditions
var countryName = "INDIA";
var num = 24;
var m = 4;

if (countryName === 'INDIA' && num === 24) {
    console.log('and the country name india');
}
if (countryName === 'INDIA' || num === 9 || m === 4) {
    console.log('and the country name india');
}


// If Else condition
var countryName = "USA";
var num = 24;
var m = 4;

if (countryName === 'AUS') {
    console.log('if block USA');
} else {
    console.log('else block USA');
}


// If ElseIf condition
var countryName = "AUS";
var num = 24;
var m = 4;

if (countryName === 'USA') {
    console.log('if is USA')
} else if (countryName === 'INDIA') {
    console.log('It is INDIA');
} else if (countryName === 'AUS') {
    console.log('It is AUS');
}
else {
    console.log('i dont know')
}


// While loop
let age = 30;

while (age > 18) {
    console.log('He can enter to pub');
}

// ABOVE program Continously RUN

// print 1-24

let k = 1;

while (k <= 24) {
    console.log(i);
    k = k + 1;
}


// For loop

for (var i = 0; i <= 24; i = i + 1) {
    console.log(i);
}

// loop sequence (use for arrays)

var zipCodes = [123, 234, 456];

var j = 0 //1 step
i < zipCodes.length; // 2nd step
i = i + 1;
for (var j = 0; j < zipCodes.length; j = j + 1) {
    console.log(zipCodes[j]);
}

// For of (use for array)

var ids = [1718, 7430, 0730];

for (var c of ids) {
    console.log(c);
}

// For In loop (used in object)

var employee = {
    id: 2,
    Mobile: 1234567890,
    address: 'Hyderabad',
    status: 'onsite'
}
console.log(employee.id);
console.log(employee['id']); //other way to access the value of the key
for (var b in employee) {
    console.log(b);
    console.log(employee[b]);
}

