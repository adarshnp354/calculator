function calc(callback){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var result = callback(n1,n2);
    document.getElementById("result").value = result;
}
function add(n1,n2){
    return n1 + n2;
}
function mul(n1,n2){
    return n1 * n2;
}
function sub(n1,n2){
    return n1 - n2;
}
function div(n1,n2){
    return n1 / n2;
}
function perc(n1,n2){
    var c = n1 / n2;
    var d = c * 100;
    return d;
}