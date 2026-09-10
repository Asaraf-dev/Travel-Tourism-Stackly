/*--- Our Story Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttAbtStoryImage=document.querySelector(".tt-abt-story-image-frame");
    const ttAbtStoryPoints=document.querySelectorAll(".tt-abt-story-point");
    if(ttAbtStoryImage){
        ttAbtStoryImage.addEventListener("mousemove",function(event){
            const rect=ttAbtStoryImage.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            ttAbtStoryImage.style.transform="perspective(1000px) rotateX("+(y*-1.2)+"deg) rotateY("+(x*1.2)+"deg)";
        });
        ttAbtStoryImage.addEventListener("mouseleave",function(){
            ttAbtStoryImage.style.transform="";
        });
    }
    ttAbtStoryPoints.forEach(function(point){
        point.addEventListener("mouseenter",function(){
            point.style.transform="translateY(-4px)";
        });
        point.addEventListener("mouseleave",function(){
            point.style.transform="";
        });
    });
});
/*--- Our Story Section End ---*/

/*--- Why We Travel Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttAbtWhyItems=document.querySelectorAll(".tt-abt-why-item");
    const ttAbtWhyImage=document.querySelector(".tt-abt-why-image-wrap");
    ttAbtWhyItems.forEach(function(item){
        item.addEventListener("mouseenter",function(){
            ttAbtWhyItems.forEach(function(otherItem){
                otherItem.classList.remove("tt-abt-why-item-active");
            });
            item.classList.add("tt-abt-why-item-active");
        });
        item.addEventListener("click",function(){
            ttAbtWhyItems.forEach(function(otherItem){
                otherItem.classList.remove("tt-abt-why-item-active");
            });
            item.classList.add("tt-abt-why-item-active");
        });
    });
    if(ttAbtWhyImage){
        ttAbtWhyImage.addEventListener("mousemove",function(event){
            const rect=ttAbtWhyImage.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            ttAbtWhyImage.style.transform="perspective(1000px) rotateX("+(y*-1.5)+"deg) rotateY("+(x*1.5)+"deg)";
        });
        ttAbtWhyImage.addEventListener("mouseleave",function(){
            ttAbtWhyImage.style.transform="";
        });
    }
});
/*--- Why We Travel Section End ---*/

/*--- What Makes Us Different Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttAbtDiffItems=document.querySelectorAll(".tt-abt-diff-item");
    const ttAbtDiffImage=document.querySelector(".tt-abt-diff-image-main");
    ttAbtDiffItems.forEach(function(item){
        item.addEventListener("mouseenter",function(){
            ttAbtDiffItems.forEach(function(otherItem){
                otherItem.classList.remove("tt-abt-diff-item-active");
            });
            item.classList.add("tt-abt-diff-item-active");
        });
        item.addEventListener("click",function(){
            ttAbtDiffItems.forEach(function(otherItem){
                otherItem.classList.remove("tt-abt-diff-item-active");
            });
            item.classList.add("tt-abt-diff-item-active");
        });
    });
    if(ttAbtDiffImage){
        ttAbtDiffImage.addEventListener("mousemove",function(event){
            const rect=ttAbtDiffImage.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            ttAbtDiffImage.style.transform="perspective(1000px) rotateX("+(y*-1.5)+"deg) rotateY("+(x*1.5)+"deg)";
        });
        ttAbtDiffImage.addEventListener("mouseleave",function(){
            ttAbtDiffImage.style.transform="";
        });
    }
});
/*--- What Makes Us Different End ---*/

/*--- Our Promise Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttAbtPromiseCards=document.querySelectorAll(".tt-abt-promise-card");
    ttAbtPromiseCards.forEach(function(card){
        card.addEventListener("mouseenter",function(){
            ttAbtPromiseCards.forEach(function(otherCard){
                otherCard.classList.remove("tt-abt-promise-card-active");
            });
            card.classList.add("tt-abt-promise-card-active");
        });
        card.addEventListener("mouseleave",function(){
            card.classList.remove("tt-abt-promise-card-active");
        });
    });
});
/*--- Our Promise Section End ---*/