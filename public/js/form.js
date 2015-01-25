// Overwrite nouislider defaults
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

// Show budget range values in #budget input
var total = '' + $("#budget-range").val()[0] + '\u20AC - ' + $("#budget-range").val()[1] + '\u20AC';
$('#budget').val(total);
$('#budget-range').on({
  slide: function() {
    var total = '' + $("#budget-range").val()[0] + '\u20AC - ' + $("#budget-range").val()[1] + '\u20AC';
    $('#budget').val(total);
  }
})

// Overwrite Parsley defaults
window.ParsleyConfig = {
  errorClass: 'field-error',
  successClass: 'field-success',
  errorsWrapper: '<div class="error"></div>',
  errorTemplate: '<span></span>'
};


// Dropzone config
Dropzone.autoDiscover = false;
var projectDropzone = new Dropzone("form#project-form", 
  {
    paramName: "file",
    maxFilesize: 3,
    uploadMultiple: true,
    parallelUploads: 100,
    maxFiles: 10,
    clickable: '#dropzonePreview',
    addRemoveLinks: true,
    previewsContainer: '#dropzonePreview',
    autoProcessQueue: false,

    init: function() {
      projectDropzone = this;
    }
  });

// Upload files when submit, not automatically
$('#project-form').submit(function (){
  if($('#project-form').parsley().isValid() == true) {
    console.log('form valid');
    projectDropzone.processQueue();
  } else {
    console.log('form not valid');
  }
});

