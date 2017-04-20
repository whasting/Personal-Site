const Trainglify =
  require('https://cdnjs.cloudflare.com/ajax/libs/trianglify/0.4.0/trianglify.min.js')

$('ul.hamburger-dropdown').on('click', () => {
  if ($('ul.hamburger-dropdown li.dropdown').css('display') !== 'flex') {
    $('ul.hamburger-dropdown li.dropdown').css('display', 'flex');
  } else {
    $('ul.hamburger-dropdown li.dropdown').css('display', 'none');
  }
});

$(window).on('resize', () => {
  $('canvas').remove();
  var pattern = Trianglify({
      width: $( window ).width(),
      height: window.innerHeight,
      variance: 0
  });
  document.body.prependChild(pattern.canvas());
});
