window.addEventListener("load", () => {
  let form = document.querySelector(".form");
  let errorsHtml = document.querySelector(".errores");

  form.addEventListener("submit", (event) => {
    let errors = [];

    /* nombre */
    if (form.name.value == "") {
      errors.push("El nombre está vacio");
      form.name.classList.remove("is-valid");
      form.name.classList.add("is-invalid");
    } else if (form.name.value.length < 4) {
      errors.push("El nombre debe tener al menos 4 caracteres");
      form.name.classList.remove("is-valid");
      form.name.classList.add("is-invalid");
    } else {
      form.name.classList.remove("is-invalid");
      form.name.classList.add("is-valid");
    }
    /* apellido */
    if (form.lastName.value == "") {
      errors.push("El apellido está vacio");
      form.lastName.classList.remove("is-valid");
      form.lastName.classList.add("is-invalid");
    } else if (form.lastName.value.length < 4) {
      errors.push("El apellido debe tener al menos 4 caracteres");
      form.lastName.classList.remove("is-valid");
      form.lastName.classList.add("is-invalid");
    } else {
      form.lastName.classList.remove("is-invalid");
      form.lastName.classList.add("is-valid");
    }

    /* contraseña */
    if (form.password.value == "") {
      errors.push("La contraseña está vacia");
      form.password.classList.remove("is-valid");
      form.password.classList.add("is-invalid");
    } else {
      form.password.classList.remove("is-invalid");
      form.password.classList.add("is-valid");
    }


    /*  email */
    
    let regEmail = /\S+@\S+\.\S+/;
    if (!regEmail.test(form.email.value)) {
      errors.push("Debe ingresar un email válido");
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
    } else {
      email.classList.add("is-valid");
      email.classList.remove("is-invalid");
      form.password.focus();
    }

    /*  checkeo de errores en consola */

     console.log(errors); 
    if (errors.length > 0) {
      event.preventDefault();
      errorsHtml.innerHTML = "";
      errors.forEach((error) => {
        errorsHtml.innerHTML += "<li>" + error + "</li>";
      });
    } else {
      errorsHtml.innerHTML = "";
      form.submit();
    }
  });
});
