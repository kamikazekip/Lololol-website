module.exports = function($scope, $state, $timeout, $lololol) {
	$scope.first = true;
	$scope.doneLoading = false

	$scope.setProgressBar = function(percent){
		var progress = $(".LLLProgress");
		percent *= 0.01;
		new_width = (percent * progress.parent().width())+'px';
		progress.stop(true, false)
		progress.animate({ width: new_width }, 1000, function(){
			/*if($scope.doneLoading){
				var progressBar = $(".LLLProgressbar");
				progressBar.animate({"opacity": 0}, 1000, function(){
					setTimeout(function(){
						$("#start-button").css({"z-index": 9999});
						$(".LLLProgressOverlay").animate({ "opacity": 0 }, 3000, function(){
							$(".LLLProgressOverlay").css({"z-index": 0});
						});
					}, 300);
				});
			}*/
		});
	}

	this.startButton = function(){
		$state.go('tour');
	}

	this.transitionTo = function(newState){
		$lololol.fadeOut(function(){
			$state.go(newState);
		});
	}

	$scope.loaded = function(){
		var v = document.getElementById('start-video');
	    var r = v.buffered;
	    var total = v.duration;
	    var neededToStart = 10;

	    var end = r.end(0);

	    var percentage = (end/neededToStart)*100
	    if(percentage >= 100 && !$scope.doneLoading){
			$scope.doneLoading = true
			$scope.setProgressBar(percentage)
		}
		if(!$scope.doneLoading){
			 $scope.setProgressBar(percentage)
		}
	}

	$scope.$on('$viewContentLoaded', function(event) {
		event.preventDefault();
		if($scope.first){
			$scope.first = false;

			$('#start-video').bind('progress', function() 
			{
			    $scope.loaded();
			});
		}
	});	
}