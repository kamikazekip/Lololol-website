module.exports = function($scope, $state, $timeout, $lololol) {
	$scope.first = true;
	/*
	var socket = io.connect('http://localhost:8000');
	socket.on('connect', function () {
		console.log("Connected!");

		socket.on('disconnect', function() {
	 		console.log("Disconnected!");
	 		console.log("Trying to reconnect!");
	 	});

	 	socket.on('reconnecting', function(number){
	 		console.log("Reconnecting attampt: " + number);
	 	});

	 	socket.on('reconnect', function(number){
	 		console.log("Reconnected on attempt " + number);
	 	});
 	}); */

	
	$scope.setProgressBar = function(percent){
		var progress = $(".LLLProgress");
		percent *= 0.01;
		new_width = (percent * progress.parent().width())+'px';
		progress.animate({ width: new_width }, 1000, "linear", function(){
			var progressBar = $(".LLLProgressBar");
			progressBar.animate({"opacity": 0}, 1000, "swing", function(){
				setTimeout(function(){
					$("#start-button").css({"z-index": 9999});
					$(".LLLProgressOverlay").animate({ "opacity": 0 }, 3000, function(){
						$(".LLLProgressOverlay").css({"z-index": 0});
					});
				}, 300);
			});
		});
	}

	this.startButton = function(){
		$state.go('tour');
		//$timeout(this.transitionTo("home.tour"), 260);
	}

	this.transitionTo = function(newState){
		$lololol.fadeOut(function(){
			console.log("HALLO 1", $state);
			$state.go(newState);
		});
	}

	$scope.$on('$viewContentLoaded', function(event) {
		if($scope.first){
			$scope.setProgressBar(100)
			$scope.first = false;
		}
	});	
}