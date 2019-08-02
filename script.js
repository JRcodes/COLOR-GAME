// alert('connected!') // Test

var colors = generateRandomColors(6);
var squares = document.querySelectorAll('.square');
var guessIt = randColor();
var colorDisplay = document.getElementById('colorDisplay');
var message  = document.getElementById('feedBack');
var banner = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")

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

// Adding an event listener to the button to reset the game.
resetButton.addEventListener("click",function() {
	// alert("Resetting Game!"); //Test
	resetButton.textContent = "NEW COLORS"
	colors = generateRandomColors(6);
	guessIt = randColor();
	colorDisplay.textContent = guessIt;
	for (var i = 0; i < squares.length; i ++) {
		squares[i].style.backgroundColor = colors[i]
	}
	message.textContent = "";
	banner.style.backgroundColor = '#232323';
})

// Adding event listeners to our easy and hard mode buttons:
easy.addEventListener("click",function() {
	// alert("Easy Mode"); // 
	hard.classList.remove("selected");
	easy.classList.add("selected");
	colors = generateRandomColors(3);
	guessIt = randColor();
	colorDisplay.textContent = guessIt;

	// Applies our logic to only the first 3 squares
	for (var i = 0; i < squares.length; i ++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			// This hides the remaining three squares.	
			squares[i].style.display= "none"
		}
		
	}
	resetButton.addEventListener("click",function() {
		// alert("Resetting Game!"); //Test
		hard.classList.remove("selected");
		easy.classList.add("selected");
		resetButton.textContent = "NEW COLORS"
		colors = generateRandomColors(3);
		guessIt = randColor();
		colorDisplay.textContent = guessIt;
		for (var i = 0; i < squares.length; i ++) {
			squares[i].style.backgroundColor = colors[i]
		}
		message.textContent = "";
		banner.style.backgroundColor = '#232323';
		for (var i = 3; i < 6; i ++) {
		squares[i].style.backgroundColor = "#232323"
		}
	})
})

hard.addEventListener("click",function() {
	// alert("Hard Mode"); // Test
	easy.classList.remove("selected");
	hard.classList.add("selected");
	colors = generateRandomColors(6);
	guessIt = randColor();
	colorDisplay.textContent = guessIt;
	for (var i = 0; i < squares.length; i ++) {
			if (colors[i]) {
				squares[i].style.display = "block";
				squares[i].style.backgroundColor = colors[i];
			}
	}
	resetButton.addEventListener("click",function() {
		// alert("Resetting Game!"); //Test
		easy.classList.remove("selected");
		hard.classList.add("selected");
		resetButton.textContent = "NEW COLORS"
		colors = generateRandomColors(6);
		guessIt = randColor();
		colorDisplay.textContent = guessIt;
		for (var i = 0; i < squares.length; i ++) {
			squares[i].style.backgroundColor = colors[i]
		}
		message.textContent = "";
		banner.style.backgroundColor = '#232323';
	})
})