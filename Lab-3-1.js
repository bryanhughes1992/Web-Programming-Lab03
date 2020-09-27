//######## LAB 3-1 LOGIN ########
//alert("hey");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//====VARIABLES===============

//Username Section
var userName = prompt("Enter Username...", "username");
var password = prompt("Enter your password...", "password");

if (userName === "monkey" && password === "banana") {
    console.log("Login Successful");
    alert(`Weclome back ${userName}`);
} else {
    console.log("Login Fail");
    alert("Invalid Username/Password");
}

//====LOGIC===================

//3. CREATE POPUP BOX FOR USERNAME

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE

//5. CREATE POPUP BOX FOR PASSWORD

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE