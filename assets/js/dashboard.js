/*--- Dashboard ---*/
document.addEventListener("DOMContentLoaded", function () {
    const ttDashSidebar = document.getElementById("ttDashSidebar");
    const ttDashMenuBtn = document.getElementById("ttDashMenuBtn");
    const ttDashOverlay = document.getElementById("ttDashOverlay");
    const ttDashLogout = document.getElementById("ttDashLogout");
    const ttDashEmailElements = document.querySelectorAll(".tt-dash-user-email,.tt-dash-topbar-email");
    const ttDashNameElements = document.querySelectorAll(".tt-dash-user-name,.tt-dash-welcome-name");
    const ttDashEmail = localStorage.getItem("ttLoginEmail") || sessionStorage.getItem("ttLoginEmail") || "";
    const ttDashName = localStorage.getItem("ttProfileName") || "Traveler";
    ttDashEmailElements.forEach(function (ttDashElement) {
        ttDashElement.textContent = ttDashEmail;
    });
    ttDashNameElements.forEach(function (ttDashElement) {
        ttDashElement.textContent = ttDashName;
    });
    /*--- Sidebar Menu ---*/
    function ttDashOpenMenu() {
        if (!ttDashSidebar || !ttDashOverlay || !ttDashMenuBtn) {
            return;
        }
        ttDashSidebar.classList.add("active");
        ttDashOverlay.classList.add("active");
        ttDashMenuBtn.classList.add("active");
        ttDashMenuBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    }
    function ttDashCloseMenu() {
        if (!ttDashSidebar || !ttDashOverlay || !ttDashMenuBtn) {
            return;
        }
        ttDashSidebar.classList.remove("active");
        ttDashOverlay.classList.remove("active");
        ttDashMenuBtn.classList.remove("active");
        ttDashMenuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }
    if (ttDashMenuBtn) {
        ttDashMenuBtn.setAttribute("aria-expanded", "false");
        ttDashMenuBtn.addEventListener("click", function () {
            if (ttDashSidebar.classList.contains("active")) {
                ttDashCloseMenu();
            } else {
                ttDashOpenMenu();
            }
        });
    }
    if (ttDashOverlay) {
        ttDashOverlay.addEventListener("click", ttDashCloseMenu);
    }
    /*--- Close Menu After Navigation ---*/
    document.querySelectorAll(".tt-dash-sidebar-link").forEach(function (ttDashLink) {
        ttDashLink.addEventListener("click", function () {
            ttDashCloseMenu();
        });
    });
    /*--- Logout ---*/
    if (ttDashLogout) {
        ttDashLogout.addEventListener("click", function () {
            localStorage.removeItem("ttLoginEmail");
            localStorage.removeItem("ttProfileName");
            localStorage.removeItem("ttProfilePhone");
            localStorage.removeItem("ttProfileRole");
            sessionStorage.removeItem("ttLoginEmail");
            sessionStorage.removeItem("ttLoginRole");
        });
    }
});

/*--- Dashboard Sidebar Active Navigation ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttDashSidebarLinks=document.querySelectorAll(".tt-dash-sidebar-link");
    const ttDashCurrentPage=window.location.pathname.split("/").pop().toLowerCase()||"admin-dashboard.html";
    ttDashSidebarLinks.forEach(function(ttDashLink){
        const ttDashLinkPage=ttDashLink.getAttribute("href").split("/").pop().toLowerCase();
        ttDashLink.classList.remove("active");
        if(ttDashLinkPage===ttDashCurrentPage){
            ttDashLink.classList.add("active");
        }
    });
});
