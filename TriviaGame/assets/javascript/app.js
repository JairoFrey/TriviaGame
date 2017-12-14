// set variables
var timer = 60;
var questions = 0;
var correct = 0;
var option1 = [];
var option2 = [];
var option3 = [];
var option4 = [];
var option5 = []
var pictures = ["assets/images/beth-NY.jpg", "assets/images/kelly-OC.jpg", "assets/images/kerrie-D.jpg", "assets/images/kyle-BH.jpg", "assets/images/teresa-NJ.jpg"];
// var options = ["Real Housewives of Orange County", "Real Housewives of New Jersey", "Real Housewives of Beverly Hills", "Real Housewives of Dallas", "Real Housewives of New York"];





function game() {

// function to choose random picture for first question. Must use math.random for it to choose random picture in array.
function randomWife() {
var randomPic = pictures[Math.floor(Math.random()*pictures.length)];
var pic = $("<img>");
pic.attr("src", randomPic);
console.log(randomPic);
$("#picture").append(pic);
}

randomWife();
console.log(randomWife);


// function that goes to next picture when question is answered and adds to question variable
function nextQuestion(){
	randomWife();
	questions++;
	if (questions >= 5) {
	end();
	location.reload();
}
};

// functionon that gives alert once you've went through 5 pictures
function end () {
	if (correct >= 4 && questions == 5) {
		alert("Congratulations!! You scored " + correct +" out of 5. Maybe get a new hobby or read a book.");
	}
	else if (correct <= 3 && questions == 5) {
		alert("Congratulations!! You scored " + correct + " out of 5.");
	}
};

// function to have timer countdown from 60 when page is loaded

var countdown = setInterval(function(){
	timer--;
	$("#time").text(timer);
	if (timer == 0) {
		end();
		clearInterval(countdown);
	}}, 1000);

// create on click functions which match a given picture to the button on screen

var randomPic = pictures[Math.floor(Math.random()*pictures.length)];

var pic = String(randomPic);

$("#option1").on("click", function(){
	if (pic == pictures[2]) {
		correct++;
		console.log(correct);
		$("#picture").empty();
		nextQuestion();
	}
	 else {
		$("#picture").empty();
		nextQuestion();
	};
});

$("#option2").on("click", function() {
	if (pic == pictures[0]) {
		correct++;
		console.log(correct);
		$("#picture").empty();
		nextQuestion();
	}
	else {
		$("#picture").empty();
		nextQuestion();
	}
});

$("#option3").on("click", function() {
	if (pic == pictures[4]) {
		correct++;
		console.log(correct);
		$("#picture").empty();
		nextQuestion();
	}
	else {
		$("#picture").empty();
		nextQuestion();
	}
});

$("#option4").on("click", function() {
	if (pic == pictures[1]) {
		correct++;
		console.log(correct);
		$("#picture").empty();
		nextQuestion();
	}
	else {
		$("#picture").empty();
		nextQuestion();
	}
});
$("#option5").on("click", function() {
	if (pic == pictures[3]) {
		correct++;
		console.log(correct);
		$("#picture").empty();
		nextQuestion();
	}
	else {
		$("#picture").empty();
		nextQuestion();
	}
	
});

};

game();

// the correct variable only increases by one on one certain picture when the page is reloaded. Not sure why but I'm working on it.