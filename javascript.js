let pass = document.getElementById("signUpPassword").value;
let confPass = document.getElementById("signUpConfirmPassword").value;
let error = document.getElementById("passwordsSame");
let createAccount = document.getElementById("buttonCreate");



createAccount.addEventListener("click", function(event){
    event.preventDefault();
    isItValid();
});



let isItValid = () => { 
    confPass = document.getElementById("signUpConfirmPassword").value;
    pass = document.getElementById("signUpPassword").value;
    if (pass === confPass){
    /* hide error and make border same as rest*/
    error.style.display="none"
    document.getElementById("signUpPassword").style.borderColor = "#E5E7EB";
    document.getElementById("signUpConfirmPassword").style.borderColor = "#E5E7EB";
} else {
    /* unhide error and make border red */
    error.style.display="block";
    document.getElementById("signUpPassword").style.borderColor = "rgb(255, 131, 131)";
    document.getElementById("signUpConfirmPassword").style.borderColor = "rgb(255, 131, 131)";
}
};

