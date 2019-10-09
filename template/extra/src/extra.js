function watchForm () {
    $("#sumbitBtn").on("click", (event) => {
        console.log("hola");
        event.preventDefault();

        let name = document.getElementById("name");
        let lname = document.getElementById("lname");
        let email = document.getElementById("email");
        let password = document.getElementById("password");
        let passwordConf = document.getElementById("passwordConf");
        let country = document.getElementById("country");
        let gender = document.getElementsByName("gender");

        console.log(name.value);

        // checking name
        if (name.value == "") {
            document.getElementById("nameErrorMessage").hidden = false;
        } else {
            document.getElementById("nameErrorMessage").hidden = true;
        }

        // checking lname
        if (lname.value == "") {
            document.getElementById("lnameErrorMessage").hidden = false;
        } else {
            document.getElementById("lnameErrorMessage").hidden = true;
        }

        // checking email
        if (email.value == "") {
            document.getElementById("emailErrorMessage").hidden = false;
        } else {
            document.getElementById("emailErrorMessage").hidden = true;
        }

        // checking password
        if (password.value == "") {
            document.getElementById("passwordErrorMessage").hidden = false;
        } else {
            if (passwordConf.value == "") {
                document.getElementById("passwordConfErrorMessage").textContent = "Por favor de confirmar la contraseña";
                document.getElementById("passwordConfErrorMessage").hidden = false;
            } else {
                if (password.value != passwordConf.value) {
                    document.getElementById("passwordConfErrorMessage").textContent = "Las contraseñas no son iguales";
                    document.getElementById("passwordConfErrorMessage").hidden = false;
                } else {
                    document.getElementById("passwordConfErrorMessage").hidden = true;                    
                }
            }
            document.getElementById("passwordErrorMessage").hidden = true;
        }

        // checking passwordConf
        

        // checking country
        if (country.selectedIndex == "0") {
            document.getElementById("countryErrorMessage").hidden = false;
        } else {
            document.getElementById("countryErrorMessage").hidden = true;
        }

        // checking gender
        if (!gender[0].checked && !gender[1].checked) {
            document.getElementById("genderErrorMessage").hidden = false;
        } else {
            document.getElementById("genderErrorMessage").hidden = true;
        }
    })
}

watchForm();