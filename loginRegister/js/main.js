$(document).ready(function () {
    $("#re_pass").on('keyup', function(){
     var password = $("#pass").val();
     var confirmPassword = $("#re_pass").val();
     if (password != confirmPassword) {
         $("#CheckPasswordMatch").html("Password does not match !").css("color","red");
          }
         else{
             $("#CheckPasswordMatch").html("Password match !").css("color","green");
            }});
 
            $('#signup').click(function(){
                let name = $('#name').val();
                let email = $('#email').val();
                if (name == '' || email == '' || name == null || email == null) {
                    alert('Please fill all fields');
                    return false;
                }
                
                
                var password = $("#pass").val();
                var confirmPassword = $("#re_pass").val();
                if (password != confirmPassword) {
                    alert("Password does not match.");
                    return false;
                }
                return true;
            
            });
 
        });