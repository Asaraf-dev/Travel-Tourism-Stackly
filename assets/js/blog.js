/*--- Featured Travel Story Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttBlgFeaturedCard=document.querySelector(".tt-blg-featured-card");
    const ttBlgFeaturedImage=document.querySelector(".tt-blg-featured-image");
    if(!ttBlgFeaturedCard||!ttBlgFeaturedImage){
        return;
    }
    ttBlgFeaturedCard.addEventListener("mousemove",function(event){
        const ttBlgFeaturedRect=ttBlgFeaturedCard.getBoundingClientRect();
        const ttBlgFeaturedX=(event.clientX-ttBlgFeaturedRect.left)/ttBlgFeaturedRect.width-0.5;
        const ttBlgFeaturedY=(event.clientY-ttBlgFeaturedRect.top)/ttBlgFeaturedRect.height-0.5;
        ttBlgFeaturedImage.style.transform="scale(1.07) translate("+ttBlgFeaturedX*4+"px,"+ttBlgFeaturedY*4+"px)";
    });
    ttBlgFeaturedCard.addEventListener("mouseleave",function(){
        ttBlgFeaturedImage.style.transform="";
    });
});
/*--- Featured Travel Story Section End ---*/

/*--- Explore Travel Stories Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
const ttBlgStoryFilterButtons=document.querySelectorAll(".tt-blg-stories-filter-btn");
const ttBlgStoryCards=document.querySelectorAll(".tt-blg-story-card");
const ttBlgStoriesEmpty=document.querySelector(".tt-blg-stories-empty");
if(!ttBlgStoryFilterButtons.length||!ttBlgStoryCards.length){
return;
}
/*--- Filter Stories ---*/
function ttBlgShowStories(ttBlgCategory){
let ttBlgVisibleCount=0;
ttBlgStoryCards.forEach(function(ttBlgCard){
const ttBlgCardCategory=ttBlgCard.getAttribute("data-category");
const ttBlgShouldShow=ttBlgCategory==="all"||ttBlgCardCategory===ttBlgCategory;
if(ttBlgShouldShow){
ttBlgCard.classList.remove("tt-blg-story-hidden");
ttBlgCard.classList.add("tt-blg-story-visible");
ttBlgVisibleCount++;
}else{
ttBlgCard.classList.remove("tt-blg-story-visible");
ttBlgCard.classList.add("tt-blg-story-hidden");
}
});
if(ttBlgStoriesEmpty){
ttBlgStoriesEmpty.style.display=ttBlgVisibleCount===0?"flex":"none";
}
}
/*--- Category Buttons ---*/
ttBlgStoryFilterButtons.forEach(function(ttBlgButton){
ttBlgButton.addEventListener("click",function(){
ttBlgStoryFilterButtons.forEach(function(ttBlgItem){
ttBlgItem.classList.remove("active");
});
this.classList.add("active");
const ttBlgCategory=this.getAttribute("data-category");
ttBlgShowStories(ttBlgCategory);
});
});
/*--- Initial Stories ---*/
ttBlgShowStories("all");
});
/*--- Explore Travel Stories Section End ---*/

/*--- Travel Tips & Guides Section Start ---*/
document.addEventListener("DOMContentLoaded",function(){
const ttBlgGuideItems=document.querySelectorAll(".tt-blg-guide-item");
if(!ttBlgGuideItems.length){
return;
}
ttBlgGuideItems.forEach(function(ttBlgGuideItem){
ttBlgGuideItem.addEventListener("mouseenter",function(){
this.classList.add("tt-blg-guide-hover");
});
ttBlgGuideItem.addEventListener("mouseleave",function(){
this.classList.remove("tt-blg-guide-hover");
});
});
});
/*--- Travel Tips & Guides Section End ---*/