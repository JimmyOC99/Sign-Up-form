function check_form() {

    var pw1 = document.getElementById("user_password").value;
    var pw2 = document.getElementById("confirm_password").value;
    var first = document.getElementById("first-name").value;
    var last = document.getElementById("last-name").value;

    // Check first name //
    if(first == ""){
        document.getElementById("update_message").innerHTML ="*Fill the first name";
        //document.getElementById("first-name").className = document.getElementById("first-name").className + " error";
        return false;
    }
    if(!isNaN(first)){
        document.getElementById("update_message").innerHTML ="*Only characters allowed";
        //document.getElementById("first-name").className = document.getElementById("first-name").className + " error";
        return false;
    }

    // Check last name //
    if(last == ""){
        document.getElementById("update_message").innerHTML ="*Fill the last name";
        //document.getElementById("last-name").className = document.getElementById("last-name").className + " error";
        return false;
    }
    if(!isNaN(last)){
        document.getElementById("update_message").innerHTML ="*Only characters allowed";
        //document.getElementById("last-name").className = document.getElementById("last-name").className + " error";
        return false;
    }
    
    // Check empty pw fields
    if(pw1 == ""){
        document.getElementById("update_message").innerHTML = "*Fill the password please!"; 
        //document.getElementById("user_password").className = document.getElementById("user_password").className + " error";
        return false;
    }
    if(pw2 == ""){
        document.getElementById("update_message").innerHTML = "Confirm password"; 
        //document.getElementById("confirm_password").className = document.getElementById("confirm_password").className + " error";
        return false;
    }

    // Password validation //
    if(pw1.length < 5){
        document.getElementById("update_message").innerHTML = '*Password length must be atleast 5 characters';
        //document.getElementById("user_password").className = document.getElementById("user_password").className + " error";
        return false;
    }

    if(pw1.length > 10) {
        document.getElementById("update_message").innerHTML = '*Password must not exceed 10 characters';
        //document.getElementById("user_password").className = document.getElementById("user_password").className + " error";
        return false;
    }

    if(pw1 != pw2){
        document.getElementById("update_message").innerHTML = 'Passwords do not match';
        //document.getElementById("user_password").className = document.getElementById("user_password").className + " error";
        //document.getElementById("confirm_password").className = document.getElementById("confirm_password").className + " error";
        return false;
    }

    else {
        document.getElementById("update_message").style.color = 'Green';
        document.getElementById("update_message").innerHTML = 'Password created successfully';
    }
}

function clearinput() {
    document.getElementById("update_message").innerHTML = ""
    document.getElementById("update_message").style.color = 'Red';
}


function updateMessage() {
    clearinput()
    var contact = document.getElementById("contact-form");
    contact.style.height = '35vh';
    check_form();
}