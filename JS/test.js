/*var result=10;
function addnum(n1,n2)
{
    var result=n1+n2;
    return result;
}

function multiply(n1,n2)
{
    var result=n1*n2;
    return result;
}
console.log(addnum(56,57));
console.log(multiply(2,3));
console.log(result);

var s=11;
console.log(s);
function print()
{
    var s=21
    console.log(s);
}
print();
console.log(s);*/
/*let a=22; console.log(a);
if(true)
{
    let a=23;
    console.log(a);
}
console.log(a);*/
/*greet();
function greet()
{
    console.log("Hello All");
    var x=10;
    console.log(x);
    return x;
}
let x=5;
let y=20;
//let x=30;
var z=100;
var z=230;

a=3;b=4;c=a+b;console.log(c);*/

/*var arr=[10,20,30,40,30];
console.log(arr.push(100,250,350));
console.log(arr.slice(2,5))*/
/*
var a1=[10,20];
var a2=[30,40];
var res=a1.concat(a2);
var res2=a1+a2;
console.log(res);
console.log(res2);
console.log(typeof res);
console.log(typeof res2);
    */

var data={name:"Nive",age:23,language:["tamil","english"]};
//console.log(data);
//console.log(Object.keys(data));
//console.log(Object.values(data));
var l=Object.keys(data);
for(let i=0;i<l.length;i++)
{
    console.log(data[l[i]]);
    //console.log(Object.values(data[i]));
}