// var firstName= prompt('What is your first name')
// var lastName= prompt('What is your last name')

// console.log("Your full name is " + firstName + " " + lastName)
// var age= prompt("how old are you")
// console.log("you are " + age + " years old")

// alert("you have live about  " + age * 365 + " days")


var secretNumb = 4;
var guess = Number(prompt("guess a number"))

if (guess === secretNumb){
	alert("you guess it right");
}else if (guess>secretNumb){
	alert("you guess too hight");
}else{
	alert("you got it too low");
}

// 1
var num=-10;
while(num<=19){
	console.log(num);
	num++;
}

//2
var num=10;
while(num<=40){
	if(num%2==0)
	console.log(num);
	num++;
}
//3
var num=300;
while(num<=333){
	if(num%2==0)
	console.log(num+1);
	
	num++
}

//4
var num=5;
while(num<=50){
	if(num%5==0&&num%3==0){
	console.log(num);
}
	num++;

}







