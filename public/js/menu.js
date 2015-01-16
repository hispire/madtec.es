$('.sidebar').first().sidebar('attach events', '.menu-button');


$('.menu__link').click(function(e) {
  $('.sidebar').first().sidebar('hide')
  $('.sidebar').first().sidebar('pull page')   
  
});
