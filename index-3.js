function hello() {
  console.log("Hello World");
}

hello();

var test = function() {
  console.log("Hello");
};

test();

function withParameters(num1, num2, num3) {
  var result = num1 + num2 + num3;
  console.log(result);
}

var number = 10;
var number1 = 11;
withParameters(number, 5, number1); //povik

function sum(a, b) {
  var result = a - b;
  console.log(result);
}

var num1 = 10;
var num2 = 20;

sum(num1, num2);

function returning() {
  return 1;
}

var number = returning();
console.log(number);

function test1(a, b) {
  var result = a - b;
  return result;
}

var num1 = 10;
var num2 = 20;
var a = test1(num1, num2);
console.log(a);

var a = 10;
function test2() {
  console.log(a);
  var b12 = 20;
}

test2();

function farToCel(celsius, far) {
  var result = celsius * 1.8 + 32;
  return result + far;
}

var cel = 10;
var f = "F";
var rezultat = farToCel(cel,f);
console.log(rezultat);

//ke prima dva parametri
// The number is : 10

function soberi(num, str){ //num =10, str = 'Nekoj string'
    var a = parseInt(str);
    Math.pow(2, 3);
    return a + num;
}

var result = soberi(10, "20");
var result1 = soberi(120, "fdsfdsfdsf : ");
console.log(result);
console.log(result1);



function sumIt(classes, session, month){
    session *= classes; // 3 * 1
    month *= session;
    return 5 * month + month/2;
}

var classes = 1;
var session = 3;
var month = 12;

var a = sumIt(classes, session, month);
console.log(a);


var price = 900;
var tax = 5;
var customs = 18;
var komada = 5;

function calculate(price, tax, customs, komada){
    return price * komada * tax * customs;
}

var a = calculate(price, tax, customs, komada);
console.log(a);


