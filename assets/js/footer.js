/*--- Footer ---*/
document.addEventListener("DOMContentLoaded",function(){
    const footerTopButton=document.querySelector(".tt-ftr-top-btn");
    if(footerTopButton){
        footerTopButton.addEventListener("click",function(event){
            event.preventDefault();
            window.scrollTo({top:0,behavior:"smooth"});
        });
    }
    const footerLinks=document.querySelectorAll(".tt-ftr-links a");
    footerLinks.forEach(function(link){
        link.addEventListener("mouseenter",function(){
            this.querySelector("i")?.classList.add("bi-arrow-up-right");
        });
    });
});