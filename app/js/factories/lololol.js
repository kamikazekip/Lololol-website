module.exports = function() {
    
   	var lololol = {};
    lololol.duration = 1000;
    lololol.easing = "easeInOutQuint"

    lololol.getVideos = function(){
        var videos = [
        {
            title: "Girl cries like a supercar (original)!",
            embed: "_yH5iyn81Ks"
        },
        {
            title: "Ice cream",
            embed: "MFT4OgFxfes"
        },
        {
            title: "Wingardium leviosa!",
            embed: "FWtO0cfgewY"
        }, 
        {
            title: "Wingardium leviosa 2!",
            embed: "reop2bXiNgk"
        },
        {
            title: "Henry the Hoover's Cocaine Overdose!",
            embed: "CmC62Eg82E8"
        }, 
        {
            title: "Going to the store!",
            embed: "iRZ2Sh5-XuM"
        },
        {
            title: "Late for meeting!",
            embed: "wBqM2ytqHY4"
        },
        {
            title: "RAINBOW BUNCHIE!",
            embed: "Ur5JnkOg_y4"
        },
        {
            title: "Shia LaBeouf - JUST DO IT!",
            embed: "ZXsQAXx_ao0"
        },
        {
            title: "DJ RAVINE'S BEST LAUNCHPAD COVER EVER - AVICII - LEVELS!",
            embed: "ya7FbdL5Xrk"
        }, 
        {
            title: "Best death scene!",
            embed: "BRGTVvOfzjs"
        },
        {
            title: "Odin eating like a person!",
            embed: "4Ri5cszSKEg"
        }, 
        {
            title: "Ultimate dog tease!",
            embed: "nGeKSiCQkPw"
        },
        {
            title: "HowToBasic - How to make a fruit cake",
            embed: "pug1P-OdtDE"
        },
        {
            title: "TomSka - HORSE",
            embed: "L46iCN6MBFM"
        },
        {
            title: "Will Sasso - lemons!",
            embed: "T6i5qHHXjz0"
        },
        {
            title: "Loituma dance!",
            embed: "DTSkygD1wR0"
        },
        {
            title: "HEYYEYAAEYAAAEYAEYAA",
            embed: "ZZ5LpwO-An4"
        },
        {
            title: "T-Rex on trampoline!",
            embed: "fN8TDEW_T_0"
        },
        {
            title: "Hey ron, hey billy!", 
            embed: "zBJU9ndpH1Q"
        },
        {
            title: "Skip Skip Slide (Official Music Video)",
            embed: "c8jbSoCbnns"
        },
        {
            title: "IceJJFish - On The Floor (Official Music Video)",
            embed: "iq_d8VSM0nw"
        },
        {
            title: "Rappin' for Jesus!",
            embed: "Kppx4bzfAaE"
        },
        {
            title: "Caramelldansen!",
            embed: "PDJLvF1dUek"
        }, 
        {
            title: "Thor 'n' Loki",
            embed: "-CNlNYIRw4g"
        },
        {
            title: "My name is Boxxy!",
            embed: "EOExl5doR2A"
        },
        {
            title: "Cyanide and happiness Shorts - Junk Mail!",
            embed: "s3zjRcMnRNY"
        },
        {
            title: "Happy Tree Friends - Milkin' it!",
            embed: "Jm1cdzpJQ1Q"
        },
        {
            title: "Charlie the unicorn - part 1!",
            embed: "CsGYh8AacgY"
        },
        {
            title: "Crazy Football Players Swimming in the mud near Blackpool!",
            embed: "-l8gX54Ihsk"
        },
        {
            title: "asdfmovie5!",
            embed: "tCnj-uiRCn8"
        }, 
        {
            title: "BEARS BEARS BEARS BEARS BEARS!",
            embed: "y4-ZXUotFlA"
        },
        {
            title: "MrWeebl - Badgers!",
            embed: "EIyixC9NsLI"
        },
        {
            title: "Cows & Cows & Cows",
            embed: "FavUpD_IjVY"
        },
        {
            title: "GradeAUnderA - Why I hate interviews!",
            embed: "2W0WsdLobq8"
        },
        {
            title: "Samwell - What what, in the butt!",
            embed: "fbGkxcY7YFU"
        },
        {
            title: "Dumb ways to die!",
            embed: "IJNR2EpS0jw"
        },
        {
            title: "Brodyquest!",
            embed: "ygI-2F8ApUM"
        },
        {
            title: "Shrek is love, shrek is life!",
            embed: "auEA9Ay6G0o"
        },
        {
            title: "We like to party!",
            embed: "b8HO6hba9ZE"
        },
        {
            title: "Family guy - Quagmire on gay marriage!",
            embed: "ijLI6ARxucQ"
        },
        {
            title: "Cooper loves ice cream!",
            embed: "MJI1JMOsGHU"
        },
        {
            title: "Nyan cat!",
            embed: "QH2-TGUlwu4"
        },
        {
            title: "Balls of steel - knock and don't run!",
            embed: "uoxcZiWK79c"
        },
        {
            title: "I HAY BALED MYSELF!",
            embed: "p71Lg5c83bc"
        },
        {
            title: "Rebecca Black - Friday!",
            embed: "kfVsfOSbJY0"
        },
        {
            title: "Schmoyoho - OH MY DAYUM!",
            embed: "DcJFdCmN98s"
        },
        {
            title: "Awesome series - PokeAwesome - Just a pokemon battle!",
            embed: "rHG-JO8gIGk"
        },
        {
            title: "Honest trailers - Frozen",
            embed: "Zb5IH57SorQ"
        },
        {
            title: "Bad lip reading - The Hunger games",
            embed: "QjGk_jU6t5A"
        },
        {
            title: "CinemaSins - The Hunger games",
            embed: "pn0LXWaPxnQ"
        },
        {
            title: "Gangnam style!",
            embed: "9bZkp7q19f0"
        },
        {
            title: "Shark lady!",
            embed: "olhczmTbB4I"
        },
        {
            title: "Psychicpebbles - KONY2012",
            embed: "k1FKS1SHSsc"
        },
        {
            title: "What does the fox say?",
            embed: "jofNR_WkoCE"
        },
        {
            title: "You're a wizard harry!",
            embed: "tKNhPpUR0Pg"
        },
        {
            title: "Let it go (gmod)!",
            embed: "JgNlkfbJhfI"
        }, 
        {
            title: "Risitas y las paelleras",
            embed: "WDiB4rtp1qw"
        }]

        var oldMemes = [{
            title: "Numa Numa!",
            embed: "KmtzQCSh6xk"
        },
        {
            title: "Afro ninja!",
            embed: "BEtIoGQxqQs"
        }, 
        {
            title: "Sneezing panda!",
            embed: "FzRH3iTQPrk"
        },
        {
            title: "Tay Zonday - Chocolate Rain!",
            embed: "EwTZ2xpQwpA"
        },
        {
            title: "David After Dentist!",
            embed: "txqiwrbYGrs"
        }, 
        {
            title: "TROLOLOLOLOL!",
            embed: "2Z4m4lnjxkY"
        },
        {
            title: "Chris Crocker - LEAVE BRITNEY ALONE!",
            embed: "lVQOLX1wDAc"
        }];
        
        videos.push.apply(videos, oldMemes)

        for(var i = 0; i < videos.length; i++){
            videos[i].id = i + 1;
        }
        return videos;
    }

    return lololol;
};