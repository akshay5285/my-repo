function yourName(){
    console.log('External script');
}
function showTestId(){
    console.log('show test id');
}

document.getElementById('clickButton').addEventListener('click',yourName);

// test id event
const testId=document.getElementById('testId');
testId.addEventListener('click',showTestId);