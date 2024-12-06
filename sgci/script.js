// Function to handle the payment process
function payWithPaystack() {
    var email = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
    var name = document.getElementById("name").value;

    if (!email || !amount || !name) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Paystack payment setup
    var handler = PaystackPop.setup({
        key: 'pk_test_54d900e90e8208045bfb3f92b004c859df28bf42', // Replace with your Paystack public key
        email: email,
        amount: amount * 100, // Paystack accepts amount in kobo (100 kobo = 1 Naira)
        currency: "NGN",
        ref: 'donation_' + Math.floor((Math.random() * 1000000000) + 1),  // Unique transaction reference
        callback: function(response) {
            // After successful payment, this callback will be executed
            alert("Thank you for your donation! Your transaction was successful.");
            // You can use the response.reference to send the transaction reference to your server for verification
        },
        onClose: function() {
            alert('Transaction was not completed. Please try again.');
        }
    });

    handler.openIframe(); // This will open the Paystack checkout iframe
}
