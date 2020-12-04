function calc(callback){
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    var n3 = parseFloat(document.getElementById("n3").value);
    var n4 = parseFloat(document.getElementById("n4").value);
    var result = callback(n1,n2);
    var res = callback(n3,n4)
    document.getElementById("result").value = result;
    document.getElementById("res").value = res;
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
function perc(n3,n4){
    var c = n3 / n4;
    var d = c * 100;
    return d;
}