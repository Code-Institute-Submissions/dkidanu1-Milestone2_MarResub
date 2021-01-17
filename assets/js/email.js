
function sendMail(contactForm) {
    console.log("Hello", contactForm)
    emailjs.send("gmail", "greenpark", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
 return false; 
}

