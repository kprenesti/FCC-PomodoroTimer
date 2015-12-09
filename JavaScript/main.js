$(document).ready(function(){

  var secondInterval = 1000;
  var oneMinute = 60*secondInterval;
  var defaultRestTimeInt = 5*oneMinute;
  var restTimeDisplay = defaultRestTimeInt / secondInterval;
  function changeRestTime(){
    var displayTime;
    $('#addRest').on('click', function(){
      defaultRestTimeInt += oneMinute;
      displayTime = defaultRestTimeInt / secondInterval;
    });
    $('#subRest').on('click', function(){
      defaultRestTimeInt -= oneMinute;
      displayTime = defaultRestTimeInt / secondInterval;
    });
  }//end changeRestTime

}); //end ready
