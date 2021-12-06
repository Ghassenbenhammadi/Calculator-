
function Num(val){
    document.getElementById('result').value += val;
}
function equal(){
    let Input = document.getElementById('result').value;
    document.getElementById('result').value = eval(Input);
}

function clr(){
    document.getElementById('result').value = '';
}