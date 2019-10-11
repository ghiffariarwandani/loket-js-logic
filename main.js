
$(document).ready(function () {

  $('#thank-page').hide()

  $(':button[type="submit"]').prop('disabled', true) 

  checker() 
  
  var input = document.querySelector("#phone")
  intlTelInput(input, {
    utilsScript: '.intlTelp/js/utils.js'
  })

  bootstrapValidate(['#nameInput'], 'min:5:Minimal 5 karakter!')
  bootstrapValidate(['#emailInput'], 'email:Email format tidak valid!')
  bootstrapValidate(['#phone'], 'numeric:Hanya boleh angka!')
  bootstrapValidate(['#alamatInput'], 'max:130:Maximal karakter 130!')

});

function checker() {
  const emailValidator = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
  const phoneValidator = /\+?([ -]?\d+)+|\(\d+\)([ -]\d+)/

  $( "#nameInput" ).change(function() {
    if ($('#nameInput').val().length >= 5) {
      $('#fullName').text($('#nameInput').val()) 
      $( "#emailInput" ).change(function() {
        if (emailValidator.test($('#emailInput').val())) {
          $( "#phone" ).change(function() {
            if (phoneValidator.test($('#phone').val())){
              $( "#alamatInput" ).change(function() {
                if ($('#emailInput').val().length <= 130) {
                  $(':button[type="submit"]').prop('disabled', false)
                }
              });
            }
          });
        }
      });
    }
  });
}

function randomString(length, chars) {
  const rString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = '';

  for(let i=0; i<6; i++) {
    let roll = Math.floor(Math.random() * rString.length);  
    result += rString[roll]
  } 
  return result;
}


$('#create-ticket-form').submit(function (e) {
  e.preventDefault()

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500
  })
  
  Toast.fire({
    type: 'success',
    title: 'Successfully!'
  })

  let barcode = randomString()
  $('#invoice').html(`<p>Your invoice: <span style="font-Weight: bold"> ${barcode} <span> <p>`) 

  setTimeout(function() {
    $('#content').hide()
    $('#thank-page').show()
  }, 1500) 

})