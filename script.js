document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("bookingForm");
    const confirmationMessage = document.getElementById("confirmationMessage");
  
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const destination = document.getElementById("destination").value;
  
      if (!name || !email || !destination) {
        alert("Please fill in all the fields.");
        return;
      }
  
      // Assuming we have an API call or a server-side script to handle the booking and sending confirmation email.
      // For this example, we will just show a confirmation message on the page.
      showConfirmationMessage(name, email, destination);
      bookingForm.reset();
    });
  
    function showConfirmationMessage(name, email, destination) {
      const confirmedName = document.getElementById("confirmedName");
      const confirmedEmail = document.getElementById("confirmedEmail");
      const confirmedDestination = document.getElementById("confirmedDestination");
  
      confirmedName.textContent = name;
      confirmedEmail.textContent = email;
      confirmedDestination.textContent = destination;
  
      confirmationMessage.style.display = "block";
    }
  });
  