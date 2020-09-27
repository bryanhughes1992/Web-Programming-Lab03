//######## LAB 3-2 FILE DELETE CONFIRMATION ########
//alert("hey 3.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES ========
var userChoice;
var yesMessage = "been successfully deleted.";
var noMessage = "not been altered.";
var messageOut = "Thank you, your file has ";

userChoice = confirm("Do you want to delete the file?");

if (userChoice) {
    alert(messageOut + yesMessage);
    console.log("File Deleted");
} else {
    alert(messageOut + noMessage);
    console.log("File Not Deleted");
}

//==== LOGIC ========

//1. CREATE POPUP TO ASK FOR PERMISSION TO PROCEED WITH DELETION OF FILE

//2. IF USER CLICKS OKAY SET MESSAGE TO YES


//3. IF USER CLICKS ANYTHING BUT OKAY, SET MESSAGE TO NO


//4. SEND FINAL MESSAGE TO USER