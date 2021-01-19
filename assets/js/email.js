
function sendMail(contactForm) {
    console.log("Hello", contactForm);
    emailjs.send("gmail", "greenpark", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response.status, response.text);
            alert("Thank you for submitting. We will take care of you as soon as possible.");
            contactForm.reset();
        },
       
        function(error) {
            console.log("Something went wrong with your request. Please try again", error);
        },
       
    );
 return false; 
}


