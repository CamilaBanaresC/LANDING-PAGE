document.getElementById("name").addEventListener("blur", (e) => {
    const input = e.currentTarget;
    const txtNombre = input.value;

    const feedbackNombre = document.getElementById("feedback-name");

    if(txtNombre.length <3){
        feedbackNombre.innerHTML ="El nombre es muy cortito.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackNombre.className = "invalid-feedback";
    } else {

    feedbackNombre.innerHTML = "El nombre esta super";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackNombre.className = "valid-feedback";
    }    
});

document.getElementById("email").addEventListener("blur", (e) => {
    const input = e.currentTarget;
    const txtEmail = input.value;

    const feedbackEmail = document.getElementById("feedback-email");

    if(txtEmail.length == 0){
        feedbackEmail.innerHTML ="El email es muy cortito.";
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        feedbackEmail.className = "invalid-feedback";
    } else {

    feedbackEmail.innerHTML = "El email esta super";
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    feedbackEmail.className = "valid-feedback";
    }
});

