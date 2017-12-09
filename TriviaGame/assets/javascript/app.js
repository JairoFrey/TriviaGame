// set variables
var timer = 60;
var option1 = [];
var option2 = [];
var option3 = [];
var option4 = [];
var pictures = ["assets/images/beth-NY.jpg", "assets/images/kelly-OC.jpg", "assets/images/kerrie-D.jpg", "assets/images/kyle-BH.jpg", "assets/images/teresa-NJ.jpg"];
// var options = ["Real Housewives of Orange County", "Real Housewives of New Jersey", "Real Housewives of Beverly Hills", "Real Housewives of Dallas", "Real Housewives of New York"];
var correct = 0;
var incorrect = 0;

alert("poop");
// function to choose random picture for first question. Must use math.random for it to choose random picture in array.
console.log(correct);

function randomWife() {
var randomPic = pictures[Math.floor(Math.random()*pictures.length)];
var pic = $("<img>");
pic.attr("src", randomPic);
console.log(randomPic);
$("#picture").append(pic);
}

randomWife();



// function that goes to next question and picture when question is answered or timer gets to 0
function nextQuestion(){
	randomWife();
}

// function to have timer countdown from 10 when new picture is chosen


var countdown = setInterval(function(){
	timer--;
	$("#time").text(timer);
	if (timer == 0) {
		nextQuestion();
		clearInterval(countdown);
	}}, 1000);

// create on click functions which match a given picture to the button on screen
$("#option1").on("click", function(){
	if (randomPic == pictures[2]) {
		correct++;
		nextQuestion();
	}
	else if () {
		incorrect++;
		nextQuestion();
	};
});

$("#option2").on("click", function() {
	if (randomPic == pictures[0]) {
		correct++;
		nextQuestion();
	}
	else () {
		incorrect++;
		nextQuestion();
	}
});

$("#option3").on("click", function() {
	if (randomPic == pictures[4]) {
		correct++;
		nextQuestion();
	}
	else () {
		incorrect++;
		nextQuestion();
	}
});

$("#option4").on("click", function() {
	if (randomPic == pictures[1]) {
		correct++;
		nextQuestion();
	}
	else () {
		incorrect++;
		nextQuestion();
	}
});
$("option5").on("click", function() {
	if (randomPic == pictures[3]) {
		correct++;
		nextQuestion();
	}
	else () {
		incorrect++;
		nextQuestion();
	}
});


// function that makes sure no duplicate answer options are displayed



// function that keeps score and will alert you of your score and smart ass response after 5 pictures have been reviewed

// function that resets score aftere alert is shown