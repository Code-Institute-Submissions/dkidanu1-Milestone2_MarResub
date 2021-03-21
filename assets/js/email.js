
function sendMail(contactForm) {
    ("Hello", contactForm);
    emailjs.send("gmail", "greenpark", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            ("SUCCESS", response.status, response.text);
            alert("Thank you for submitting. We will take care of you as soon as possible.");
            contactForm.reset();
        },
       
        function(error) {
            ("Something went wrong with your request. Please try again", error);
        },
       
    );
 return false; 
}


