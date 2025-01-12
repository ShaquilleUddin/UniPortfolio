//TASK ONE (completed)

function makeRows(row) {
	var puzzle = [];
	for (var i = 0; i < row.length; i++) {
	  puzzle.push(row.slice());
	}
	return puzzle;
  }

//TASK TWO (completed)
// this is the constructor of the queue data structure
function Queue() {
	this.arr = [];
	this.head = function() {
		return this.arr[0];
	};
	this.dequeue = function() {
		if (this.arr.length == 0) {
			return "Empty Queue";
		} else {
			return this.arr.shift();
		}
	};
	this.enqueue = function(o) {
		this.arr.push(o);
	};
	this.isEmpty = function() {
			return this.arr.length == 0;
	};
}

function permuteRow(row, p) {
	const n = row.length;
	const queue = [];
	const result = [];
	
	for (let i = 0; i < n; i++) {
	  queue.push(row[i]);
	}
  
	for (let i = 0; i < p; i++) {
	  const first = queue.shift();
	  queue.push(first);
	}
	
	while (queue.length > 0) {
	  result.push(queue.shift());
	}
	
	return result;
  }

function permutePuzzle(puzzle, p, q, r) {
	var perms = [p,q,r];
    for (var i=0; i<3; i++){
        puzzle[i + 1] = permuteRow(puzzle[i + 1], perms[i]);
    }
    return puzzle;
}

//TASK THREE (completed)

function linearSearch(array, item) {
	var n = array.length;
	for (var i = 0; i < n; i++) {
		if (array[i] == item) {
			return true;
		}
 	}
	return false;
}

function checkColumn(puzzle, j) {
	//first make an array out of the values stored in column j
	var column = [];
	for (var i = 0; i < puzzle.length; i++) {
		column.push(puzzle[i][j]);
	}
	//call linearSearch on the array of column values for all values of k from 1 to 4
	for (var k = 1; k <= 4; k++) {
		if (!linearSearch(column, k)) {
			return false;
		}
	}
	return true;
}

//TASK FOUR (completed)

function colCheck(puzzle) {
	for (let col = 0; col < puzzle.length; col++) {
	  if (!checkColumn(puzzle, col)) {
		return false;
	  }
	}
	return true;
  }

//TASK FIVE (completed)

function makeGrid(puzzle, row1, row2, col1, col2) {
	//this copies all elements in a grid from co-ordinates (row1, col1) to (row2,col2) to an array
	var array = [];
	for (var i = row1; i <= row2; i++) {
		for (var j = col1; j <= col2; j++) {
			array.push(puzzle[i][j]);
		}
	}
	return array;
}

function checkGrid(puzzle, row1, row2, col1, col2) {
    for(var i = 1; i < 5 ;i++)
    {
        if(linearSearch(makeGrid(puzzle, row1, row2, col1, col2), i) == false)
        {
            return false;
        }        
    }
    return true;
}

//TASK SIX (completed)

function checkGrids(puzzle) {
	if(checkGrid(puzzle,0,1,0,1) && checkGrid(puzzle,0,1,2,3) && checkGrid(puzzle,2,3,0,1) && checkGrid(puzzle,2,3,2,3) === true)
		{
		return true;
		}
	return false;
}

//TASK SEVEN (completed)

function makeSolution(row) {
	var grid = makeRows(row);
	permutePuzzle(grid,1,2,3);
	colCheck(grid);
	checkGrids(grid);
	return grid;
}

// TASK EIGHT (completed)
	
// a function to randomly select n (row,column) entries of a 2d array
function entriesToDel(n) {
		var array = [];
		for (var i = 0; i < n; i++) {
			var row = Math.round(3*Math.random());
			var col = Math.round(3*Math.random());
			array.push([row,col]);
		}
		return array;
}
	
	function genPuzzle(row, n) {
		if (n >= 16) {
			return "Error! Too many blank spaces!";
		}
		var solution = makeSolution(row);
		var blanks = entriesToDel(n);
		for (var i = 0; i < blanks.length; i++) {
			solution[blanks[i][0]][blanks[i][1]] = " ";
		}
		return solution;
	}

// The following function is used to visualise the puzzles

function visPuzzle(puzzle) {
	var viz = "";

	for (var i = 0; i < puzzle.length; i++) {
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
		}
		viz = viz + "-\n";
		for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "| " + puzzle[i][j] + " ";
		}
		viz = viz + "| " + "\n";
	}
	for (var j = 0; j < puzzle.length; j++) {
			viz = viz + "----";
	}
	viz = viz + "-";

	return viz;
}


// DO NOT DELETE BELOW THIS LINE OR NOTHING WILL WORK AND YOU MAY GET NO MARKS

module.exports = {makeRows : makeRows, makeSolution : makeSolution, genPuzzle : genPuzzle, checkGrid : checkGrid, checkGrids : checkGrids, colCheck : colCheck, checkColumn : checkColumn, permuteRow : permuteRow, permutePuzzle : permutePuzzle, entriesToDel : entriesToDel};