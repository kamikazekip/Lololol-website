module.exports = function() {
    
   	var lololol = {};
    var duration = 1000;
    var content = "#content";
    var easing = "easeInOutQuint"


    lololol.fadeIn = function(callBack){
        $(content).animate({ opacity: 1}, duration, easing, callBack);
    }

    lololol.fadeOut = function(callBack){
        console.log("HALLO 3");
		$(content).animate({ opacity: 0}, duration, easing, callBack);
    }

    return lololol;
};