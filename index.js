var buttonColours=["red","blue","green","yellow"];
var gamepattern=[];
var userpattern=[];
var level=0;



$(".btn").on("click", function () { 
     var id=$(this).attr("id");
    userpattern.push(id);
    playSound(id);
    animatebutton(id);
     checkAnswer(userpattern.length);
    
   
});



function nextSequence(){
    userpattern=[];
    c=1;
    level+=1;
    $("h1").text("Level "+level);
    var randomNumber=Math.floor(Math.random()*4)+0;
    var randomchosencolor=buttonColours[randomNumber];
     gamepattern.push(randomchosencolor);
     $("."+randomchosencolor).fadeOut(100).fadeIn(100);
     playSound(randomchosencolor);
     
     


} 

function playSound(name){
    src="sounds/"+name+".mp3";
     var audio=new Audio(src);
    audio.play();
    
}

function animatebutton(trigger){
    $("."+trigger).addClass("blink");

    setTimeout(function(){
        $("."+trigger).removeClass("blink");
    },100)
}

$("body").keypress(function () {
    if(level==0){ 
        setTimeout(function(){
            nextSequence();
        },1000)
    }
});

function checkAnswer(n){
       var ans=1;
      
       if(userpattern[n-1]!=gamepattern[n-1]){
              ans=0;
       }
      if(userpattern.length==gamepattern.length){ 
        if(ans==1){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
      }
      if(ans==0){
            $("h1").text("Game Over,Press Any key To Restart");
            playSound("wrong");
            animatebody();
            gamepattern=[];
            level=0;
            
        }
}

function animatebody(){
    $("body").addClass("gameo");
    setTimeout(function(){
        $("body").removeClass("gameo");
    },200);
}