// accordian
var action = "click";
var speed = "500";

$(document).ready(function(){
  // question handler
  $('li.q').on(action, function(){
    // get next element
    $(this).next()
      .slideToggle(speed)
        .siblings('li.a')
          .slideUp();

    // get img in active quesiton
    var img = $(this).children('img');
      // remove rotate class for img except active
      $('img').not(img).removeClass('rotate');
      // toggle rotate class
      img.toggleClass('rotate');
  });
});
