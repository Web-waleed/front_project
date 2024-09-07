
var colorCircles = document.getElementsByClassName('color-circle');
var toggleButton = document.getElementById('toggleButton');
var colorPalette = document.getElementById('colorPalette');
toggleButton.addEventListener('click', () => {
    if (colorPalette.style.display === "grid") {
        colorPalette.style.display = "none";
    } else {
        colorPalette.style.display = "grid";
    }
});
        for (let i = 0; i < colorCircles.length; i++) {
            colorCircles[i].addEventListener('click', () => {
                
                const color = getComputedStyle(colorCircles[i]).backgroundColor;
                document.body.style.backgroundColor = color;
                localStorage.setItem('backgroundColor', color);
            });
        }

        
        const savedColor = localStorage.getItem('fontSelect');
        if (savedColor) {
            document.body.style.backgroundColor = savedColor;
        }
        
// Validation functions
var validatePhone = (phone) => {
    return /^07\d{8}$/.test(phone);
};

var validatePassword = (password) => {
    return /[A-Z]/.test(password) && /[a-z]/.test(password) && /[!@#$%^&*]/.test(password);
};

var validateForm = () => {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;

    if (!username || !email || !dob || !phone || !password) {
        alert("You must fill all input fields.");
        return false;
    }

    if (!validatePhone(phone)) {
        alert("Phone number must be 10 digits long and start with '07'.");
        return false;
    }

    if (!validatePassword(password)) {
        alert("The password must contain an uppercase letter, a lowercase letter, and a special character.");
        return false;
    }

    return true;
};

// Event listeners
var saveLocal = document.getElementById("inLocal");
var saveSession = document.getElementById("inSession");
var valid = document.getElementById("agreement");

valid.addEventListener("change", () => {
    saveLocal.disabled = !valid.checked;
    saveSession.disabled = !valid.checked;
});

saveLocal.addEventListener("click", () => {
    if (validateForm()) {
        localStorage.setItem('username', document.getElementById('username').value);
        localStorage.setItem('email', document.getElementById('email').value);
        localStorage.setItem('dob', document.getElementById('dob').value);
        localStorage.setItem('phone', document.getElementById('phone').value);
        localStorage.setItem('password', document.getElementById('password').value);
        alert("Data saved to Local Storage.");
    }
});

saveSession.addEventListener("click", () => {
    if (validateForm()) {
        sessionStorage.setItem('username', document.getElementById('username').value);
        sessionStorage.setItem('email', document.getElementById('email').value);
        sessionStorage.setItem('dob', document.getElementById('dob').value);
        sessionStorage.setItem('phone', document.getElementById('phone').value);
        sessionStorage.setItem('password', document.getElementById('password').value);
        alert("Data saved to Session Storage.");
    }
});
const fontSelect = document.getElementById("fontSelect");
fontSelect.addEventListener("change", () => {
    const selectedFont = fontSelect.value;
    document.body.style.fontFamily = selectedFont;
});
