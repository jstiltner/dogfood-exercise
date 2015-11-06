define(["jquery"], function($) {
	

		return {

			getFood: function(callback) {
				$.ajax({
				    url: "data/catfood.json"
				}).done(callback);

			}

		};
});


