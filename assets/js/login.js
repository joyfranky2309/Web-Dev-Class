function log_in() {
    const inputUserName = document.getElementById("inputUserName").value;
    const inputPassword = document.getElementById("inputPassword").value;

    const storedData = localStorage.getItem(inputUserName);

    if (storedData) {
        const userData = JSON.parse(storedData);
        if (userData.inputPassword === inputPassword) {
            
            window.alert("Login successful");
            window.location.replace("Web-Dev-Class/homePage.html");
        } else {
            window.alert("Incorrect password");
        }
        debugger
    } else {
        window.alert("User not found");
    }
}
