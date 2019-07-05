offset = 60;
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - offset
        }, 500);
    }
});

var background_image_parallax = function($object, offset){
  multiplier = -.25;
  var $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});
    $(window).scroll(function(){
      var from_top = $doc.scrollTop(),
          bg_css = '0px ' + (multiplier * from_top + offset) + 'px';
      $object.css({"background-position" : bg_css });
  });
};

background_image_parallax($(".parallax-1"), 0);
background_image_parallax($(".parallax-2"), 200);
background_image_parallax($(".parallax-3"), 0);
background_image_parallax($(".parallax-4"), 0);
background_image_parallax($(".parallax-5"), 200);
