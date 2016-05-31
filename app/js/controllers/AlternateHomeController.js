module.exports = function($scope, $state, $interval, $timeout, $lololol) {
	$scope.stop;
	$scope.stopConsoleNyan;
	$scope.first 	 	= true
	$scope.muted	 	= false;
	$scope.maxVolume 	= 0.1;

	$scope. _nyan = 0;
	$scope. __nyan = [["+      o     +              o      ","    +             o     +       +  ","o          +                       ","    o  +           +        +      ","+        o     o       +        o  ","-_-_-_-_-_-_-_,------,      o      ","_-_-_-_-_-_-_-|   /\\_/\\            ","-_-_-_-_-_-_-~|__( ^ .^)  +     +  ","_-_-_-_-_-_-_-\"\"  \"\"               ","+      o         o   +       o     ","    +         +                    ","o        o         o      o     +  ","    o           +                  ","+      +     o        o      +     "],
			["+      o     +              +      ","    o             o     o       +  ","o          +                       ","    +  o           +        o      ","o        o     o       +        o  ","_-_-_-_-_-_-_-,------,      +      ","-_-_-_-_-_-_-_|   /\\_/\\            ","_-_-_-_-_-_-_-|__( ^ .^)  o     +  ","-_-_-_-_-_-_-_ \"\"  \"\"              ","+      +         o   +       o     ","    o         +                    ","+        +         +      +     o  ","    +           o                  ","+      o     o        o      +     "]]
		

	$scope.$on('$viewContentLoaded', function(event) {
		event.preventDefault();
		if($scope.first == true){
			$scope.first = false;

			$(".rainbow > *")
		        .blast({ delimited: "word" });

		    $timeout(function(){
		        $(".nahnah")[0].play();
		        $(".nahnah")[0].volume = $scope.maxVolume;
		        $scope.mute();
		    }, 100 );

		    $timeout(function(){
		        $(".nyancat")
		            .addClass("fly"); 
		    }, 2000 );

		    $scope.stop = $interval(function() {
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
		}
	});

	$scope.mute = function(){
		$(".speaker").toggleClass('mute');
		$scope.muted = !$scope.muted
        if( $scope.muted ) {
            $(".nahnah")[0].volume = 0;
        } else {
            $(".nahnah")[0].volume = $scope.maxVolume;
        }   
	}

	$scope.startButton = function(){
		$interval.cancel($scope.stop);
		$interval.cancel($scope.stopConsoleNyan);
		$state.go('tour');
	}

	$scope.nyan = function(){
		console.clear();
		console.log($scope.__nyan[$scope._nyan].join("\n"))
		if($scope._nyan == 0){ $scope._nyan = 1; } else {	$scope._nyan = 0; }	
	}
	$scope.stopConsoleNyan = $interval($scope.nyan, 300)
}