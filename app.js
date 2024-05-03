const email = document.getElementById("email");
const eror = document.getElementById("eror");
const wrapper1 = document.getElementById("wrapper1")
const wrapper2 = document.getElementById("wrapper2")
const mailMassage = document.getElementById("mail-message");

function submit(){
    if(email.value == ""){
        eror.innerHTML = "Valid email required";
        email.style.border = "1px solid red";
    } else{
        wrapper1.style.display = "none";
        wrapper2.style.display = "flex";
        mailMassage.innerHTML = email.value;
    }
}


function goBack(){
    if(wrapper2.style.display == "flex"){
        wrapper2.style.display = "none";
        wrapper1.style.display = "flex";
    }else{
        wrapper2.style.display = "none";
        wrapper1.style.display = "flex";
    }
}