module.exports = function($scope, $state, $lololol, $window, $stateParams) {
	$scope.videoDiv 					= "#mainVPdiv";
	$scope.tourbar_selector  			= ".tourbar";
	$scope.tourbar_point_selector 		= "#tourbar-point-";
	$scope.tourbar_point_margin			= 8;
	$scope.thumbnailAnimationEasing 	= "easeInOutQuad"
	$scope.thumbnailAnimationDuration 	= 400;
	$scope.videoPaused 					= false;
	$scope.youtube_player;
	$scope.youtube_options 				= { 	
											rel: 0, 
											iv_load_policy: 3,
											autoplay: 0
										};

	$scope.videos = $lololol.getVideos();

	$scope.init = function(){
		$scope.currentVideo = $scope.videos[0];
		$scope.url_video_id = $stateParams.video;
		var result = $.grep($scope.videos, function(e){ return e.id == $scope.url_video_id; });
		if (result.length == 1) {
			$scope.currentVideo = result[0];
		} else {
			$scope.goToVideo($scope.currentVideo);
		}

		$("#thumbnail").bind({
		    load: function(){
		    	console.log("HALLO");
		    },
		    error: function() {
		        console.log('Error thrown, image didn\'t load, probably a 404.');
		    }
		});
	}
	
	$scope.select_video = function(video){
		$scope.currentVideo = video;
		$scope.goToVideo(video);
	}

	$scope.goToVideo = function(video){
		$state.go('tour', { video: video.id });
	}

	$scope.positionToolbar = function(){
		var tourbar = $($scope.tourbar_selector);
		var tourbar_point = $($scope.tourbar_point_selector + $scope.currentVideo.id);
		var center = $(window).width() / 2;
		var tourbar_point_left = tourbar_point.position().left
		var tourbar_point_width = tourbar_point.width() + (parseInt(tourbar_point.css("border-left-width")) * 2)
		var newTourbarLeft = center - tourbar_point_left - (tourbar_point_width / 2)
		if(newTourbarLeft > 0 || tourbar_point_left <= center ){
			newTourbarLeft = parseInt(tourbar_point.css("border-left-width")) + tourbar_point.width() + 20;
		}
		tourbar.css({"left": newTourbarLeft + "px"});
	}

	$scope.tourbar_point_hover = function(video){
		$(".videothumbtitle").html(video.title);
		$("#thumbnail").addClass("disabled")
		$("#thumbnailSpinner").removeClass("disabled");
		$(".videothumbnail").one("load", $scope.onThumbnailLoaded).attr("src", "http://img.youtube.com/vi/" + video.embed + "/0.jpg");
		var tourbar_point 		= $($scope.tourbar_point_selector + video.id);
		var tourbar_point_width = tourbar_point.width() + (parseInt(tourbar_point.css("border-left-width")) * 2)
		var thumbnail 			= $(".videothumb");
		var thumbnailWidth  	= thumbnail.width();
		var windowWidth 		= $(window).width();
		var top 				= tourbar_point.offset().top + 50;
		var left 				= tourbar_point.offset().left + ( tourbar_point_width / 2 ) - thumbnail.width() / 2;
		if(left < 0){
			left = 10;
			thumbnail.removeClass("videothumbBorder videothumbBorderRight").addClass("videothumbBorderLeft");
		} else if(left > windowWidth - thumbnailWidth){
			left = windowWidth - thumbnailWidth - 10;
			thumbnail.removeClass("videothumbBorder videothumbBorderLeft").addClass("videothumbBorderRight");
		} else { 
			thumbnail.removeClass("videothumbBorderLeft videothumbBorderRight").addClass("videothumbBorder");
		}
		thumbnail.stop();
		thumbnail.css({"opacity": 0, "top": top + "px", "left": left + "px"});
		thumbnail.animate({ opacity: 1, top: "+=30px" }, $scope.thumbnailAnimationDuration, $scope.thumbnailAnimationEasing);
	}

	$scope.tourbar_point_hover_out = function(video){
		var thumbnail 		= $(".videothumb");
		thumbnail.stop();
		thumbnail.animate({ opacity: 0, top: "+=30px" }, $scope.thumbnailAnimationDuration, $scope.thumbnailAnimationEasing, function(){
			var top 	= 0 - thumbnail.height() - 10;
			var left 	= 0 - thumbnail.width()  - 10;
			thumbnail.css({"top": top + "px", "left": left + "px"});
		});
	}

	$scope.onThumbnailLoaded = function(){
		$("#thumbnail").removeClass("disabled")
		$("#thumbnailSpinner").addClass("disabled");
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
		var vpWidth = $($scope.videoDiv).width();
		var newHeight = Math.floor((vpWidth / 16) * 9);
		var newTop = ($(window).height() - newHeight) / 2;
		$($scope.videoDiv).css({ height: newHeight, top: newTop });
	}

	$scope.positionDots = function(){
		var tourbar = $(".tourbar")
		var newTourbarWidth = ($scope.videos.length - 1) * $(window).width() * (0.01 * $scope.tourbar_point_margin);
		tourbar.css({width: newTourbarWidth});

		$('.tourbar').children('.tourbar-point').each(function (index) {
			leftPercentage = index * (100 / ($scope.videos.length - 1));
			var width = $(this).width();
			var borderLeftWidth = parseInt($(this).css("border-left-width"));
			var parentWidth = $(this).parent().width();
			var newLeft = (parentWidth * (0.01 * leftPercentage)) - (width / 2) - borderLeftWidth;
		    $(this).css('left', newLeft + 'px');
		});
	}

	$scope.spacebar = function(){
		if($scope.videoPaused){
			$scope.youtube_player.playVideo();
		} else {
			$scope.youtube_player.pauseVideo();
		}
	}

	$scope.share_button_click = function(){
		var share_panel = $("#share-panel");
		if(share_panel.hasClass("share-panel-out")){
			share_panel.removeClass("share-panel-out");
		} else {
			share_panel.addClass("share-panel-out");
		}
	}

	$scope.facebook_click = function(){
		var url = 'https://www.facebook.com/sharer/sharer.php?app_id=113869198637480&sdk=joey&u=http%3A%2F%2Flololol.io%2F%23%2Ftour%3Fvideo%3D' 
		+ $scope.currentVideo.id + '&display=popup&ref=plugin&src=share_button'
		window.open(url,'name','width=600,height=400')
	}

	$(document).ready(function(){
		$(document).keydown(function(event){
			switch(event.keyCode){
				case(32):
					if($scope.youtube_player){
						$scope.spacebar();
					}
					break;
				case(37):
					$scope.previous();
					$scope.$apply();
					break;
				case(39):
					$scope.next();
					$scope.$apply();
					break;
			}
		});
	})

	$scope.$on('$viewContentLoaded', function(event) {
		$scope.resize();
	});

	$scope.$on('youtube.player.paused', function ($event, player) {
		$scope.youtube_player = player;
    	$scope.videoPaused = true;
  	});	

  	$scope.$on('youtube.player.playing', function ($event, player) {
  		$scope.youtube_player = player;
    	$scope.videoPaused = false;
  	});	

  	$scope.$on('youtube.player.ready', function ($event, player) {
  		$scope.positionToolbar();
  	});	

  	$scope.$on('youtube.player.ended', function ($event, player) {
    	$scope.next();
  	});	

 	$scope.$on('onRepeatLast', function(scope, element, attrs){
    	$scope.positionDots();
  	});

	angular.element($window).bind('resize', function () {
		$scope.resize();
		$scope.positionDots();
		$scope.positionToolbar();
	});

	$scope.init();
 	//$lololol.fadeIn();
}