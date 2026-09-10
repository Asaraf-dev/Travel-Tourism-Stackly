/*--- Package Discovery / Smart Search Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttPkgGrid=document.getElementById("ttPkgDiscoveryGrid");
    const ttPkgDestination=document.getElementById("ttPkgDestination");
    const ttPkgStyle=document.getElementById("ttPkgStyle");
    const ttPkgDuration=document.getElementById("ttPkgDuration");
    const ttPkgBudget=document.getElementById("ttPkgBudget");
    const ttPkgSearch=document.getElementById("ttPkgDiscoverySearch");
    const ttPkgReset=document.getElementById("ttPkgDiscoveryReset");
    const ttPkgCount=document.getElementById("ttPkgResultCount");
    const ttPkgEmpty=document.getElementById("ttPkgDiscoveryEmpty");
    const ttPkgEmptyReset=document.getElementById("ttPkgDiscoveryEmptyReset");
    const ttPkgCards=document.querySelectorAll(".tt-pkg-discovery-card");
    const ttPkgTags=document.querySelectorAll(".tt-pkg-discovery-tag");
    if(!ttPkgGrid||!ttPkgCards.length)return;
    function ttPkgFilter(){
        const destination=ttPkgDestination.value;
        const style=ttPkgStyle.value;
        const duration=ttPkgDuration.value;
        const budget=ttPkgBudget.value;
        let count=0;
        ttPkgCards.forEach(function(card){
            const matchesDestination=destination==="all"||card.dataset.destination===destination;
            const matchesStyle=style==="all"||card.dataset.style===style;
            const matchesDuration=duration==="all"||card.dataset.duration===duration;
            const matchesBudget=budget==="all"||card.dataset.budget===budget;
            const visible=matchesDestination&&matchesStyle&&matchesDuration&&matchesBudget;
            card.style.display=visible?"block":"none";
            if(visible){
                count++;
                card.classList.remove("tt-pkg-discovery-card-show");
                setTimeout(function(){
                    if(card.style.display!=="none")card.classList.add("tt-pkg-discovery-card-show");
                },50);
            }
        });
        ttPkgCount.textContent=count;
        ttPkgEmpty.classList.toggle("show",count===0);
        ttPkgGrid.style.display=count===0?"none":"grid";
    }
    function ttPkgResetFilters(){
        ttPkgDestination.value="all";
        ttPkgStyle.value="all";
        ttPkgDuration.value="all";
        ttPkgBudget.value="all";
        ttPkgTags.forEach(function(tag){tag.classList.remove("active");});
        ttPkgFilter();
    }
    ttPkgSearch.addEventListener("click",function(){
        ttPkgFilter();
        document.querySelector(".tt-pkg-discovery-result-head").scrollIntoView({behavior:"smooth",block:"start"});
    });
    ttPkgReset.addEventListener("click",ttPkgResetFilters);
    ttPkgEmptyReset.addEventListener("click",ttPkgResetFilters);
    ttPkgTags.forEach(function(tag){
        tag.addEventListener("click",function(){
            const selectedStyle=this.dataset.style;
            ttPkgStyle.value=selectedStyle;
            ttPkgTags.forEach(function(item){item.classList.remove("active");});
            this.classList.add("active");
            ttPkgFilter();
        });
    });
    document.querySelectorAll(".tt-pkg-discovery-wishlist").forEach(function(button){
        button.addEventListener("click",function(){
            this.classList.toggle("active");
            const icon=this.querySelector("i");
            if(this.classList.contains("active")){
                icon.className="bi bi-heart-fill";
            }else{
                icon.className="bi bi-heart";
            }
        });
    });
    ttPkgFilter();
});
/*--- Package Card Image Interaction ---*/
document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll(".tt-pkg-discovery-card").forEach(function(card){
        const image=card.querySelector(".tt-pkg-discovery-img");
        if(!image)return;
        card.addEventListener("mousemove",function(event){
            const rect=card.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            image.style.transform="scale(1.08) translate("+x*5+"px,"+y*5+"px)";
        });
        card.addEventListener("mouseleave",function(){
            image.style.transform="";
        });
    });
});
/*--- Package Discovery / Smart Search Section End ---*/

/*--- Handpicked For You Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttPkgHandpickedCards=document.querySelectorAll(".tt-pkg-handpicked-card");
    ttPkgHandpickedCards.forEach(function(card){
        const ttPkgHandpickedImage=card.querySelector(".tt-pkg-handpicked-img");
        if(!ttPkgHandpickedImage)return;
        card.addEventListener("mousemove",function(event){
            const ttPkgHandpickedRect=card.getBoundingClientRect();
            const ttPkgHandpickedX=(event.clientX-ttPkgHandpickedRect.left)/ttPkgHandpickedRect.width-0.5;
            const ttPkgHandpickedY=(event.clientY-ttPkgHandpickedRect.top)/ttPkgHandpickedRect.height-0.5;
            ttPkgHandpickedImage.style.transform="scale(1.08) translate("+ttPkgHandpickedX*5+"px,"+ttPkgHandpickedY*5+"px)";
        });
        card.addEventListener("mouseleave",function(){
            ttPkgHandpickedImage.style.transform="";
        });
    });
});
/*--- Handpicked For You Section End ---*/

/*--- Package Benefits Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttPkgBenefitCards=document.querySelectorAll(".tt-pkg-benefit-card");
    if(!ttPkgBenefitCards.length){
        return;
    }
    ttPkgBenefitCards.forEach(function(ttPkgBenefitCard){
        ttPkgBenefitCard.addEventListener("mousemove",function(event){
            const ttPkgBenefitRect=ttPkgBenefitCard.getBoundingClientRect();
            const ttPkgBenefitX=event.clientX-ttPkgBenefitRect.left;
            const ttPkgBenefitY=event.clientY-ttPkgBenefitRect.top;
            const ttPkgBenefitGlowX=(ttPkgBenefitX/ttPkgBenefitRect.width)*100;
            const ttPkgBenefitGlowY=(ttPkgBenefitY/ttPkgBenefitRect.height)*100;
            ttPkgBenefitCard.style.setProperty("--tt-pkg-benefit-glow-x",ttPkgBenefitGlowX+"%");
            ttPkgBenefitCard.style.setProperty("--tt-pkg-benefit-glow-y",ttPkgBenefitGlowY+"%");
        });
    });
});
/*--- Package Benefits Section End ---*/
