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

var background_image_parallax = function($object, align){
  multiplier = -.25;
  var $doc = $(document);
  $object.css({"background-attatchment" : "fixed"});
  var from_top = $doc.scrollTop(),
    offset_top = $object.position().top,
    bg_css = align + ' ' + (multiplier * (from_top - offset_top)) + 'px';
  $object.css({"background-position" : bg_css });
    $(window).scroll(function(){
      var from_top = $doc.scrollTop(),
          offset_top = $object.position().top,
          bg_css = align + ' ' + (multiplier * (from_top - offset_top)) + 'px';
      console.log(offset_top + ", " + (from_top - offset_top));
      $object.css({"background-position" : bg_css });
  });
};

var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );
if( page === "index.html" ) {
  background_image_parallax($(".parallax-1"), 'right');
  background_image_parallax($(".parallax-2"), 'left');
}
else if( page === "personal.html" ) {
  background_image_parallax($(".parallax-3"), 'center');
  background_image_parallax($(".parallax-4"), 'center');
  background_image_parallax($(".parallax-5"), 'left');
}
