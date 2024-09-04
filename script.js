//your JS code here. If required.
function showAlert() {
  
    const firstName = document.getElementById('FirstName').value;
    const lastName = document.getElementById('LastName').value;
    const phoneNumber = document.getElementById('PhoneNumber').value;
    const email = document.getElementById('EmailID').value;

  
    const alertMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nEmail ID: ${email}`;

   
    alert(alertMessage);
}