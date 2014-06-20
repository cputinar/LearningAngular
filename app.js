
(function (){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function(){
		this.product=gem;
	});

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95, 
		description: '. . .',
		canPurchase: false
		soldOut: true
	},
	{
		name: 'Pentagonal Gem',
		price: 5.95, 
		description: '. . . ', 
		canPurchase: false

	}	
	];
})();
