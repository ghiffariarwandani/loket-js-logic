$(document).ready(function () {

  $('#thank-page').hide()
  $(':button[type="submit"]').prop('disabled', true); 

  var input = document.querySelector("#phone")
  intlTelInput(input, {
    utilsScript: '.intlTelp/js/utils.js'
  })

  bootstrapValidate(['#nameInput'], 'min:5:Minimal 5 karakter!')
  bootstrapValidate(['#emailInput'], 'email:Email format tidak valid!')
  bootstrapValidate(['#phone'], 'numeric:Hanya boleh angka!')
  bootstrapValidate(['#alamatInput'], 'max:130:Maximal karakter 130!')

});

$('#create-ticket-form').submit(function (e) {

  e.preventDefault()

  const name = $('#nameInput').val()
  const email = $('#emailInput').val()
  const phone = $('#phone').val()
  const address = $('#alamatInput').val()

})