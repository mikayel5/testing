let num_1 = 12;
let num_2 = 24;
let  newnum_1 = 0;
let  newnum_2 = 0;
for(i = 1,j = 1; i <= num_1,j <= num_2; i++, j++) {
if((num_1 % i == 0) && (num_2 % j == 0)){
   newnum_1 = i;
	//console.log(`${newnum_1}`);
   newnum_2 = j;
	//console.log(`${newnum_2}`);
}
}
if (newnum_1 === newnum_2){
	console.log(`${newnum_1}`);
}




