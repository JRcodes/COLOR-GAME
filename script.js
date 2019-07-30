// alert('connected!') // Test

var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll('.square');
var guessIt = randColor();
var colorDisplay = document.getElementById('colorDisplay');
var message  = document.getElementById('feedBack');
var banner = document.querySelector('h1');
colorDisplay.textContent = guessIt;

// This function changes the tile colors as well as the banner background into the correct color.
function correct(color) {
	for(var i = 0; i < colors.length; i ++) {
		squares[i].style.backgroundColor = color;
	}
	banner.style.backgroundColor = color;
}

// Random number generator for the color to be guessed
function randColor() {
	var randIndex = Math.floor(Math.random() * colors.length);
	return colors[randIndex];
}

for (var i = 0; i < squares.length; i ++) {
	squares[i].style.backgroundColor = colors[i]

	squares[i].addEventListener('click',function() {
		// alert('clicked a square!'); //Test
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === guessIt) {
			message.textContent = "You're a winner!";
			correct(clickedColor);
		}
		else {
			this.style.backgroundColor = '#232323';
			message.textContent = 'Try Again';
		}
	})
}
