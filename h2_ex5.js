let n = +prompt('');
let factNum = 1;
if (n >0){
	for(var i = 1; i <= n; i++){
		factNum = factNum * i;
	}
	console.log(`${factNum}`);
}
else {
	console.log('write positive number');
}