$(document).ready(function(){
  $("#load_advance").click(function(){
    $("#main").empty();
    $("#main_adv").load("advance_search.html");
  });
});
