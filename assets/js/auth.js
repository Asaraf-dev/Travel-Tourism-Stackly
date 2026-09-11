/*--- Login ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttLoginForm = document.getElementById("ttLoginForm");
    const ttLoginPassword = document.getElementById("ttLoginPassword");
    const ttLoginPasswordToggle = document.getElementById("ttLoginPasswordToggle");
    const ttLoginRemember = document.getElementById("ttLoginRemember");
    const ttLoginEmail = document.getElementById("ttLoginEmail");
    if (!ttLoginForm) {
        return;
    }
    /*--- Remembered Email ---*/
    const ttRememberedEmail = localStorage.getItem("ttLoginEmail");
    if (ttRememberedEmail) {
        ttLoginEmail.value = ttRememberedEmail;
        ttLoginRemember.checked = true;
    }
    /*--- Password Eye Toggle ---*/
    if (ttLoginPasswordToggle && ttLoginPassword) {
        ttLoginPasswordToggle.addEventListener("click", function () {
            const ttIsPassword = ttLoginPassword.type === "password";
            ttLoginPassword.type = ttIsPassword ? "text" : "password";
            this.innerHTML = ttIsPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
            this.setAttribute("aria-label", ttIsPassword ? "Hide password" : "Show password");
        });
    }
    /*--- Login Submit ---*/
    ttLoginForm.addEventListener("submit", function (ttLoginEvent) {
        ttLoginEvent.preventDefault();
        if (!ttLoginForm.checkValidity()) {
            ttLoginForm.reportValidity();
            return;
        }
        const ttLoginRole = document.querySelector('input[name="ttLoginRole"]:checked');
        if (!ttLoginRole) {
            return;
        }
        const ttEmailValue = ttLoginEmail.value.trim();
        if (ttLoginRemember.checked) {
            localStorage.setItem("ttLoginEmail", ttEmailValue);
        } else {
            localStorage.removeItem("ttLoginEmail");
        }
        sessionStorage.setItem("ttLoginEmail", ttEmailValue);
        sessionStorage.setItem("ttLoginRole", ttLoginRole.value);
        if (ttLoginRole.value === "admin") {
            window.location.href = "admin-dashboard.html";
        } else {
            window.location.href = "client-dashboard.html";
        }
    });
    /*--- Forgot Password 
    const ttLoginForgot = document.querySelector(".tt-auth-forgot");
    if (ttLoginForgot) {
        ttLoginForgot.addEventListener("click", function (ttLoginEvent) {
            ttLoginEvent.preventDefault();
        });
    }---*/
});


/*--- Register ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttRegisterForm = document.getElementById("ttRegisterForm");
    const ttRegisterName = document.getElementById("ttRegisterName");
    const ttRegisterPhone = document.getElementById("ttRegisterPhone");
    const ttRegisterEmail = document.getElementById("ttRegisterEmail");
    const ttRegisterPassword = document.getElementById("ttRegisterPassword");
    const ttRegisterConfirmPassword = document.getElementById("ttRegisterConfirmPassword");
    const ttRegisterPasswordToggle = document.getElementById("ttRegisterPasswordToggle");
    const ttRegisterConfirmPasswordToggle = document.getElementById("ttRegisterConfirmPasswordToggle");
    const ttRegisterRoleOptions = document.querySelectorAll('input[name="ttRegisterRole"]');
    const ttRegisterSubmit = ttRegisterForm?.querySelector('button[type="submit"]');
    const ttAuthRolePopup = document.getElementById("ttAuthRolePopup");
    const ttAuthRolePopupClose = document.getElementById("ttAuthRolePopupClose");
    if (!ttRegisterForm) {
        return;
    }
    /*--- Full Name Validation ---*/
    if (ttRegisterName) {
        ttRegisterName.addEventListener("input", function () {
            this.value = this.value.replace(/[^A-Za-z ]/g, "");
            this.value = this.value.replace(/\s{2,}/g, " ");
        });
    }
    /*--- Phone Number Validation ---*/
    if (ttRegisterPhone) {
        ttRegisterPhone.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "").slice(0, 10);
        });
    }
    /*--- Password Eye Toggle ---*/
    function ttRegisterTogglePassword(ttRegisterInput, ttRegisterButton) {
        if (!ttRegisterInput || !ttRegisterButton) {
            return;
        }
        ttRegisterButton.addEventListener("click", function () {
            const ttIsPassword = ttRegisterInput.type === "password";
            ttRegisterInput.type = ttIsPassword ? "text" : "password";
            this.innerHTML = ttIsPassword ? '<i class="bi bi-eye-slash"></i>' : '<i class="bi bi-eye"></i>';
            this.setAttribute("aria-label", ttIsPassword ? "Hide password" : "Show password");
        });
    }
    ttRegisterTogglePassword(ttRegisterPassword, ttRegisterPasswordToggle);
    ttRegisterTogglePassword(ttRegisterConfirmPassword, ttRegisterConfirmPasswordToggle);
    /*--- Confirm Password Validation ---*/
    if (ttRegisterConfirmPassword && ttRegisterPassword) {
        ttRegisterConfirmPassword.addEventListener("input", function () {
            if (this.value !== ttRegisterPassword.value) {
                this.setCustomValidity("Passwords do not match.");
            } else {
                this.setCustomValidity("");
            }
        });
        ttRegisterPassword.addEventListener("input", function () {
            if (ttRegisterConfirmPassword.value && ttRegisterConfirmPassword.value !== this.value) {
                ttRegisterConfirmPassword.setCustomValidity("Passwords do not match.");
            } else {
                ttRegisterConfirmPassword.setCustomValidity("");
            }
        });
    }
    /*--- Role Popup ---*/
    function ttShowRolePopup() {
        if (!ttAuthRolePopup) {
            return;
        }
        ttAuthRolePopup.classList.add("show");
        clearTimeout(ttAuthRolePopup.timer);
        ttAuthRolePopup.timer = setTimeout(function () {
            ttAuthRolePopup.classList.remove("show");
        }, 3500);
    }
    function ttHideRolePopup() {
        if (!ttAuthRolePopup) {
            return;
        }
        ttAuthRolePopup.classList.remove("show");
    }
    /*--- Role Selection ---*/
    ttRegisterRoleOptions.forEach(function (ttRegisterRole) {
        ttRegisterRole.addEventListener("change", function () {
            if (this.checked) {
                ttHideRolePopup();
            }
        });
    });
    /*--- Create Account Button ---*/
    if (ttRegisterSubmit) {
        ttRegisterSubmit.addEventListener("click", function (ttRegisterClickEvent) {
            const ttSelectedRole = document.querySelector('input[name="ttRegisterRole"]:checked');
            if (!ttSelectedRole) {
                ttRegisterClickEvent.preventDefault();
                ttShowRolePopup();
                return;
            }
        });
    }
    /*--- Close Role Popup ---*/
    if (ttAuthRolePopupClose) {
        ttAuthRolePopupClose.addEventListener("click", ttHideRolePopup);
    }
    /*--- Register Submit ---*/
    ttRegisterForm.addEventListener("submit", function (ttRegisterEvent) {
        ttRegisterEvent.preventDefault();
        const ttSelectedRole = document.querySelector('input[name="ttRegisterRole"]:checked');
        if (!ttSelectedRole) {
            ttShowRolePopup();
            return;
        }
        if (!ttRegisterForm.checkValidity()) {
            ttRegisterForm.reportValidity();
            return;
        }
        const ttRegisterNameValue = ttRegisterName.value.trim();
        const ttRegisterPhoneValue = ttRegisterPhone.value.trim();
        const ttRegisterEmailValue = ttRegisterEmail.value.trim();
        /*--- Store Profile Details Only ---*/
        localStorage.setItem("ttProfileName", ttRegisterNameValue);
        localStorage.setItem("ttProfilePhone", ttRegisterPhoneValue);
        localStorage.setItem("ttProfileEmail", ttRegisterEmailValue);
        localStorage.setItem("ttProfileRole", ttSelectedRole.value);
        /*--- Redirect To Login ---*/
        window.location.href = "login.html";
    });
});