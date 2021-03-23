function validate(form){
namevalid = allLetter("name");
surnamevalid = allLetter("surname");
checkBox = myCheck("verify");
if (namevalid && surnamevalid && checkBox) {
sendMail(form);
return false;
}
return false;
}

function allLetter(key){
   var letters = document.getElementById(key);
   if(letters.value.match(/^[A-Za-z]+$/)){
       letters.classList.add("valid");
       return true;
        }
    else {
        letters.classList.add("invalid");
     alert('Please input alphabet characters only');
     return false;
     }
    }

    function myCheck (){
        var checkBox = document.getElementById("verify");
        if (checkBox.checked == false){
        alert('You need to Verify Humanity');
        return false;
        } else { 
        return true;
        }
    }