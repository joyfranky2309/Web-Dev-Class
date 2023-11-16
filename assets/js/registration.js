function goToReg() {
    const inputEmail= document.getElementById("inputEmail").value;
    const inputUserName=document.getElementById("inputUserName").value;
    const inputPassword=document.getElementById("inputPassword").value;
    const user={
        inputEmail:inputEmail,
        inputUserName:inputUserName,
        inputPassword:inputPassword
    }
    const userJSON=JSON.stringify(user);
    localStorage.setItem(inputUserName,userJSON);
    if (userJSON!=null){
        window.alert("registration successful");
    }

}