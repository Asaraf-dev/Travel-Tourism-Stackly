/*--- Contact Us / Start a Conversation Section Start ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttConForm = document.getElementById("ttConContactForm");
    const ttConName = document.getElementById("ttConName");
    const ttConEmail = document.getElementById("ttConEmail");
    const ttConPhone = document.getElementById("ttConPhone");
    const ttConTravelDate = document.getElementById("ttConTravelDate");
    const ttConSuccessPopup = document.getElementById("ttConSuccessPopup");
    const ttConSuccessClose = document.getElementById("ttConSuccessClose");
    const ttConSuccessOk = document.getElementById("ttConSuccessOk");
    if (!ttConForm) {
        return;
    }
    /*--- Set Minimum Travel Date ---*/
    if (ttConTravelDate) {
        const ttConToday = new Date();
        const ttConYear = ttConToday.getFullYear();
        const ttConMonth = String(ttConToday.getMonth() + 1).padStart(2, "0");
        const ttConDay = String(ttConToday.getDate()).padStart(2, "0");
        ttConTravelDate.min = ttConYear + "-" + ttConMonth + "-" + ttConDay;
    }
    /*--- Name Validation ---*/
    if (ttConName) {
        ttConName.addEventListener("input", function () {
            this.value = this.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
        });
    }
    /*--- Phone Validation ---*/
    if (ttConPhone) {
        ttConPhone.addEventListener("input", function () {
            this.value = this.value.replace(/\D/g, "").slice(0, 10);
        });
    }
    /*--- Show Success Popup ---*/
    function ttConShowSuccessPopup() {
        if (!ttConSuccessPopup) {
            return;
        }
        ttConSuccessPopup.classList.add("active");
        ttConSuccessPopup.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
        if (ttConSuccessOk) {
            ttConSuccessOk.focus();
        }
    }
    /*--- Hide Success Popup ---*/
    function ttConHideSuccessPopup() {
        if (!ttConSuccessPopup) {
            return;
        }
        ttConSuccessPopup.classList.remove("active");
        ttConSuccessPopup.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
    /*--- Form Submit ---*/
    ttConForm.addEventListener("submit", function (ttConEvent) {
        ttConEvent.preventDefault();
        ttConEvent.stopPropagation();
        if (!ttConForm.checkValidity()) {
            ttConForm.reportValidity();
            return;
        }
        ttConShowSuccessPopup();
        ttConForm.reset();
    });
    /*--- Close Popup ---*/
    if (ttConSuccessClose) {
        ttConSuccessClose.addEventListener("click", ttConHideSuccessPopup);
    }
    if (ttConSuccessOk) {
        ttConSuccessOk.addEventListener("click", ttConHideSuccessPopup);
    }
    if (ttConSuccessPopup) {
        ttConSuccessPopup.addEventListener("click", function (ttConEvent) {
            if (ttConEvent.target === ttConSuccessPopup) {
                ttConHideSuccessPopup();
            }
        });
    }
    /*--- Escape Key ---*/
    document.addEventListener("keydown", function (ttConEvent) {
        if (ttConEvent.key === "Escape" && ttConSuccessPopup && ttConSuccessPopup.classList.contains("active")) {
            ttConHideSuccessPopup();
        }
    });
});
/*--- Contact Us / Start a Conversation Section End ---*/

/*--- Travel Assistance Section Start ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttConAssistanceCards = document.querySelectorAll(".tt-con-assistance-card");
    if (!ttConAssistanceCards.length) {
        return;
    }
    ttConAssistanceCards.forEach(function (ttConAssistanceCard) {
        ttConAssistanceCard.addEventListener("mousemove", function (ttConAssistanceEvent) {
            const ttConAssistanceRect = this.getBoundingClientRect();
            const ttConAssistanceX = ((ttConAssistanceEvent.clientX - ttConAssistanceRect.left) / ttConAssistanceRect.width - 0.5) * 8;
            const ttConAssistanceY = ((ttConAssistanceEvent.clientY - ttConAssistanceRect.top) / ttConAssistanceRect.height - 0.5) * 8;
            this.style.setProperty("--tt-con-assistance-x", ttConAssistanceX + "px");
            this.style.setProperty("--tt-con-assistance-y", ttConAssistanceY + "px");
        });
        ttConAssistanceCard.addEventListener("mouseleave", function () {
            this.style.setProperty("--tt-con-assistance-x", "0px");
            this.style.setProperty("--tt-con-assistance-y", "0px");
        });
    });
});
/*--- Travel Assistance Section End ---*/

/*--- Find Us Section Section Start ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttConLocationMap = document.querySelector(".tt-con-location-map");
    const ttConLocationMarker = document.querySelector(".tt-con-location-marker");
    const ttConLocationCard = document.querySelector(".tt-con-location-card");
    if (!ttConLocationMap) {
        return;
    }
    /*--- Interactive Map Marker ---*/
    if (ttConLocationMarker) {
        ttConLocationMap.addEventListener("mousemove", function (ttConLocationEvent) {
            const ttConLocationRect = ttConLocationMap.getBoundingClientRect();
            const ttConLocationX = ((ttConLocationEvent.clientX - ttConLocationRect.left) / ttConLocationRect.width - 0.5) * 12;
            const ttConLocationY = ((ttConLocationEvent.clientY - ttConLocationRect.top) / ttConLocationRect.height - 0.5) * 12;
            ttConLocationMarker.style.transform = "translate(calc(-50% + " + ttConLocationX + "px),calc(-50% + " + ttConLocationY + "px))";
        });
        ttConLocationMap.addEventListener("mouseleave", function () {
            ttConLocationMarker.style.transform = "translate(-50%,-50%)";
        });
    }
    /*--- Location Card Hover ---*/
    if (ttConLocationCard) {
        ttConLocationCard.addEventListener("mousemove", function (ttConLocationEvent) {
            const ttConLocationRect = ttConLocationCard.getBoundingClientRect();
            const ttConLocationX = ((ttConLocationEvent.clientX - ttConLocationRect.left) / ttConLocationRect.width - 0.5) * 4;
            const ttConLocationY = ((ttConLocationEvent.clientY - ttConLocationRect.top) / ttConLocationRect.height - 0.5) * 4;
            ttConLocationCard.style.setProperty("--tt-con-location-card-x", ttConLocationX + "px");
            ttConLocationCard.style.setProperty("--tt-con-location-card-y", ttConLocationY + "px");
        });
        ttConLocationCard.addEventListener("mouseleave", function () {
            ttConLocationCard.style.setProperty("--tt-con-location-card-x", "0px");
            ttConLocationCard.style.setProperty("--tt-con-location-card-y", "0px");
        });
    }
});
/*--- Find Us Section Section End ---*/

/*--- Why Talk To Us? Section Start ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttConWhyItems = document.querySelectorAll(".tt-con-why-item");
    if (!ttConWhyItems.length) {
        return;
    }
    ttConWhyItems.forEach(function (ttConWhyItem) {
        ttConWhyItem.addEventListener("mousemove", function (ttConWhyEvent) {
            const ttConWhyRect = this.getBoundingClientRect();
            const ttConWhyX = ((ttConWhyEvent.clientX - ttConWhyRect.left) / ttConWhyRect.width - 0.5) * 6;
            const ttConWhyY = ((ttConWhyEvent.clientY - ttConWhyRect.top) / ttConWhyRect.height - 0.5) * 6;
            this.style.setProperty("--tt-con-why-x", ttConWhyX + "px");
            this.style.setProperty("--tt-con-why-y", ttConWhyY + "px");
        });
        ttConWhyItem.addEventListener("mouseleave", function () {
            this.style.setProperty("--tt-con-why-x", "0px");
            this.style.setProperty("--tt-con-why-y", "0px");
        });
    });
});
/*--- Why Talk To Us? Section End ---*/

/*--- FAQ / Quick Answers Section Start ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttConFaqItems = document.querySelectorAll(".tt-con-faq-item");
    if (!ttConFaqItems.length) {
        return;
    }
    ttConFaqItems.forEach(function (ttConFaqItem) {
        const ttConFaqQuestion = ttConFaqItem.querySelector(".tt-con-faq-question");
        if (!ttConFaqQuestion) {
            return;
        }
        ttConFaqQuestion.addEventListener("click", function () {
            const ttConFaqIsActive = ttConFaqItem.classList.contains("active");
            ttConFaqItems.forEach(function (ttConFaqOtherItem) {
                ttConFaqOtherItem.classList.remove("active");
            });
            if (!ttConFaqIsActive) {
                ttConFaqItem.classList.add("active");
            }
        });
    });
});
/*--- FAQ / Quick Answers Section End ---*/
