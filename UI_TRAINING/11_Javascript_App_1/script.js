// DOM = Document Object Model.

// Akshay, 1234
document.getElementById('buttonId').addEventListener('click', function () {
    var username = document.getElementById('userId').value;
    var pwd = document.getElementById('passwordId').value;
    console.log('zzz username', username);
    console.log('zzz password', pwd);

    if (username === 'Akshay' && pwd === 1234) {
        alert('username and password are correct')
    } else {
        alert('username and password are incorrect')
    }
})


function validation() {

}

document.getElementById('buttonId').addEventListener('click', validation)


var firstId = document.getElementById('idOne')
var classOne = document.getElementsByClassName('clsOne')
var tag = document.getElementsByTagName('div')

console.log('zzz', classOne)

var firstIdByQuery = document.querySelector('#idOne')
var firstIdByQuery = document.querySelector('.clsOne')
var firstIdByQuery = document.querySelector('div')
