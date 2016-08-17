jQuery(document).ready(function(){

  $("#surveyQuestion").submit(function(event) {
    event.preventDefault();

    //debugger;

    // var answer1 = $("input:radio[name=q1Input]:checked").val();
    // var answer2 = $("input:radio[name=q2Input]:checked").val();
    // var answer3 = $("input:radio[name=q3Input]:checked").val();
    // var answer4 = $("input:radio[name=q4Input]:checked").val();
    // var answer5 = $("input:radio[name=q5Input]:checked").val();

    // console.log(answer1 + " " + answer2 + " " + answer3 + " " + answer4 + " " + answer5);



    // CHECK IF ALL QUESTIONS WERE ANSWERED
    var checkedLen = $(".radOpt:checked").length;
    var allLen = $(".radOpt").length;
    var numOfQuestions = $(".radio").length;
    var numOfOptions = $("input:radio").length / numOfQuestions;
    console.log(checkedLen + " " + allLen);

    if (checkedLen === (allLen / numOfOptions)) {

      // Create 5x3 Matrix to store answers in
      var answerMatrix = new Array(numOfQuestions); // Questions
      for (var index = 0; index < numOfQuestions; index++){
        answerMatrix[index] = new Array(numOfOptions); // Answer Options
      }

      for (var i = 0; i < numOfQuestions; i++) {
        for (var j = 0; j < numOfOptions; j++) {
            answerMatrix[i][j] = parseInt(getAnswer((i + 1),(j + 1)));
        }
      }

      // SUM MATRIX OVER COLUMNS

      var maxSum = 0;
      var maxColumn = 0;

      for (var j = 0; j < numOfOptions; j++) { // Column
        var currentSum = 0;
        for (var i = 0; i < numOfQuestions; i++) { // Row aka Question
          // console.log(answerMatrix[i][j]);
          currentSum += answerMatrix[i][j];
        }

        if (currentSum > maxSum) {
          maxSum = currentSum;
          maxColumn = j;
        }
        else if (currentSum == maxSum) {
          // alert("tie");
        }
      }

      var trackNum = maxColumn + 1;
      console.log("the option with the most checks is option" + trackNum);
      console.log("option"+ trackNum + " has " + maxSum + " checks");

      showTrack(trackNum);
    }

   else {
      alert("Please take this survey seriously");
    }

  });





  // NOTE: In order for radio buttons to work as expected (one selection allowed
  // at a time), each button in a given group has to have the same name.

  var getAnswer = function(qNum, aNum) {
    var answer = 0;

    var questionName= "q" + qNum;
    var questionValue = "q" + qNum + "_option" + aNum;

    var checked = $("input:radio[name=" + questionName + "]").is(":checked");
    var correctVal = ($("input:radio[name=" + questionName + "]:checked").val() === questionValue);

    if (checked) {
      if (correctVal) {
        answer = 1;
      }
    }

    return answer;
  }

  // Option 1: PHP/Drupal
  // Option 2: Java/Android
  // Option 3: C#/.Net
  var showTrack = function(winningTrack) {

    console.log(winningTrack);

    switch (true) {
      case (winningTrack === 1):
        $("#trackRecommendation div.row").hide();
        $("#pD").show();
        break;

      case (winningTrack === 2):
        $("#trackRecommendation div.row").hide();
        $("#jA").show();
        break;

      case (winningTrack === 3):
        $("#trackRecommendation div.row").hide();
        $("#cN").show();
        break;

      default:
        alert("track number invalid!");
    }
  }


});
