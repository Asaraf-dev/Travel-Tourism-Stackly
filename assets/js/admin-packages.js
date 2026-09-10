/*--- Package Search & Filters ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttDashSearch=document.getElementById("ttDashPackageSearch");
    const ttDashCategory=document.getElementById("ttDashPackageCategory");
    const ttDashStatus=document.getElementById("ttDashPackageStatus");
    const ttDashSort=document.getElementById("ttDashPackageSort");
    const ttDashGrid=document.getElementById("ttDashPackagesGrid");
    const ttDashEmpty=document.getElementById("ttDashPackageEmpty");
    const ttDashCards=ttDashGrid?.querySelectorAll(".tt-dash-package-card");
    const ttDashCount=document.querySelector(".tt-dash-package-count");
    const ttDashFooter=document.querySelector(".tt-dash-package-footer > span");
    if(!ttDashSearch||!ttDashCategory||!ttDashStatus||!ttDashSort||!ttDashGrid||!ttDashCards)return;
    const ttDashFilterPackages=function(){
        const ttDashSearchValue=ttDashSearch.value.trim().toLowerCase();
        const ttDashCategoryValue=ttDashCategory.value.trim().toLowerCase();
        const ttDashStatusValue=ttDashStatus.value.trim().toLowerCase();
        let ttDashVisibleCards=[];
        ttDashCards.forEach(function(ttDashCard){
            const ttDashCardText=ttDashCard.textContent.toLowerCase();
            const ttDashCardCategory=ttDashCard.dataset.category?.toLowerCase()||"";
            const ttDashCardStatus=ttDashCard.dataset.status?.toLowerCase()||"";
            const ttDashSearchMatch=!ttDashSearchValue||ttDashCardText.includes(ttDashSearchValue);
            const ttDashCategoryMatch=!ttDashCategoryValue||ttDashCardCategory===ttDashCategoryValue;
            const ttDashStatusMatch=!ttDashStatusValue||ttDashCardStatus===ttDashStatusValue;
            if(ttDashSearchMatch&&ttDashCategoryMatch&&ttDashStatusMatch){
                ttDashCard.style.display="";
                ttDashVisibleCards.push(ttDashCard);
            }else{
                ttDashCard.style.display="none";
            }
        });
        if(ttDashSort.value==="price-low"){
            ttDashVisibleCards.sort(function(a,b){
                return Number(a.dataset.price)-Number(b.dataset.price);
            });
        }
        if(ttDashSort.value==="price-high"){
            ttDashVisibleCards.sort(function(a,b){
                return Number(b.dataset.price)-Number(a.dataset.price);
            });
        }
        if(ttDashSort.value==="rating"){
            ttDashVisibleCards.sort(function(a,b){
                return Number(b.dataset.rating)-Number(a.dataset.rating);
            });
        }
        if(ttDashSort.value==="featured"){
            ttDashVisibleCards.sort(function(a,b){
                return Number(a.querySelector(".tt-dash-package-number")?.textContent||0)-Number(b.querySelector(".tt-dash-package-number")?.textContent||0);
            });
        }
        ttDashVisibleCards.forEach(function(ttDashCard){
            ttDashGrid.appendChild(ttDashCard);
        });
        if(ttDashEmpty){
            ttDashEmpty.classList.toggle("show",ttDashVisibleCards.length===0);
        }
        if(ttDashCount){
            ttDashCount.textContent=ttDashVisibleCards.length+" Packages";
        }
        if(ttDashFooter){
            ttDashFooter.innerHTML='Showing <strong>'+ttDashVisibleCards.length+'</strong> of <strong>'+ttDashCards.length+'</strong> packages';
        }
    };
    ttDashSearch.addEventListener("input",ttDashFilterPackages);
    ttDashCategory.addEventListener("change",ttDashFilterPackages);
    ttDashStatus.addEventListener("change",ttDashFilterPackages);
    ttDashSort.addEventListener("change",ttDashFilterPackages);
    ttDashFilterPackages();
});
/*--- Package Action Buttons ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttDashPackageActions=document.querySelectorAll(".tt-dash-package-actions button");
    ttDashPackageActions.forEach(function(ttDashButton){
        ttDashButton.addEventListener("click",function(){
            window.location.href="404.html";
        });
    });
});
/*--- Add Package Button ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttDashAddPackageBtn=document.getElementById("ttDashAddPackageBtn");
    if(!ttDashAddPackageBtn){
        return;
    }
    ttDashAddPackageBtn.addEventListener("click",function(){
        window.location.href="404.html";
    });
});