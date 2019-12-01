// alert("connect");


var answer=prompt("are we there yet?");
// if(answer==="yes"){
// 	alert("YAY, We made it!")
// }else{
// 	var answer=prompt("are we there yet?")
// }

// while(answer!=="yes" && anser!=="yey"){
// 	var answer=prompt("are we there yet?")
// }

// alert("YAY, WE MADE IT");

while(answer.indexOf("yes") ==-1){
	var answer=prompt("are we there yet?")
}
alert("YAY, WE MADE IT");


for(var count=-10; count<=19; count++){
	console.log(count);
}

for(var count=10; count<=40; count+=2){
	console.log(count);
}


for(var count=300; count<=333; count++){
	if(count%2!==0){
		console.log(count);
	}
}

for(var count=5; count<=50; count++){
	if(count%3==0&&count%5==0){
		console.log(count);
	}
}