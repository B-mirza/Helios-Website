window.onload = function() {
    document.getElementById("submitButton").onclick = submitForm;
};

function submitForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    alert("Your message has been sent to Helios");
}