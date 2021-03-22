function validate(form){
console.log(form)
namevalid = allLetter("name");
surnamevalid = allLetter("surname");
if (namevalid && surnamevalid) {
sendMail(form);
return false
}
return false
};

function allLetter(key){
   var letters = document.getElementById(key);
   if(letters.value.match(/^[A-Za-z]+$/)){
       letters.classList.add("valid");
       return true;
        }
    else {
        letters.classList.add("invalid") 
     alert('Please input alphabet characters only');
     return false;
     }
    }
