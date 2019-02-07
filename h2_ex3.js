let n = 6;
let m = 10;
let newnum = 1;
if (1 <= n &&  n <= 10 && 1 <= m && m <= 10 ){
	for(var i = 1; i <= m; i++ ){
		newnum = newnum * n;
		
	}
	console.log(`${newnum}`);
}
else{
	console.log(`write the correct number`);
}