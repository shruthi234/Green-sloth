// //if else
// let age;
// age = prompt("enter the age");
// if (age>=13&&age<=19){
//     console.log("you are a teenager");
// }else if (age >=13 && age<=19){
//     console.log("you are youth");
// } else {
//     console.log("youn are adult");
// }


/*switch
let age;
age = prompt("enter the age");
age1 = parseInt(age)
switch(age1) {
    case 18:
        console.log("you are a teenager");
        break;
        case 25:
            console.log("you are a youth");
            break;
            default:
                console.log("you are adult");
                break;
}*/

/*FOR
for (let i=1; i <= 10; i++) {
    console.log(i);
}

//WHILE LOOP
let j=1;
while(j<10){
    console.log(j);
    j++;
}


DO WHILE
let k=1;
do{
    console.log(k)
    k++;
}while(k < 0);







{
function sum(a,b)
{
    var c;
    console.log(c);
}
sum(1,2);
}*/


/*let result = function sum(a, b) {
    let c=a+b;
    return c;
};

console.log(result(5,9));

let result = function sum(a, b) {
    c=a+b;
    return c;
};

console.log(result(10,20));*/

/*let obj1={
    key1:"hello",
    key2:1,
    hello:function () {
        console.log("hello world");
    },
};

obj1.hello()
obj1["key1"]*/
/*{


let person = {
key1: "hello",
key2: 1,
hello: function () {
    console.log("hello world");
    return "Hi";
},
}
 let someobj = {
    x:1,
    y:2,
 a:[1,2,3,4],  
};

//let key4 ="EEEEE";

//console.log(obj1.hello());
//console.log(obj1["key1"]);
console.log("AAAAA");



}*/


//This
/*let someobj = {
    msg: "HI SHRUTHI",
    id:1,
    greet:function(){
        console.log(this);
        console.log(this.msg);   
    },
};

someobj.greet();
console.log("output object",this);*/


//This
function sum(a,b) {
    this.x=a;
    this.y=b;        
    this.getsum=function() {
        console.log("Sum of a + b =",this.x + this.y);
    };
};

  let someobj1=new sum(10,10);
  let someobj2=new sum(15,20);
  let someobj3=new sum(30,30);

  someobj1.getsum();
  someobj2.getsum();
  someobj3.getsum();

