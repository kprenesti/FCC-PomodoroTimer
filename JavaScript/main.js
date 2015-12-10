$(document).ready(function(){
  var secondInterval = 1000;
  var oneMinute = 60*secondInterval;
  var defaultRestTimeInt = 5*oneMinute;
  var restTimeDisplay = defaultRestTimeInt / oneMinute;
  var workTimeDisplay = defaultTimeInt /oneMinute;
  var defaultTimeInt = 25*oneMinute;
  var adjustedRestTime = defaultRestTimeInt;
  var adjustedWorkTime = defaultTimeInt;
  $('#restDigits').html(defaultRestTimeInt/oneMinute + ' Mins');
  
  $('#addRest').on('click', function(){
    adjustedRestTime += oneMinute;
    $('#restDigits').html(adjustedRestTime/oneMinute + ' Mins');
  });
  
  $('#subRest').on('click', function(){
    adjustedRestTime -= oneMinute;
    $('#restDigits').html(adjustedRestTime/oneMinute + ' Mins');
  });

  $('#addWork').on('click', function(){
    adjustedWorkTime += oneMinute;
    if(adjustedWorkTime/oneMinute === 60){
      alert("The maximum session length is 60 minutes.");
      adjustedWorkTime = 60*oneMinute;
    }
    $('#workDigits').html(adjustedWorkTime/oneMinute + ' Mins');
    console.log(adjustedWorkTime / oneMinute);

  });
  
  $('#subWork').on('click', function(){
    adjustedWorkTime -= oneMinute;
    $('#workDigits').html(adjustedWorkTime/oneMinute + ' Mins');
    console.log(adjustedWorkTime / oneMinute);
  });

  
  
}); //end ready
