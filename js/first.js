//  document.getElementById("h").innerHTML = 'karishma';
//  document.write('ram');
//  const myNum = document.querySelectorAll(selector,'.count')
// //  console.log(myNum.innerText)

// myNum.forEach(callbackfn:(myCount : Element )=>{
//     let target_count = myCount.dataset.count;
//     let init_count = myCount.innerText;
//     console.log(target_count)
// })

// form validation ,login page   ---------------
let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateForm(){
    if(username.value == ""){ 
    // console.log("username empty")
    document.getElementById("userError").innerHTML = "user name is empty";
        flag=0;
}else if(username.value.length<3){
    
    document.getElementById("userError").innerHTML = "user name require min 3 char";
    flag=0;
}else{
    document.getElementById("userError").innerHTML="";
    flag=1;
}
if(password.value == ""){
    document.getElementById("passError").innerHTML = "password is empty";
    flag=0;
}else{
    document.getElementById("passError").innerHTML = "";
    flag=1;
}
if(flag){

   return true;
}else{
    
return false;
}
}

// hoisting
// wo pehele pura data read karta h Automatic call krtahai
// hello();
// function hello(){
//     console.log("hello world");
   
// }

// let book = ["math","physics","bio","cs"];
// let book =new Array();
function sayHello(){
    console.log("Hello");
    document.getElementById("demo").innerHTML ="welcome";
}
function sayHi(){
    
    document.getElementById("demo").innerHTML ="welcome......";
    console.log("Hi...");
}
function add(num1,num2, callback){
    console.log(num1 +num2);
    callback();
}
let a=10,b=20;
add(a,b, sayHello);
add(30,3,sayHi);

const numbers = [117,50,5];
document.getElementById("reduce").innerHTML=numbers.reduce(myFunc);

function myFunc(total, num){ 
   return total-num;
}


