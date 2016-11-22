    var link = document.querySelector(".contacts .contacts-btn");
    var close = document.querySelector(".btn-close");
    var popup = document.querySelector(".feedback");
    var form = popup.querySelector("form");
    var nameField = popup.querySelector("[name=username]");
    var emailField = popup.querySelector("[name=email]");
    var textField = popup.querySelector("[name=mailtext]");
    var storage = localStorage.getItem("nameField");

    link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("feedback-show");

        if (storage) {
            nameField.value = storage;
            emailField.focus();
        } else {
            nameField.focus();
        }
    });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("feedback-show");
        popup.classList.remove("feedback-error");
    });

    form.addEventListener("submit", function(event) {
        if (!nameField.value || !emailField.value || !textField.value) {
            event.preventDefault();            
            popup.classList.remove("feedback-error");
            popup.offsetWidth = popup.offsetWidth;
            popup.classList.add("feedback-error"); 
        } else {
            localStorage.setItem("nameField", nameField.value);
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("feedback-show")) {
                popup.classList.remove("feedback-show");
                popup.classList.remove("feedback-error"); 
            }
        }
    });
