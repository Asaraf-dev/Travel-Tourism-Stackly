/*--- Navbar ---*/
document.addEventListener("ttComponentsLoaded",function(){
    const navbar=document.querySelector(".tt-nav");
    const navbarToggle=document.querySelector(".tt-nav-toggle");
    const navbarMenu=document.querySelector(".tt-nav-menu");
    const navbarLinks=document.querySelectorAll(".tt-nav-link");
    if(!navbar||!navbarToggle||!navbarMenu)return;
    const currentPage=window.location.pathname.split("/").pop().toLowerCase()||"index.html";
    navbarLinks.forEach(function(link){
        const linkPage=link.getAttribute("href").split("/").pop().split("#")[0].toLowerCase();
        link.classList.toggle("active",linkPage===currentPage);
    });
    const updateNavbar=function(){
        if(window.scrollY>30){navbar.classList.add("scrolled");}else{navbar.classList.remove("scrolled");}
    };
    updateNavbar();
    window.addEventListener("scroll",updateNavbar);
    navbarToggle.addEventListener("click",function(event){
        event.stopPropagation();
        const isActive=navbarMenu.classList.toggle("active");
        navbarToggle.classList.toggle("active",isActive);
        navbarToggle.setAttribute("aria-expanded",isActive?"true":"false");
        document.body.classList.toggle("tt-nav-menu-open",isActive);
    });
    navbarLinks.forEach(function(link){
        link.addEventListener("click",function(){
            navbarLinks.forEach(function(item){item.classList.remove("active");});
            this.classList.add("active");
            navbarMenu.classList.remove("active");
            navbarToggle.classList.remove("active");
            navbarToggle.setAttribute("aria-expanded","false");
            document.body.classList.remove("tt-nav-menu-open");
        });
    });
    document.addEventListener("click",function(event){
        if(!navbar.contains(event.target)){
            navbarMenu.classList.remove("active");
            navbarToggle.classList.remove("active");
            navbarToggle.setAttribute("aria-expanded","false");
            document.body.classList.remove("tt-nav-menu-open");
        }
    });
});