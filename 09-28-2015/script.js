var score = 0;

		$('#reset').on('click', reset);
		$('#add5').on('click', addFive);
		$('#add10').on('click', addTen);
		$('#min1').on('click', minOne);


		function reset () {
			score = 0;
			$('#result').html(score);
		}

		function addFive() {
			score = score + 5;
			$('#result').html(score);
		}

		function addTen() {
			score = score + 10;
			$('#result').html(score);
		}

		function minOne() {
			score = score - 1;
			$('#result').html(score);
		}

		// var pizza = value passed into function
		function updateResult() {
			$('#result').html(score);
		}