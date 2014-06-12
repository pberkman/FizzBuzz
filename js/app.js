$(document).ready(function() {


	var game = function() {
		var number= $("#enterNum").val();
		if (isNaN(+number)) {
			alert("You did not enter a number, try again");
		} else if (+number<0 || +number>100) {
			alert("Pick a number BETWEEN 1 and 100");
		} else if (+number%1!==0) {
			alert("Integers only!");
		} else {
			for (var i=1;i<=+number;i++) {
				if (i%5===0 && i%3===0) {
					$("body").append("<p class='gameNum'>FizzBuzz</p>");
				} else if (i%3===0) {
					$("body").append("<p class='gameNum'>Fizz</p>");
				} else if (i%5===0) {
					$("body").append("<p class='gameNum'>Buzz</p>"); 
				} else {
					$("body").append("<p class='gameNum'>" + i + "</p>");
	  			}
			}
		$("#enterNum").val("");
		}
	}
	$("#submit").on("click", function() {
		$(".gameNum").remove();
		game();
	});
	$(document).on("keydown", function(event) {
			if (event.which===13) {
			$(".gameNum").remove();
			game();
			}
	})
});


