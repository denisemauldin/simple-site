$(function(){
	$("button").click(function(){
		var url = $(this).attr("id");

		$.get(url, function (response) {
			var resText;

			switch (url) {
				case "quote":
				resText = response;
				break;

				case "morseCode":
				resText = response;
				break;

				case "joke":
				resText = response.setup + "    " + response.punchline;
				break;

				case "battingAvg":
				resText = response.player + "     " + response.avg;
				break;
			}

 		$("#ajax-text").text(resText);
	 	});
	});

		$("#piglatin").on("submit", function(e) {
		 e.preventDefault();
		var firstname = $('input[name=firstname]').val();
		var lastname = $('input[name=lastname]').val();
		var name = {firstname: firstname, lastname: lastname};
			$.post("piglatin", name, function(response) {
		 var piglatinified = response.firstname + " " +
		 response.lastname;
		 $("#piglatinified").text(piglatinified);
		 });
		});
		
    $("#morseCode").on("submit", function(e) {
		e.preventDefault();
        var input = $('input[name=convertify]').val();
        test = {text:input};
        $.post("morseCode", test, function(response) {
            console.log("response is "+response);
            var morseCodified = response;
	        $("#morseCodified").text(morseCodified);
        });
	});
});
