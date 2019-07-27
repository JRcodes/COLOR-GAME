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
var guessIt = colors[3];
var colorDisplay = document.getElementById('colorDisplay')
colorDisplay.textContent = guessIt;

for (var i = 0; i < squares.length; i ++) {
	squares[i].style.backgroundColor = colors[i]

	squares[i].addEventListener('click',function() {
		// alert('clicked a square!'); //Test
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === guessIt) {
			alert('You are correct');
		}
		else {
			alert('You are wrong!')
		}
	})
}

