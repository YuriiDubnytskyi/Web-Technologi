var rootNode = document.getElementById('root');
var rootNode2 = document.getElementById('root2');
var rootNode3 = document.getElementById('root3');
var inputx = document.createElement('input');
inputx.setAttribute('placeholder' ,'Add New --- x');
inputx.setAttribute('type' ,'text');
inputx.setAttribute('id','inputValueX');
var inputy = document.createElement('input');
inputy.setAttribute('placeholder' ,'Add New --- y');
inputy.setAttribute('type' ,'text');
inputy.setAttribute('id','inputValueY');
var inputz = document.createElement('input');
inputz.setAttribute('placeholder' ,'Add New --- z');
inputz.setAttribute('type' ,'text');
inputz.setAttribute('id','inputValueZ');
var buttonAdd = document.createElement('button');
buttonAdd.setAttribute('onclick','newElement()');
function fact(n){
    var result = 1;
    for (var i =1 ;i <= n;i++){
        result *= i;
    }
    return result
}
function abcd(x,y,z,b) {
    var summa;
    summa = Math.log(Math.pow(Math.abs((y-Math.sqrt(Math.abs(Math.pow(x,2)-b))) * (y - Math.pow(x,2))/(z + 4* Math.pow(y,2))),2/3));
    console.log(summa);
    return summa;
}
function bcds(x,y,z) {
    var summa;
    summa = 1 - (x+y)/Math.pow(Math.abs(z),0.34) + Math.pow(y,2)/fact(3) + Math.pow(z,3)/fact(5) + Math.exp(x-y)/(z+y);
    console.log(summa);
    return summa;
}

function newElement() {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var tr2 = document.createElement("tr");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var td6 = document.createElement("td");
    var inputValueX = document.getElementById('inputValueX').value;
    var inputValueY = document.getElementById('inputValueY').value;
    var inputValueZ = document.getElementById('inputValueZ').value;
    var txttd1 = document.createTextNode(bcds(inputValueX,inputValueY,inputValueZ));
    var txttdV1 = document.createTextNode(abcd(inputValueX,inputValueY,inputValueZ,bcds(inputValueX,inputValueY,inputValueZ)));
    var txttd2 = document.createTextNode(inputValueY);
    var txttd3 = document.createTextNode(inputValueX);
    var txttd4 = document.createTextNode(inputValueY);
    var txttd5 = document.createTextNode(inputValueX);
    td1.appendChild(txttd1);
    td2.appendChild(txttd2);
    td3.appendChild(txttd3);
    td4.appendChild(txttdV1);
    td5.appendChild(txttd4);
    td6.appendChild(txttd5);
    rootNode2.appendChild(tr);
    rootNode2.appendChild(td3);
    rootNode2.appendChild(td2);
    rootNode2.appendChild(td1);
    rootNode3.appendChild(tr2);
    rootNode3.appendChild(td6);
    rootNode3.appendChild(td5);
    rootNode3.appendChild(td4);
}
rootNode.appendChild(inputx/* Append your list item node*/);
rootNode.appendChild(inputy/* Append your list item node*/);
rootNode.appendChild(inputz/* Append your list item node*/);
rootNode.appendChild(buttonAdd/* Append your list item node*/);