function register(){
    uname=reg_uname.value
    email=reg_email.value
    pswd=reg_pswd.value

    console.log(uname,email,pswd);

    accountDetails={
        uname,
        email,
        pswd,
        balance:0
    }

    if(uname in localStorage){
        alert("User already registered")
    }
    else{
        localStorage.setItem(uname,JSON.stringify(accountDetails))
        alert("Registration successfull")

        window.location="./index.html"
    }
}


function login(){
   
    uname=login_uname.value
    pswd=login_pass.value
    console.log(uname,pswd);
    
    //check if the account number is present in localstorage
    if(uname in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(uname))
        if(pswd==accountDetails.pswd){
            alert("Login successfull")
            window.location='./home.html'
        }else{
            alert("Incorrect password")
        }
    }
    else{
        alert("Invalid account number")
    }
    
    
        //  Redirect to home
        
}
