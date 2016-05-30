module.exports = function($scope, $state, $interval, $timeout, $lololol) {
	$scope.stop;
	$scope.first = true

	$scope.$on('$viewContentLoaded', function(event) {
		event.preventDefault();
		if($scope.first == true){
			$scope.first = false;

			$(".rainbow > *")
		        .blast({ delimited: "word" });

		    $timeout(function(){
		        $(".nahnah")[0].play();
		    }, 100 );

		    $timeout(function(){
		        $(".nyancat")
		            .addClass("fly"); 
		    }, 2000 );

		    $scope.stop = $interval(function() {
		    	console.log("Something");
		        var rainbow = "rainbow".split("");
		        var colors = ["#ff1211", "#ffa70e", "#ffff04", "#43ff0d", "#13abff", "#7745ff"];

		        var $x = $("<div class=text />");
		        var $star = $("<div class=star />");
		        
		        $star.css({
		           left: Math.random()*95 + "%",
		           top: Math.random()*95 + "%"
		        });
		        
		        $x.css({
		           left: Math.random()*95 + "%",
		           top: Math.random()*95 + "%"
		        }).text(function(){
		            return rainbow[ Math.floor(Math.random() * rainbow.length) ]
		        }).css({
		            color: colors[ Math.floor(Math.random()* colors.length ) ]
		        });

		        $("body")
		            .append( $star )
		            .append( $x );
		        
		        $timeout(function() {
		            $star.remove();
		        }, 1000 );
		        $timeout(function() {
		            $x.remove();
		        }, 1500 );
		            
		        
		    }, 150 );

		    var v = true;
		    $("body").on("click", function() {
		       
		        if( v ) {
		            $(".nahnah")[0].volume = 0;
		        } else {
		            $(".nahnah")[0].volume = 1;
		        }
		        v = !v;
		    });

		    
		}
	});

	$scope.startButton = function(){
		$interval.cancel($scope.stop);
		$state.go('tour');
	}
}