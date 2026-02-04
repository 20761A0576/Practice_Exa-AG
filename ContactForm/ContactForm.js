const form = document.getElementById("formvd");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    onSubmit();
});


function nameValidate() {
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("pname").textContent = "Name is required";
        return false;
    } else {
        document.getElementById("pname").textContent = "";
        return true;
    }
}

function useridValidate() {
    let userid = document.getElementById("userid").value.trim();
    if (userid === "") {
        document.getElementById("puserid").textContent = "User ID is required";
        return false;
    } else if (userid.length < 5 || userid.length > 12) {
        document.getElementById("puserid").textContent = "User ID length must be greater than 5 and less than 12";
        return false;
    } else {
        document.getElementById("puserid").textContent = "";
        return true;
    }
}

function emailValidate() {
    let email = document.getElementById("email").value.trim();
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-z0-9-]+\.[a-z]{2,4}$/;
    if (!email.includes("")) {
        document.getElementById("pemail").textContent = "Email is required";
        return false;
    } else if (!email.match(emailRegex)) {
        document.getElementById("pemail").textContent = "Enter a valid email";
        return false;
    } else {
        document.getElementById("pemail").textContent = "";
        return true;
    }
}

function mobileValidate() {
    let mobile = document.getElementById("mobile").value.trim();
    let mobileRegex = /^[6-9]\d{9}$/;
    if (mobile === "") {
        document.getElementById("pmobile").textContent = "Mobile is required";
        return false;
    } else if (mobile.length !== 10) {
        document.getElementById("pmobile").textContent = "Mobile number must be 10 digits";
        return false;
    } else if (!mobile.match(mobileRegex)) {
        document.getElementById("pmobile").textContent = "Mobile number must be start with 6 to 9 and followed 1 to 9";
        return false;
    } else {
        document.getElementById("pmobile").textContent = "";
        return true;
    }
}

function pancardValidate() {
    let pancard = document.getElementById("pancard").value.trim();
    let pancardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (pancard === "") {
        document.getElementById("ppancard").textContent = "PAN Card is required";
        return false;
    } else if (pancard.length !== 10) {
        document.getElementById("ppancard").textContent = "PAN Card must be 10 characters";
        return false;
    } else if (!pancard.match(pancardRegex)) {
        document.getElementById("ppancard").textContent = "PAN Card must be in format";
        return false;
    } else {
        document.getElementById("ppancard").textContent = "";
        return true;
    }
}

function onSubmit() {
    if (nameValidate() && useridValidate() && emailValidate() && mobileValidate() && pancardValidate()) {
        alert("Form submitted successfully!");
        const data = {
            Name: document.getElementById("name").value.trim(),
            UserId: document.getElementById("userid").value.trim(),
            Email: document.getElementById("email").value.trim(),
            Mobile: document.getElementById("mobile").value.trim(),
            PanCard: document.getElementById("pancard").value.trim()
        };
        console.log(data);
        form.reset();
        return true;
    }
}


