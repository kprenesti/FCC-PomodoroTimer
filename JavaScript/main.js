$(document).ready(function(){
  var oneSecond = 1000;
  var oneMinute = 60 * oneSecond;
  var defaultRestTimeInt = 5*oneMinute;
  var defaultTimeInt = 25*oneMinute;
  var adjustedRestTime = defaultRestTimeInt;
  var adjustedWorkTime = defaultTimeInt;
  var workIntervalID;
  var minsRemaining, secsRemaining;
  var alert = new Audio();
  alert.src = "ion.sound-3.0.6/sounds/bell_ring.mp3";
  
  function playSound(){
    alert.play();
  }
  
  
  //REST DISPLAY AND TIMES
  $('#restDigits').html(defaultRestTimeInt/oneMinute + ' Mins');
  
  $('#addRest').on('click', function(){
    adjustedRestTime += oneMinute;
    $('#restDigits').html(adjustedRestTime/oneMinute + ' Mins');
  });
  
  $('#subRest').on('click', function(){
    adjustedRestTime -= oneMinute;
    $('#restDigits').html(adjustedRestTime/oneMinute + ' Mins');
  });
  
  //WORK DIGITS AND DISPLAY
  $('#addWork').on('click', function(){
    adjustedWorkTime += oneMinute;
    if(adjustedWorkTime/oneMinute === 60){
      alert("The maximum session length is 60 minutes.");
      adjustedWorkTime = 60*oneMinute;
    }
    $('#workDigits').html(adjustedWorkTime/oneMinute + ' Mins');
    $('#countdownDigits').html(adjustedWorkTime/oneMinute + ' Mins');
  });
  
  $('#subWork').on('click', function(){
    adjustedWorkTime -= oneMinute;
    $('#workDigits').html(adjustedWorkTime/oneMinute + ' Mins');
    $('#countdownDigits').html(adjustedWorkTime/oneMinute + ' Mins');
  });
  
  //RESET TIMER TO DEFAULT
  function resetTimes(){
    $('#workDigits').html(defaultTimeInt / oneMinute);
    $('#restDigits').html(defaultRestTimeInt / oneMinute);
    $('#countdownDigits').html(defaultTimeInt/ oneMinute + ' Mins');
    adjustedWorkTime = defaultTimeInt;
    adjustedRestTime = defaultRestTimeInt;
  }
  
$('#reset').on('click', resetTimes);
  
  
//CREATE TIMING EVENTS
  function workTicker(workTimer){
    workIntervalID = setInterval(function(){
       workTimer -= oneSecond;
       minsRemaining = parseInt(workTimer/oneMinute);
       secsRemaining = parseInt(workTimer % oneMinute);
       $('#countdownDigits').html(minsRemaining + " : " + secsRemaining/oneSecond);
       $('#status').html('Work Time');
      if(minsRemaining < 10){
        $('#countdownDigits').html("0"+minsRemaining + " : " + secsRemaining/oneSecond);
      } 
      if(secsRemaining < 10){
        $('#countdownDigits').html("Work<br>"+minsRemaining + " : 0" + secsRemaining/oneSecond);
      }
      if(minsRemaining === 0 && secsRemaining === 0){
        playSound();
        clearInterval(workIntervalID);
        restTicker(adjustedRestTime);
      }
   }, oneSecond); 
  } //end workTicker
  
  function restTicker(workTimer){
    workIntervalID = setInterval(function(){
       workTimer -= oneSecond;
       minsRemaining = parseInt(workTimer/oneMinute);
       secsRemaining = parseInt(workTimer % oneMinute);
      $('#status').html('Rest Time');
       $('#countdownDigits').html(minsRemaining + " : " + secsRemaining/oneSecond);
      if(minsRemaining < 10){
        $('#countdownDigits').html("0"+minsRemaining + " : " + secsRemaining/oneSecond);
      } 
      if(secsRemaining < 10){
        $('#countdownDigits').html("Work<br>"+minsRemaining + " : 0" + secsRemaining/oneSecond);
      }
      if(minsRemaining === 0 && secsRemaining === 0){
        playSound();
        clearInterval(workIntervalID);
        workTicker(adjustedWorkTime);
      }
   }, oneSecond); 
  }

$('.start').on('click', function(){
  workTicker(adjustedWorkTime);
  $(this).addClass('invisible');
  $('.stop').removeClass('invisible');
  $('#status').removeClass('invisible');
});

$('.stop').on('click', function(){
  clearInterval(workIntervalID);
  $(this).addClass('invisible');
  $('.start').removeClass('invisible');
  $('#status').addClass('invisible');
  $('#countdownDigits').html('Start Timer');
});
  
}); //end ready
