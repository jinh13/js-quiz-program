// variables
var correct = 0;
var rank = "";

// prompt for 5 questions
var answer1 = prompt("What is the name of this class?");
var answer2 = prompt("What is the professor's first name?");
var answer3 = prompt("What is the professor's last name?");
var answer4 = prompt("What building are we in?");
var answer5 = prompt("What color are the chairs in this room?");


// if statements to count how many correct answers
if ( answer1.toUpperCase() === 'WEB DEVELOPMENT' ) {
 correct += 1;
}
if ( answer2.toUpperCase() === 'SIMON' ) {
 correct += 1;
}
if ( answer3.toUpperCase() === 'YOST' ) {
 correct += 1;
}
if ( answer4.toUpperCase() === 'URBAUER' ) {
 correct +=1;
}
if ( answer5.toUpperCase() === 'GREEN' ) {
 correct += 1;
}

//if statements to rank people
if (correct === 5){
	rank = "gold";
}
if (correct === 4){
	rank = "silver";
}
if (correct === 3){
	rank = "bronze";
}

// output results
if (correct >0){
	document.write("<p> congrats! you got " + correct + " out of 5 questions right!</p>");
}

if (correct === 0){
	document.write("<p> you didn't get any questions right, but try again by refreshing this page!</p>");
}

if (correct >2){
	document.write("<p>You got the " + rank + " medal!</p>");
}
