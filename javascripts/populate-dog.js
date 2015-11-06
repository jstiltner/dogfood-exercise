define(["jquery"], function($) {
	

		return {

			getFood: function(callback) {
				$.ajax({
				    url: "data/dogfood.json"
				}).done(callback);

			}

		};
});


