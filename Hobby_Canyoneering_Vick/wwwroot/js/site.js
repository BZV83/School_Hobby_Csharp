// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function calculateTotal() {
    var hours = $('#numHours').val();
    var totalPrice = 0;
    var OutputText = '';

    if (hours < 0) {
        alert('Invalid Input. Enter a positive number.')
    }
    else {
        totalPrice = hours * 35;
    }

    totalPrice = Math.round(totalPrice, 2);

    OutputText = "Your total expected price is $" + totalPrice.toString() + ".";

    $('#output').html(OutputText);
}