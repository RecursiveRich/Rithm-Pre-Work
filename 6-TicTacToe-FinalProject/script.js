document.addEventListener("DOMContentLoaded", function(){
	var container = document.querySelector(".container")
	container.addEventListener('click', markBoard)
	var toggle = 'X'
	function markBoard(e) {
		if (e.target.innerText.length === 0) {
			if (toggle === 'X') {
				e.target.innerText = 'O';
				toggle = 'O';
			} else {
				e.target.innerText = 'X';
				toggle = 'X';
			}
		}
		status();
	}

	function status() {
		var gridDivs = document.querySelectorAll(".column div")
		var grid = "";
		gridDivs.forEach(div => div.innerText.length === 0 ? grid += '-' : grid += div.innerText)
		if(grid[0] === 'X' && grid[1] === 'X' && grid[2] === 'X') {
			alert("X wins!") 
		} else if (grid[3] === 'X' && grid[4] === 'X' && grid[5] === 'X') {
			alert("X wins!")
		} else if (grid[6] === 'X' && grid[7] === 'X' && grid[8] === 'X') {
			alert("X wins!")
		} else if (grid[0] === 'X' && grid[3] === 'X' && grid[6] === 'X') {
			alert("X wins!") 
		} else if (grid[1] === 'X' && grid[4] === 'X' && grid[7] === 'X') {
			alert("X wins!")
		} else if (grid[2] === 'X' && grid[5] === 'X' && grid[8] === 'X') {
			alert("X wins!")
		} else if (grid[0] === 'X' && grid[4] === 'X' && grid[8] === 'X') {
			alert("X wins!")
		} else if (grid[2] === 'X' && grid[4] === 'X' && grid[6] === 'X') {
			// alert("X wins!")
		}  else if(grid[0] === 'O' && grid[1] === 'O' && grid[2] === 'O') {
			alert("O wins!") 
		} else if (grid[3] === 'O' && grid[4] === 'O' && grid[5] === 'O') {
			alert("O wins!")
		} else if (grid[6] === 'O' && grid[7] === 'O' && grid[8] === 'O') {
			alert("O wins!")
		} else if (grid[0] === 'O' && grid[3] === 'O' && grid[6] === 'O') {
			alert("O wins!") 
		} else if (grid[1] === 'O' && grid[4] === 'O' && grid[7] === 'O') {
			alert("O wins!")
		} else if (grid[2] === 'O' && grid[5] === 'O' && grid[8] === 'O') {
			alert("O wins!")
		} else if (grid[0] === 'O' && grid[4] === 'O' && grid[8] === 'O') {
			alert("O wins!")
		} else if (grid[2] === 'O' && grid[4] === 'O' && grid[6] === 'O') {
			alert("O wins!")
		}
	}
})