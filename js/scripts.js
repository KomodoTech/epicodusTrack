jQuery(document).ready(function(){

  $("#surveyQuestion").submit(function(event) {
    event.preventDefault();

    var answer1 = $("input:radio[name=q1Input]:checked").val();
    console.log(answer1);

  });

});
