$(document).ready(function(){
  
  var breakTime = 5;
  var sessionTime = 25;
  var sessionminutes = sessionTime-1;
  var sessionseconds =59;
  var breakminutes = breakTime-1;
  var breakseconds = 59;
  var countdown;
  var breakcountdown;
  var pause=false;
  
  $("#break").text(breakTime);
  $("#count").text(sessionTime);
  $("#time").text(sessionTime + ":00");
  
  $("#decBreak").click(function(){
    if(pause === false){
      if(breakTime>1){
        breakTime--;
        breakminutes--;
        $("#break").text(breakTime);        
      }
    }
  });
  $("#incBreak").click(function(){
    if(pause === false){
      if(breakTime>0){
        breakTime++;
        breakminutes++;
        $("#break").text(breakTime);
      }
    }
  });
  $("#decSession").click(function(){
    if(pause === false){
      if(sessionTime>1){
        sessionTime--;
        sessionminutes--;
        sessionseconds =59;
        $("#count").text(sessionTime);
        $("#time").text(sessionTime + ":00");
      }
    }
  });
  $("#incSession").click(function(){
    if(pause === false){
      if(sessionTime>0){
        sessionTime++;
        sessionminutes++;
        sessionseconds =59;
        $("#count").text(sessionTime);
        $("#time").text(sessionTime + ":00");
      }
    }
  });
    
    function timer(){            
        if(sessionseconds === 0){
          if(sessionminutes === 0){
            var wav = "http://k001.kiwi6.com/hotlink/he0y93sgsi/Old-clock-ringing-short.mp3";
            var audio = new Audio(wav);
            audio.play();
            breakminutes = breakTime-1;
            breakseconds = 59;
            clearInterval(countdown);                           breakcountdown=setInterval(breaktimer,1000);
            $("#time").text(breakTime + ":00");
            $("#clocktitle").text('Break');
          }else{
            sessionminutes--;
            sessionseconds = 60;
          }
        }else{
          if(sessionseconds < 10){
            $("#time").text(sessionminutes + ":0" + sessionseconds);
          }
          else{
            $("#time").text(sessionminutes + ":" + sessionseconds);
          }
        }
        sessionseconds--;
    }
   
    function breaktimer(){
        
        if(breakseconds === 0){
          if(breakminutes === 0){
            var wav = "http://k001.kiwi6.com/hotlink/he0y93sgsi/Old-clock-ringing-short.mp3";
            var audio = new Audio(wav);
            audio.play();
            sessionminutes = sessionTime-1;
            sessionseconds = 59;
            clearInterval(breakcountdown);
            countdown=setInterval(timer,1000);
            $("#time").text(sessionTime + ":00");
            $("#clocktitle").text('Session');
            
          }else{
            breakminutes--;
            breakseconds = 59;
          }
        }else{
          if(breakseconds < 10){
            $("#time").text(breakminutes + ":0" + breakseconds);
          }
          else{
            $("#time").text(breakminutes + ":" + breakseconds);
          }
        }
        breakseconds--;
    }
  
  
  
  $('.clock').click(function(){
    if(pause === false){
      if($("#clocktitle").text() === "Break") {
        countdown = setInterval(breaktimer, 1000);
      } else {
        countdown = setInterval(timer, 1000);
      }
      pause = true;
    }
  });
  
  $(".btn-start").click(function(){
    if(pause === false){
      if($("#clocktitle").text() === "Break") {
        countdown = setInterval(breaktimer, 1000);
      } else {
        countdown = setInterval(timer, 1000);
      }
      pause = true;
    }
  });
  
  $(".btn-pause").click(function(){
    clearInterval(countdown);
    clearInterval(breakcountdown);
    pause=false;
  });
  
  $(".btn-reset").click(function(){
    clearInterval(countdown);
    clearInterval(breakcountdown);
    breakTime=5;
    sessionTime=25;
    sessionminutes = sessionTime-1;
    sessionseconds =59;
    breakminutes = breakTime-1;
    breakseconds = 59;
    $("#break").text(breakTime);
    $("#count").text(sessionTime);
    $("#time").text(sessionTime + ":00");
    $("#clocktitle").text('Session');
    pause=false;
  });
  
});
