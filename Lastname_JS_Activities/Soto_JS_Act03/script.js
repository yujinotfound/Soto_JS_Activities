const confirmPassword = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    var newPassword = document.getElementById("newPassword");
    var confirmPassword = document.getElementById("conPassword");

    if (!newPassword.value || !conPassword.value) {
        // Trigger browser validation message
        newPassword.reportValidity();
        confirmPassword.reportValidity();
        event.preventDefault(); // Prevent form submission
    } else if (newPassword.value !== conPassword.value) {
        errorMessage.style.display ="block";
        successMessage.style.display = "none";
        event.preventDefault();
    }else{ 
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
        event.preventDefault();

                
    }
});