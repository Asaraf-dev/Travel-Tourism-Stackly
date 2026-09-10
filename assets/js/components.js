/*--- Components ---*/
document.addEventListener("DOMContentLoaded",function(){
    const navbarContainer=document.querySelector("[data-navbar]");
    const footerContainer=document.querySelector("[data-footer]");
    const loadComponent=async function(container,path){
        if(!container)return;
        try{
            const response=await fetch(path);
            if(!response.ok)throw new Error("Component could not be loaded");
            container.innerHTML=await response.text();
        }catch(error){
            console.error("Component loading error:",error);
        }
    };
    Promise.all([
        loadComponent(navbarContainer,"assets/components/navbar.html"),
        loadComponent(footerContainer,"assets/components/footer.html")
    ]).then(function(){
        document.dispatchEvent(new CustomEvent("ttComponentsLoaded"));
    });
});