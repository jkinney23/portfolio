$.support.cors = true;
$('#contact-form').submit(function(event){
  event.preventDefault(); 
  var data = {
    "name": $('#name').val(),                 
    "email": $('#email').val(),
    "subject": $('#subject').val(),
    "message": $('#message').val(),
    "g-recaptcha-response":  $("#g-recaptcha-response").val()
  }
  if (data['g-recaptcha-response'].length == 0) {
    alert('Please Confirm You Are a Human.');
    return false;
  }
  else {
    $.ajax({
      type: 'POST',
      url: 'https://mif71alpj2.execute-api.eu-west-1.amazonaws.com/email',                 
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify(data),
      error: function(obj, msg, exc){
      alert('Form Submission Failed.');
      },
      success: function(data){
      $('.contact-content').fadeOut(200);
      $('.submitted')
        .stop(true, false)
        .animate({
          height:"toggle",
          opacity:"toggle"
        }, 500);                      
      }
    })
  }
});