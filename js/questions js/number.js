var arr = ["a","b","c","d","a","b"];
console.log(arr);
// output a,b,c,d
// using filter function
function removeDuplicate(array){
    return array.filter((val,index)=>arr.indexOf(val)===index);

}
// var removeDuplicate =  arr.filter((val,index)=>indexOf(val==index));
console.log(removeDuplicate);

// using foreach loop
function removeDuplicates(array){
    let x = {};
    array.forEach(function(i) {
        if(!x[i]){
            x[i]= true;
        }
    });
    return Object.keys(x);
}
// document.getElementById('remove').innerHTML ;