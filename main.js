$(document).ready(function(){
    
    $("form").submit(function(e){
        
        e.preventDefault();
        $(".error").remove(); 

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let texta = $("#textarea").val().trim();
        let valid = true;

        if(name === ""){
            $("#name").after('<small class="error text-danger">Name is required.</small>');
            valid = false;
        }

        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            $("#email").after('<small class="error text-danger">Email is required.</small>');
            valid = false;
        } else if (!emailRegex.test(email)) {
            $("#email").after('<small class="error text-danger">Enter a valid email.</small>');
            valid = false;
        }

        if(texta === ""){
            $("#textarea").after('<small class="error text-danger">Messege is required.</small>');
            valid = false;
        }

        if(valid){
            let modal = new bootstrap.Modal(document.getElementById('successModal'));
            modal.show();

            $("form")[0].reset();
        }

    });
});