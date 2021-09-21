function redirect_san(){
    let password_san = document.getElementById('p-sanskriti').value
    let p_sans = "apocalypse"
    
    if(password_san == p_sans){
        window.location.href = "../html/in.html"
    }
    else{
        document.getElementById('wrong').innerHTML = "Wrong password"
    }
    }
    

