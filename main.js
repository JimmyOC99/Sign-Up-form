function check_form() {

    var pw1 = document.getElementById("user_password").value;
    var pw2 = document.getElementById("confirm_password").value;
    var first = document.getElementById("first-name").value;
    var last = document.getElementById("last-name").value;

    // Check first name //
    if(first == ""){
        document.getElementById("update_message").innerHTML ="**Fill the first name";
        return false;
    }
    if(!isNaN(first)){
        document.getElementById("update_message").innerHTML ="**Only characters allowed";
        return false;
    }

    // Check last name //
    if(last == ""){
        document.getElementById("update_message").innerHTML ="**Fill the last name";
        return false;
    }
    if(!isNaN(last)){
        document.getElementById("update_message").innerHTML ="**Only characters allowed";
        return false;
    }
    
    // Check empty pw fields
    if(pw1 == ""){
        document.getElementById("update_message").innerHTML = "**Fill the password please!"; 
        return false;
    }
    if(pw2 == ""){
        document.getElementById("update_message").innerHTML = "Confirm password"; 
        return false;
    }

    // Password validation //
    if(pw1.length < 5){
        document.getElementById("update_message").innerHTML = '**Password length must be atleast 5 characters';
        return false;
    }

    if(pw1.length > 10) {
        document.getElementById("update_message").innerHTML = '**Password must not exceed 10 characters';
        return false;
    }

    if(pw1 != pw2){
        document.getElementById("update_message").innerHTML = 'Passwords do not match';
        return false;
    }

    else {
        document.getElementById("update_message").style.color = 'Green';
        document.getElementById("update_message").innerHTML = 'Password created successfully';
    }
}



function updateMessage() {
    var contact = document.getElementById("contact-form");
    contact.style.height = '35vh';
    check_form();
}