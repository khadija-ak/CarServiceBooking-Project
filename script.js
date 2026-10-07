// document.addEventListener("DOMContentLoaded", function () {
$(document).ready(function () {
    // const bookBtn = document.getElementById("bookBtn");
    const bookBtn = $("#bookBtn");
    // bookBtn.addEventListener("click", function () {
    bookBtn.click(function () {

        
        // const name = document.getElementById("name").value    
        const name = $("#name").val();
        // const car = document.getElementById("car").value;
        const car = $("#car").val();
        // const service = document.getElementById("service").value;

        
        const service = $("#service").val();
        if (name === "" || car === "" || service === "") {
            // document.getElementById("summary").innerText =
            // "Please fill all the fields.";
            $("#summary").text("Please fill all the fields.");
            return;
        

        }
        // document.getElementById("summary").innerHTML =
        // "Booking Confirmed! " + name + " - " + car + " - " + service;
        $("#summary").html(
            "<strong>Booking Confirmed!</strong><br>" +
            "Name: " + name + "<br>" +
            "Car: " + car + "<br>" +
            "Service: " + service
        );
    });
});
