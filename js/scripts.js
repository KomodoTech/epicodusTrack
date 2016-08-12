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
      var answerMatrix = new Array(5); // Questions
      for (var index = 0; index < 5; index++){
        answerMatrix[index] = new Array(3); // Answer Options
      }

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 3; j++) {
            answerMatrix[i][j] = parseInt(getAnswer((i + 1),(j + 1) ));
        }
      }

      // SUM MATRIX OVER COLUMNS

      var maxSum = 0;
      var maxColumn = 0;

      for (var j = 0; j < 3; j++) { // Column
        var currentSum = 0;
        for (var i = 0; i < 5; i++) { // Row aka Question
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








  var getAnswer = function(qNum, aNum) {
    var answer = 0;
    var questionName="q"+qNum+"a"+aNum;
    var checked = $("input:radio[name=" + questionName + "]").is(":checked");
    if (checked) {
      answer = 1;
    }

    return answer;
  }


  var showTrack =  function(winningTrack) {
    $("#trackRecommendation").text("You should try track " + winningTrack);
  }
});
