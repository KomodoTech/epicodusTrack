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

    // Create 5x3 Matrix to store answers in
    var answerMatrix = new Array(5); // Questions
    for (var index = 0; index < 5; index++){
      answerMatrix[index] = new Array(3); // Answer Options
    }


    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 3; j++) {
        answerMatrix[i][j] = parseInt(getAnswer(i + 1));
      }
    }

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 3; j++) {
        console.log(answerMatrix[i][j]);
      }
    }

  });

  var getAnswer = function(qNum) {
    var answer = 0;
    var questionName="q"+qNum+"Input";
    var checked = $("input:radio[name=" + questionName + "]").is(":checked");
    if (checked) {
      answer = 1;
    }
    return answer;
  };
});
