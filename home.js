 console.log('shame');
 //comment 
var b = 'smoothie';
console.log(b);

var num = 45;
console.log(num);

/*rserfghjkj
hgtfr*/
/*
var age = prompt('what is your age');

document.getElementById('text').innerHTML = age;
*/
//numbers in js 
var num1 = 10;
num1++ ;
console.log(num1);

//func 
function fun()
{
    console.log('func');
}

fun();
var name = prompt('name?');
function greet(name)
{
   
    var res = 'Hello ' + name;
    document.getElementById('text').innerHTML = res;
}

greet(name);

function sum(num1, num2)
{
    var res = num1 +num2;
    console.log(res);
}
sum(10,10);

//while loops 

var num = 0; 
while (num < 100)
{
    num+=10;
    console.log(num);
}

//for loop 
for(let num =0;num<10 ; num++)
{
    console.log(num);
}

//data type 
var age = 18; //number 
let na = 'sham'; //string 
let namen = {f: 'sul', l: 'sham'}; //obj 
let truth = false; //boolean 
let groceries = ['apple','banana','orange']; //array
let random; //undefined 
let nothing = null; // value null

//string common methods 
let f = 'banana';
let moref = 'banana\napple'; 

console.log(moref);
console.log(f.length);
console.log(f.indexOf('n')); 

console.log(f.slice(2,6));
console.log(f.replace('ban','123'));

console.log(f.toUpperCase())
console.log(f.toLowerCase());

console.log(f.charAt(3));
console.log(f[2]);

console.log(f.split('a'));

//array 

let fruits = ['banana','apple','orange','pineapple'];
let fruitss = new Array('banana','apple','orange','pineapple');
console.log(fruits[2]);

fruits [0]= 'pear';
console.log(fruits);

let somenumber = [1,2,3,7,8,5,4];
console.log(somenumber.sort(function(a,b) {return a-b})); //asc
console.log(somenumber.sort(function(a,b) {return b-a})); //des

let emptyArray = new Array();
for( var i =0;i<10;i++)
{
    emptyArray.push(i);
}
console.log(emptyArray);

//objects 
let myname = { 
    first: "sham",
    last: "j", 
    info: function()
    {
        return this.first + this.last;
    }
}; 
console.log(myname['first']);

myname.first = "sul";
console.log(myname['first']);

console.log(myname.info());

let ques = prompt('what is your age'); 

if(ques >= 1 && ques <= 20)
{
    console.log("my community");
}
else
{
    console.log("not my community");
}

switch(6)
{
    case 1:
        console.log("WEEKDAY");
        break;
    case 2:
        console.log("WEEKEND");   
        break;
    default: 
        console.log("NONE"); 
        break;    
}



