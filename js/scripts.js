$(document).ready(function () {
  $("#mouseclick").click(function() {
    $("body").toggleClass("texture")
    $(".img-names").toggleClass("texture")
  })
  $(".des").click(function () {
    $("#des-icon").toggle();
    $("#des-text").toggle();
  })
  $(".dev").click(function () {
    $("#dev-icon").toggle();
    $("#dev-text").toggle();
  })
  $(".prod").click(function () {
    $("#prod-icon").toggle();
    $("#prod-text").toggle();
  })
  $("#grey-picture").hover(function () {
    $("#grey").toggle();
  })
  $("#mighty-ontario").hover(function () {
    $("#mighty").toggle();
  })
  $("#orange-thingy").hover(function () {
    $("#orange").toggle();
  })
  $("#jim-carrey").hover(function () {
    $("#jim").toggle();
  })
  $("#elena-blog").hover(function () {
    $("#elena").toggle();
  })
  $("#button-button").hover(function () {
    $("#button").toggle();
  })
  $("#burned").hover(function () {
    $("#burn").toggle();
  })
  $("#giraffe-restaurant").hover(function () {
    $("#giraffe").toggle();
  });
  $("#contactus textarea").keypress(function (e) {
    if (e.which == 13) {
      $('form').submit();
    }
  });
  $("form").submit(function () {
    alert("Thank you for your message.");
  });
});