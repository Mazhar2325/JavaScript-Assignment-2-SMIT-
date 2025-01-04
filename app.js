// Chapter # 8 String Concatenate
document.getElementById("concatenteSomeString").onclick = function () {
    let message = "Good day";
    let firstName = "Mazhar";
    let lastName = "Mehmood";
    let banger = "!";
    alert(message + " " + firstName + " " + lastName + banger);
    // document.getElementById("statement").innerHTML = result;
    // document.getElementById("output").innerHTML = result;
}

//Chapter # 9-10 prompts and if statments
document.getElementById("askNameFromUser").onclick = function () {
    let firstName = prompt("Please enter your first name");
    let lastName = prompt("Please enter your last name");
    let fullName = firstName + " " + lastName;
    console.log("First Name", firstName);
    console.log("Last Name", lastName);
    console.log(firstName + " " + lastName);
    console.log("Full Name",fullName);
}

// Chapter # 11 comparison operators
document.getElementById("comparison").onclick = function () {
    let num1 = +prompt("Enter first number");
    let num2 = +prompt("Enter second number");
    if (num1 > num2) {
        alert("num1 is greater than num2");
    }
    else if(num2 > num1){
        alert("num2 is greater than num1");
    }
    else if(num1 == num2){
        alert("Both numbers are equal");
    }else if(isNaN(num1) && isNaN(num2)){
        alert("Please enter valid numbers");
        return;
    }
    else{
        alert("Invalid input");
        return;
    }
}
// Chapter #12 if...else and else if
document.getElementById("ifElseIf").onclick = function () {
    let num1 = prompt("Enter first number");
    let num2 = prompt("Enter second number");
    if (num1 > num2) {
        alert("num1 is greater than num2");
    }
    else if(num2 > num1){
        alert("num2 is greater than num1");
    }
    else if(num1 == num2){
        alert("Both numbers are equal");
    }else if(isNaN(num1) && isNaN(num2)){
        alert("Please enter valid numbers");
        return;
    }
    else{
        alert("Invalid input");
        return;
    }
}
// Chapter #13 testing set of conditions
document.getElementById("testingSetsOfCondition").onclick = function () {
    let age = prompt("Enter your age");
    let weight = prompt("Enter your weight");
    if (age >= 18 && weight <= 70) {
        alert("You are a smart person");
    }else if(age >= 18 && weight > 70){
        alert("You are a fatty person");
    }
     else {
        alert("You are a baby");
    }
}
// Chapter #14 if statement nested
document.getElementById("ifStatementNested").onclick = function () {
    let age = prompt("Enter your age");
    if (age >= 18) {
        let weight = prompt("Enter your weight");
        if (weight <= 70) {
            alert("You are a smart person");
        } else {
            alert("You are a fatty person");
        }
    } else {
        alert("You are a baby");
    }
}
// login id and password
document.getElementById("login").onclick = function () {
    let loginId = prompt("Enter your login id");
    let password = prompt("Enter your password");

    let originalUserName = "admin";
    let originalUserPassword = "admin";
    if (loginId == originalUserName && password == originalUserPassword) {
        alert("Login successful");
    } else {
        alert("Login failed");
    }
}