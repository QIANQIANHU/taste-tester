
$(document).ready(function () {
  $(".blanks").submit(function (event) {
     event.preventDefault();

    var flavor1 = $("input:radio[name=flavor1]:checked").val();
    var flavor2 = $("input:radio[name=flavor2]:checked").val();
    var flavor3 = $("input:radio[name=flavor3]:checked").val();

    var result = "";
    if ((flavor1 === "salad") && (flavor2 === "pasta")) {
       result += "you are a dog person";
       alert("dog");
    } else if ((flavor2 === "pasta") && (flavor3 ==="juice")) {
      result += "you are a cat person";
    } else {
      result += "you are a sheep person";
    }

    $("#output").text(result);
  });
});
