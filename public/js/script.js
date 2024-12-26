var musicClearBtn = new Audio("https://www.soundjay.com/buttons/sounds/button-24.mp3");
function clearAllFields(){
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("mob").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";
    document.getElementById("fname").focus();
}

document.getElementById("btnclear").addEventListener('click', function()
{
        musicClearBtn.play();
        clearAllFields();
});

function loadCursor()
{
    document.getElementById("fname").focus();
}


// Validate phone number function
function validatePhoneNumber() {
    // Get and trim phone number input
    const phoneNumber = document.getElementById('mob').value.trim();

    // Regex pattern for 10-digit phone number
    const pattern = /^\d{10}$/;

    // Validate phone number and update message
    const isValid = pattern.test(phoneNumber);
    // document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';
    if(!isValid){
        alert('Please enter a valid 10-digit phone number');
      
        document.getElementById("mob").value = "";
        
    }
   
    // Return validation status
    return isValid;
    
}

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
document.getElementById("mob").addEventListener('change', function(){
    validatePhoneNumber();
    
});

function validateEmail(emailField){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) 
    {
        alert('Invalid Email Address');
        return false;
    }

    return true;

}

document.getElementById("fname").addEventListener('focus', function(){
    musicClearBtn.play();
});

document.getElementById("lname").addEventListener('focus', function(){
    musicClearBtn.play();
});

document.getElementById("mob").addEventListener('focus', function(){
    musicClearBtn.play();
});
document.getElementById("email").addEventListener('focus', function(){
    musicClearBtn.play();
});
document.getElementById("msg").addEventListener('focus', function(){
    musicClearBtn.play();
});