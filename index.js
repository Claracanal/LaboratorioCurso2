function checkForm() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirm = document.getElementById("confirmPassword");
    var emptyErrorMessage = "Rellene este campo";
    var errorName=document.getElementById("errorName");
    var errorEmail= document.getElementById("errorEmail");
    var errorPassword=document.getElementById("errorPassword");
    var errorConfirm=document.getElementById("errorConfirm");
    var allright=true;

    if (name.value.length===0) {
        errorName.style.display="block";
        name.style.borderColor="red";
        name.style.background="url('./images/error-icon.svg') no-repeat 11px 11px";
        name.style.backgroundPosition="210px center";
        name.style.backgroundColor="white";
        errorName.innerHTML= emptyErrorMessage;
        allright=false;
    }
    else {
        errorName.style.display="none";
        name.style.borderColor="green";
        name.style.background="url('./images/success-icon.svg') no-repeat 11px 11px";
        name.style.backgroundPosition="210px center";
        name.style.backgroundColor="white";

    }
    if (email.value.length===0) {
        errorEmail.style.display="block";
        email.style.borderColor="red";
        email.style.background="url('./images/error-icon.svg') no-repeat 11px 11px";
        email.style.backgroundPosition="210px center";
        email.style.backgroundColor="white";
        errorEmail.innerHTML= emptyErrorMessage;
        allright=false;
    }
    else {
        errorEmail.style.display="none";
        var patternEmail="[A-Za-z0-9]+@[A-Za-z0-9]+(\\.[A-Za-z]+)+";
        var emailRegex=new RegExp(patternEmail);
        email.style.borderColor="green";
        email.style.background="url('./images/success-icon.svg') no-repeat 11px 11px";
        email.style.backgroundPosition="210px center";
        email.style.backgroundColor="white";
    
        if (!emailRegex.test(email.value)) {
            errorEmail.style.display="block";
            email.style.borderColor="red";
            errorEmail.innerHTML= "Email inválido";
            email.style.background="url('./images/error-icon.svg') no-repeat 11px 11px";
            email.style.backgroundPosition="210px center";
            email.style.backgroundColor="white";
            allright=false;
        }
    }
    if (password.value.length===0) {
        errorPassword.style.display="block";
        errorPassword.innerHTML= emptyErrorMessage;
        password.style.borderColor="red";
        password.style.background="url('./images/error-icon.svg') no-repeat 11px 11px";
        password.style.backgroundPosition="210px center";
        password.style.backgroundColor="white";   
        allright=false;
    }
    else {
        errorPassword.style.display="none"; 
        password.style.borderColor="green";
        password.style.background="url('./images/success-icon.svg') no-repeat 11px 11px";
        password.style.backgroundPosition="210px center";
        password.style.backgroundColor="white";   
        if (password.value.length<8) {
            errorPassword.style.display="block";
            errorPassword.innerHTML= "Debe tener al menos 8 caracteres";
            password.style.borderColor="red";
            password.style.background="url('./images/error-icon.svg') no-repeat 11px 11px";
            password.style.backgroundPosition="210px center";
            password.style.backgroundColor="white";
            allright=false;   

        }
    }
    if (confirm.value.length===0) {
        errorConfirm.style.display="block";
        errorConfirm.innerHTML= emptyErrorMessage; 
        confirm.style.borderColor="red";
        confirm.style.background="url('./images/error-icon.svg') no-repeat 11px 11px";
        confirm.style.backgroundPosition="210px center";
        confirm.style.backgroundColor="white";  
        allright=false;  
    }
    else {
        errorConfirm.style.display="none"; 
        confirm.style.borderColor="green"; 
        confirm.style.background="url('./images/success-icon.svg') no-repeat 11px 11px";
        confirm.style.backgroundPosition="210px center";
        confirm.style.backgroundColor="white";  
        if (confirm.value!==password.value){
            errorConfirm.style.display="block";
            errorConfirm.innerHTML= "Las contraseñas no coinciden";
            confirm.style.borderColor="red"; 
            confirm.style.background="url('./images/error-icon.svg') no-repeat 11px 11px";
            confirm.style.backgroundPosition="210px center";
            confirm.style.backgroundColor="white"; 
            allright=false;
        }

    }
    
    if(allright===true){   
        window.alert("Registro correcto");
    }    
}


