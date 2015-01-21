$("#budget-range").noUiSlider({
  connect: true,
  behaviour: 'tap',
  start: [ 3000, 10000 ],
  step: 100,
  format: wNumb({
    decimals: 0
  }),
  range: {
    'min': 800,
    'max': 30000
  }
});

var total = '' + $("#budget-range").val()[0] + '\u20AC - ' + $("#budget-range").val()[1] + '\u20AC';
$('#budget').val(total);
$('#budget-range').on({
  slide: function() {
    var total = '' + $("#budget-range").val()[0] + '\u20AC - ' + $("#budget-range").val()[1] + '\u20AC';
    $('#budget').val(total);
  }
})
