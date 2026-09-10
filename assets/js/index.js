/*--- Hero Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttIndHeroSearchBtn=document.getElementById("ttIndHeroSearchBtn");
    const ttIndHeroDestination=document.getElementById("ttIndHeroDestination");
    const ttIndHeroDate=document.getElementById("ttIndHeroDate");
    const ttIndHeroTravelers=document.getElementById("ttIndHeroTravelers");
    if(ttIndHeroDate){
        const ttToday=new Date();
        const ttYear=ttToday.getFullYear();
        const ttMonth=String(ttToday.getMonth()+1).padStart(2,"0");
        const ttDay=String(ttToday.getDate()).padStart(2,"0");
        ttIndHeroDate.min=ttYear+"-"+ttMonth+"-"+ttDay;
    }
    if(ttIndHeroSearchBtn){
        ttIndHeroSearchBtn.addEventListener("click",function(){
            const ttDestination=ttIndHeroDestination?ttIndHeroDestination.value:"";
            const ttDate=ttIndHeroDate?ttIndHeroDate.value:"";
            const ttTravelers=ttIndHeroTravelers?ttIndHeroTravelers.value:"";
            if(!ttDestination){
                if(ttIndHeroDestination)ttIndHeroDestination.focus();
                return;
            }
            const ttParams=new URLSearchParams();
            ttParams.set("destination",ttDestination);
            if(ttDate)ttParams.set("date",ttDate);
            if(ttTravelers)ttParams.set("travelers",ttTravelers);
            window.location.href="packages.html?"+ttParams.toString();
        });
    }
});
/*--- Hero Section End ---*/

/*--- About Us Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttIndAboutVisual=document.querySelector(".tt-ind-about-visual");
    const ttIndAboutImage=document.querySelector(".tt-ind-about-image-main");
    if(ttIndAboutVisual&&ttIndAboutImage){
        ttIndAboutVisual.addEventListener("mousemove",function(event){
            const rect=ttIndAboutVisual.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            ttIndAboutImage.style.transform="translate("+x*8+"px,"+y*8+"px) scale(1.03)";
        });
        ttIndAboutVisual.addEventListener("mouseleave",function(){
            ttIndAboutImage.style.transform="";
        });
    }
});
/*--- About Us Section End ---*/

/*--- Popular Destinations Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttIndDestCards=document.querySelectorAll(".tt-ind-dest-card");
    ttIndDestCards.forEach(function(card){
        card.addEventListener("mousemove",function(event){
            const rect=card.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            card.style.transform="translateY(-8px) perspective(800px) rotateX("+y*-2+"deg) rotateY("+x*2+"deg)";
        });
        card.addEventListener("mouseleave",function(){
            card.style.transform="";
        });
    });
});
/*--- Popular Destinations Section End ---*/

/*--- Featured Packages Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttIndPackFeatured=document.querySelector(".tt-ind-pack-featured");
    const ttIndPackCards=document.querySelectorAll(".tt-ind-pack-card");
    if(ttIndPackFeatured){
        ttIndPackFeatured.addEventListener("mousemove",function(event){
            const rect=ttIndPackFeatured.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            ttIndPackFeatured.style.transform="translateY(-6px) perspective(1000px) rotateX("+y*-1.5+"deg) rotateY("+x*1.5+"deg)";
        });
        ttIndPackFeatured.addEventListener("mouseleave",function(){
            ttIndPackFeatured.style.transform="";
        });
    }
    ttIndPackCards.forEach(function(card){
        card.addEventListener("mouseenter",function(){
            card.classList.add("is-hovered");
        });
        card.addEventListener("mouseleave",function(){
            card.classList.remove("is-hovered");
        });
    });
});
/*--- Featured Packages Section End ---*/

/*--- Explore By Experience Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttIndExpCards=document.querySelectorAll(".tt-ind-exp-card");
    if(!ttIndExpCards.length){
        return;
    }
    ttIndExpCards.forEach(function(card){
        card.addEventListener("mouseenter",function(){
            if(window.innerWidth>991){
                ttIndExpCards.forEach(function(item){
                    item.classList.remove("tt-ind-exp-card-active");
                });
                card.classList.add("tt-ind-exp-card-active");
            }
        });
        card.addEventListener("mouseleave",function(){
            if(window.innerWidth>991){
                card.classList.remove("tt-ind-exp-card-active");
                ttIndExpCards[0].classList.add("tt-ind-exp-card-active");
            }
        });
    });
    window.addEventListener("resize",function(){
        if(window.innerWidth<=991){
            ttIndExpCards.forEach(function(card){
                card.classList.remove("tt-ind-exp-card-active");
            });
        }else if(!document.querySelector(".tt-ind-exp-card-active")){
            ttIndExpCards[0].classList.add("tt-ind-exp-card-active");
        }
    });
});
/*--- Explore By Experience Section End ---*/

/*--- Customer Experiences Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttIndExpnImageWrap=document.querySelector(".tt-ind-expn-image-wrap");
    const ttIndExpnReview=document.querySelector(".tt-ind-expn-review");
    if(ttIndExpnImageWrap){
        ttIndExpnImageWrap.addEventListener("mousemove",function(event){
            const rect=ttIndExpnImageWrap.getBoundingClientRect();
            const x=(event.clientX-rect.left)/rect.width-0.5;
            const y=(event.clientY-rect.top)/rect.height-0.5;
            ttIndExpnImageWrap.style.transform="perspective(1000px) rotateX("+y*-1.5+"deg) rotateY("+x*1.5+"deg)";
        });
        ttIndExpnImageWrap.addEventListener("mouseleave",function(){
            ttIndExpnImageWrap.style.transform="";
        });
    }
    if(ttIndExpnReview){
        ttIndExpnReview.addEventListener("mouseenter",function(){
            ttIndExpnReview.classList.add("tt-ind-expn-review-active");
        });
        ttIndExpnReview.addEventListener("mouseleave",function(){
            ttIndExpnReview.classList.remove("tt-ind-expn-review-active");
        });
    }
});
/*--- Customer Experiences Section End ---*/
