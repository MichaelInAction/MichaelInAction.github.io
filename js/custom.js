offset = 60;
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - offset
    }, 500);
  }
});

var background_image_parallax = function($object, align) {
  multiplier = -.25;
  var $doc = $(document);
  $object.css({
    "background-attatchment": "fixed"
  });
  var from_top = $doc.scrollTop(),
    offset_top = $object.position().top,
    bg_css = align + ' ' + (multiplier * (from_top - offset_top)) + 'px';
  $object.css({
    "background-position": bg_css
  });
  $(window).scroll(function() {
    var from_top = $doc.scrollTop(),
      offset_top = $object.position().top,
      bg_css = align + ' ' + (multiplier * (from_top - offset_top)) + 'px';
    $object.css({
      "background-position": bg_css
    });
  });
};

var path = window.location.pathname;
var page = path.split("/").pop();
if (page === "index.html" || page === "") {
  background_image_parallax($(".parallax-1"), 'right');
  background_image_parallax($(".parallax-2"), 'left');
} else if (page === "personal.html") {
  background_image_parallax($(".parallax-3"), 'center');
  background_image_parallax($(".parallax-4"), 'center');
  background_image_parallax($(".parallax-5"), 'left');

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // For Typing Cursor
    // var css = document.createElement("style");
    // css.type = "text/css";
    // css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    // document.body.appendChild(css);
  };
}
