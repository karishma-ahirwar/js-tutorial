function btnClick(){
    alert("button was clicked");
}
let btn = document.getElementById("btn");

btn.addEventListener('click',btnClick);


function MulTable(num){
/*
    for(i=1;i<=10; i++){
        document.write('${num} x ${i} = $(num*i)');
        document.write("<br>");
    }
    document.write("<br><br>");*/
    const arr = ['apple','banana','cherry'];
    arr.sort();
    document.write(arr);
}
MulTable(12);

document.write("<br>");
MulTable(5);

function bClick(){
    const a = ['apple','banana','cherry'];
    a.length();
    document.write(a);
    alert(a)

let b = document.getElementsByClassName("fn");

b.addEventListener('click',bClick);
}