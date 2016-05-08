var app = angular.module('customDoubleClick', []);

app.controller('CustomDoubleClickCtrl', function($scope) {
	var clickCount = 0;
	$scope.doubleClickHandler = function(){
		clickCount++;
		
		if(clickCount === 2){
			$scope.image = {
				state : "images/thumbUp.png",
				alt : "Double clicked"
			};
		}else{
			$scope.image = {
				alt : null
			};
		}
		setTimeout(function(){
			clickCount = 0;
		}, 250);
	};
});

app.directive("doubleClick", function(){
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var counter = 0;
			element.bind('click', function(){
				counter++;
				if(counter == 2){
					alert('Doulbe clicked');
				}
				setTimeout(function(){
					counter = 0;
				},250);
			});
		}
	};
})