function credentials(){
    this.username = "admin";
    this.password = "1234";

    this.creadential_validate = function(input_username, input_password){

        if(this.username == input_username && this.password == input_password){
            return true;
        }
        else{
            return false;
        }

    };

}

function result_display(result){
    if(result == true){
        alert("login successful");
    }
    else{
        alert("login failed");
        document.getElementById("user").value = "";
        document.getElementById("pass").value = "";
    }
}




function submitForm(){
    var username = document.getElementById("user");
    var password = document.getElementById("pass");

    var valid = false;

    var credential_obj = new credentials();

    if(credential_obj.creadential_validate(username.value, password.value)){
        valid = true;
    }

    result_display(valid);



}