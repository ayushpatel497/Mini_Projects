var pass = document.getElementById("password");
var message = document.getElementById("message");
var strength = document.getElementById("strength");

pass.addEventListener("input",()=>{
    if(pass.value.length > 0){
        message.style.display = "block";
    }
    else{
        pass.style.borderColor = "#ccc";
        message.style.display = "none";
    }
    if(pass.value.length > 0 && pass.value.length < 4){
        strength.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        message.style.color = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length<8){
        strength.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        message.style.color = "yellow";
    }
    else if(pass.value.length >= 8){
        strength.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        message.style.color = "#26d730";
    }
})
