define(["jquery", "populate-dog", "populate-cat", "hbs"], 
	function($, populateDog, populateCat, hbs) {






		populateDog.getFood(imCallingYou);

		populateCat.getFood(imCallingYou2);

		
		
		function imCallingYou(foodList) {
			require(['hbs!../templates/dog-food'], function(foodTemplate) {
				$(".output-div").append(foodTemplate(foodList));
			});
		}

		function imCallingYou2(foodList) {
			require(['hbs!../templates/cat-food'], function(foodTemplate) {
				$(".output-div").append(foodTemplate(foodList));
			});
		}


 });