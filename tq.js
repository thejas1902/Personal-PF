document.getElementById('responseForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting to a server

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const review = document.getElementById('review').value;

    // You can add validation or any other logic here if needed

    // Hide the form and show the thank you message
    document.getElementById('responseForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});
