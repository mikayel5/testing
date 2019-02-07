let number = +prompt("write number");
let count = 0;
for(var i = 1; i <=number; i++){
if(number % i == 0 ){
count = count + 1;
}
}
if (count == 2){
console.log("yes-the number is prime");
}
else{
console.log("no-the number is not prime");
}
 