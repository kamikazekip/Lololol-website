module.exports = function($scope, $state, $lololol, $timeout, $window, $sce) {
	var self = this;
	var videoDiv = "#mainVPdiv";
	var tourbar_point_id = "#tourbar-point-";
	var thumbnailAnimationDuration = 250;

	$scope.videoPaused = false;
	$scope.youtube_player;

	$scope.youtube_options = { 	
								rel: 0, 
								iv_load_policy: 3
							};

	$scope.videos = [{
		id: "1",
		title: "Late for meeting",
		youtube_embed: "wBqM2ytqHY4"
	},
	{
		id: "2",
		title: "Going to the store",
		youtube_embed: "iRZ2Sh5-XuM"
	},
	{
		id: "3",
		title: "La la la cocaine",
		youtube_embed: "zGX0LVkLr04"
	},
	{
		id: "4",
		title: "How to correctly add milk to your coffee",
		youtube_embed: "TC6JhvM0jWM"
	},
	{
		id: "5",
		title: "Wingardium leviosa",
		youtube_embed: "FWtO0cfgewY"
	}, 
	{
		id: "6",
		title: "Wingardium leviosa 2",
		youtube_embed: "reop2bXiNgk"
	}, 
	{
		id: "7",
		title: "Thor 'n' loki",
		youtube_embed: "-CNlNYIRw4g"
	},
	{
		id: "8",
		title: "Dragonzball P (Dragonball Z Parody) - Oney Cartoons",
		youtube_embed: "OYa5aQb3YGE"
	},
	{
		id: "9",
		title: "Dragonzball PeePee (Dragonball Z Parody Animation) - Oney Cartoons",
		youtube_embed: "7pSmhZFbCy0"
	},
	{
		id: "10",
		title: "Henry the Hoover's Cocaine Overdose",
		youtube_embed: "CmC62Eg82E8"
	}, 
	{
		id: "11",
		title: "DJ RAVINE'S BEST LAUNCHPAD COVER EVER - AVICII - LEVELS",
		youtube_embed: "ya7FbdL5Xrk"
	}, 
	{
		id: "12",
		title: "You're a wizard harry!",
		youtube_embed: "tKNhPpUR0Pg"
	}];

	$scope.currentVideo = $scope.videos[0];

	$scope.select_video = function(video){
		$scope.youtube_options.autoplay = 1;
		$scope.select_video = $scope.select_video_second;
		$scope.select_video(video);
	}

	$scope.select_video_second = function(video){
		$scope.currentVideo = video;
	}

	$scope.tourbar_point_hover = function(video){
		$("#videothumbtitle").html(video.title);
		$("#videothumbnail").attr("src", "http://img.youtube.com/vi/" + video.youtube_embed + "/0.jpg");
		var tourbar_point 	= $(tourbar_point_id + video.id);
		var thumbnail 		= $("#videothumb");
		var top 			= tourbar_point.offset().top - thumbnail.height() - 50;
		var left 			= tourbar_point.offset().left + ( tourbar_point.width() / 2 ) - thumbnail.width() / 2;
		thumbnail.stop();
		thumbnail.css({"top" : top + "px", "left": left + "px"});
		thumbnail.animate({ opacity: 1, top: "-=10px" }, thumbnailAnimationDuration);

	}

	$scope.tourbar_point_hover_out = function(video){
		var thumbnail 		= $("#videothumb");
		thumbnail.stop();
		thumbnail.animate({ opacity: 0, top: "+=30px" }, thumbnailAnimationDuration, function(){
			var top 	= 0 - thumbnail.height() - 10;
			var left 	= 0 - thumbnail.width()  - 10;
			thumbnail.css({"top": top + "px", "left": left + "px"});
		});
	}

	$scope.previous = function(){
		var index = $scope.videos.indexOf($scope.currentVideo);
		if(index == 0){
			$scope.select_video($scope.videos[$scope.videos.length - 1])
		} else{
			$scope.select_video($scope.videos[index - 1]);
		}
	}

	$scope.next = function(){
		var index = $scope.videos.indexOf($scope.currentVideo);
		if(index == $scope.videos.length - 1){
			$scope.select_video($scope.videos[0])
		} else{
			$scope.select_video($scope.videos[index + 1]);
		}
	}

	$scope.resize = function(){
		var vpHeight = $(videoDiv).height();
		var newWidth = Math.floor((vpHeight / 9) * 16);
		var newLeft = ($(window).width() - newWidth) / 2;
		$(videoDiv).css({ width: newWidth, left: newLeft });
	}

	$scope.positionDots = function(){
		$('#tourbar-actual').children('.tourbar-point').each(function (index) {
			left = index * (100 / ($scope.videos.length - 1));
			var width = $(this).width();
		    $(this).css('left', left + '%');
		    $(this).css("left", "-=" + ( width / 2 ) + "px");
		});
	}

	$scope.keyPressed = function($event) {
		console.log("KEYDOWN");
        if ($event.keyCode === 32 || $event.charCode === 32) {
        	$scope.spacebar();
        }
	}
	

	$scope.spacebar = function(){
		console.log($scope.videoPaused);
		if($scope.videoPaused){
			youtube_player.playVideo();
			$scope.videoPaused = false;
		} else {
			youtube_player.pauseVideo();
			$scope.videoPaused = true;
		}
	}

	$scope.$on('$viewContentLoaded', function(event) {
		$scope.resize();
		$('.keyboardHandler').keydown($scope.keyPressed);
	});

	$scope.$on('youtube.player.paused', function ($event, player) {
    	$scope.videoPaused = true;
  	});	

  	$scope.$on('youtube.player.playing', function ($event, player) {
    	$scope.videoPaused = false;
  	});	

  	$scope.$on('youtube.player.ended', function ($event, player) {
    	$scope.next();
  	});	

 	$scope.$on('onRepeatLast', function(scope, element, attrs){
    	$scope.positionDots();
  	});

  	$(window).on("resize.doResize", function (){
		$scope.resize();
		$scope.positionDots();
	});

 	//$lololol.fadeIn();
}