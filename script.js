// alert('connected!') // Test

var numSquares = 6;
var colors = [];
var guessIt;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var message  = document.getElementById('feedBack');
var banner = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var mode = document.querySelectorAll(".mode");

init();

function init() {
	modeSetup();
	squareSetup();
	reset();
}

// Adding an event listener to the button to reset the game.
resetButton.addEventListener("click",function() {
	// alert("Resetting Game!"); //Test
	reset();
})

// This function changes the tile colors as well as the banner background into the correct color.
function correct(color) {
	for(var i = 0; i < colors.length; i ++) {
		squares[i].style.backgroundColor = color;
	}
	banner.style.backgroundColor = color;
}

// Random index generator for the color to be guessed
function randColor() {
	var randIndex = Math.floor(Math.random() * colors.length);
	return colors[randIndex];
}

// Random rgb generator for each r,g, and b
function randRGB() {
	var randRGB = Math.floor(Math.random() * 256);
	return randRGB;
}

//Random color generator to create the array of numbers for the colors array
function generateRandomColors(num) {
	var arr = [];
	for (let i = 0; i < num; i ++) {
		let r = String(randRGB());
		let g = String(randRGB());
		let b = String(randRGB());
		arr.push("rgb(" + r + ", " + g + ", " + b + ")")
	}
	return arr;
}

function reset() {
	// alert("Resetting Game!"); //Test
	resetButton.textContent = "NEW COLORS"
	colors = generateRandomColors(numSquares);
	guessIt = randColor();
	colorDisplay.textContent = guessIt;
	for (var i = 0; i < squares.length; i ++) {
			if (colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
			else {
				// This hides the remaining three squares.	
				squares[i].style.display= "none"
			}
			
		}
	message.textContent = "";
	banner.style.backgroundColor = '#7a7170';
}

function squareSetup() {
	for (var i = 0; i < squares.length; i ++) {
		squares[i].style.backgroundColor = colors[i]

		squares[i].addEventListener('click',function() {
			// alert('clicked a square!'); //Test
			var clickedColor = this.style.backgroundColor;

			// If correct color is clicked
			if (clickedColor === guessIt) {
				message.textContent = "YOU'RE A WINNER!";
				correct(clickedColor);
				resetButton.textContent = "PLAY AGAIN?" // Gives the user the option to play again.
			}
			else {
				this.style.backgroundColor = '#232323';
				message.textContent = 'TRY AGAIN';
			}
		})
	}
}

// Adding event listeners to our easy and hard mode buttons:
function modeSetup() {
	for (var i = 0;i < mode.length;i ++) {
		mode[i].addEventListener("click",function() {
			mode[0].classList.remove("selected");
			mode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
			reset();
		})
	}
}