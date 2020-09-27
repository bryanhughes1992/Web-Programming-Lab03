//######## LAB 3-3 EMAIL SIGNUP ########
//alert("hey 3-3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var tempEmail = "me@example.com";
var userEmail;
var declineMessage = "Thank you, we will not bother you again";
var invalidEmail = "Thank you, but your email was not valid";
var userInput = confirm("Would you like to join our mailing list?");
//==== LOGIC =============
if (userInput) {
    userEmail = prompt("Please, provide your email.", tempEmail);
    if (userEmail === "" || userEmail === "me@example.com" || !userEmail) {
        alert(invalidEmail);
    } else {
        var acceptMessage = "Thank you, our newsletter will be sent to" + " " + `${userEmail}`;
        alert(acceptMessage);
    }
} else {
    alert(declineMessage);
}