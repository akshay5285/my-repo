
function cal(){
    console.log('cal');
    const firstVal = document.getElementById('fistVal').value;
    const secVal = document.getElementById('secVal').value;
    const opr = document.getElementById('operation').value;

    if (opr == 'Sum'){
        document.getElementById('result').innerHTML
        = parseInt(firstVal) + parseInt(secVal);
        document.getElementById('result').style.color ='red'
        
    }else if (opr == 'Sub'){
        document.getElementById('result').innerHTML
        = parseInt(firstVal) - parseInt(secVal);
        document.getElementById('result').style.color ='blue'
  
    }else if (opr == 'Mul'){
        document.getElementById('result').innerHTML
        = parseInt(firstVal) * parseInt(secVal);
        document.getElementById('result').style.color ='green'

    }else if (opr == 'Div'){
        document.getElementById('result').innerHTML
        = parseInt(firstVal) / parseInt(secVal);
        document.getElementById('result').style.color ='black'

    }
}