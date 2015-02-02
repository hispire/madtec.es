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
/*
var total = '' + $("#budget-range").val()[0] + '\u20AC - ' + $("#budget-range").val()[1] + '\u20AC';
$('#budget').val(total);
$('#budget-range').on({
  slide: function() {
    var total = '' + $("#budget-range").val()[0] + '\u20AC - ' + $("#budget-range").val()[1] + '\u20AC';
    $('#budget').val(total);
  }
})*/

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

function addAttr() {
  $('input, textarea').attr("required", "");
}

function resetParsleyUi () {
  $('input, textarea').removeAttr( "required" )
  document.getElementById("project-form").reset();
  window.setTimeout(addAttr, 100);
}

// Upload files when submit, not automatically
$('#project-form').submit(function (e){
  var form = $(this);
  if(form.parsley().isValid() == true) {
    console.log('form valid');
    if(projectDropzone.getQueuedFiles().length != 0) {
      e.stopPropagation();
      e.preventDefault();
      projectDropzone.processQueue();
      projectDropzone.on('totaluploadprogress', function(res) {
        $('#btnProject').html('Subiendo ' + Math.round(res) + '%');
      });
      projectDropzone.on('completemultiple', function(res) {
        console.log(res);
        $('#btnProject').html(res[0].xhr.response);
        $('#btnProject').addClass("animated fadeInDown");
        $( "<h3 class='animated bounceInLeft pt+'>gracias! contestaremos lo antes posible.</h3>" ).insertAfter( "#btnProject" );
        resetParsleyUi();
      });

    } else {
      e.preventDefault();
      e.stopPropagation();
      projectDropzone.uploadFiles([ ]);
      $('#btnProject').html('Proyecto mandado!');
      $('#btnProject').addClass("animated fadeInDown");
      // TODO remove msg after timeout with fade animation
      $( "<h3 class='animated bounceInLeft pt+'>gracias! contestaremos lo antes posible.</h3>" ).insertAfter( "#btnProject" );
      resetParsleyUi();
    }
  } else {
    console.log('form not valid');
  }
});

