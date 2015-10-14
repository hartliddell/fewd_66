    var score = 0;

    $('#add5').on('click', addFive);
    $('#add10').on('click', addTen);
    $('#min1').on('click', minOne);
    $('#0').on('click', reset);

    function addFive() {
        score = score + 5;
        $('#result').html(score)
    }

    function addTen() {
        score = score + 10;
        $('#result').html(score)
    }

    function minOne() {
        score = score - 1;
        $('#result').html(score)
    }
    

    function reset() {
        score = score = 0;
        $('#result').html(score)
    }
    function updateResult(score) {
    	$("#result").html(score)    
    }
    
    