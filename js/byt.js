document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var guests = document.getElementById('guests').value;
  
    // Here, you can perform further validation or send the booking details to the server
  
    alert('Table booked successfully!');
    // You can redirect to another page or perform any other action after successful booking
  });
  