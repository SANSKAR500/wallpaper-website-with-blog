document.addEventListener("DOMContentLoaded", function() {
    var dropdownButton = document.getElementById("dropdownMenuButton");
    var dropdownMenu = document.querySelector(".dropdown-menu");
    var logoutButton = document.getElementById("logoutButton");
    var modal = document.getElementById("logoutModal");
    var closeModal = document.getElementById("closeModal");
    var cancelButton = document.getElementById("cancelButton");

    dropdownButton.addEventListener("click", function() {
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    logoutButton.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
        dropdownMenu.style.display = "none";
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    cancelButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Close dropdown if clicked outside
    window.addEventListener("click", function(event) {
        if (!dropdownButton.contains(event.target)) {
            dropdownMenu.style.display = "none";
        }
    });
});
