/*--- Loader ---*/
const ttLdrLoader=document.getElementById("ttLdr");
const ttLdrMessage=document.getElementById("ttLdrMessage");
let ttLdrMessageInterval=null;
let ttLdrHideTimeout=null;
/*--- Loader Messages ---*/
const ttLdrMessages=[
"Preparing your journey...",
"Discovering beautiful places...",
"Mapping your next adventure...",
"Packing unforgettable memories...",
"Almost ready to explore..."
];
let ttLdrMessageIndex=0;
/*--- Show Loader ---*/
function ttShowLoader(){
    if(!ttLdrLoader)return;
    clearTimeout(ttLdrHideTimeout);
    clearInterval(ttLdrMessageInterval);
    ttLdrLoader.style.display="flex";
    ttLdrLoader.classList.remove("tt-ldr-hidden","tt-ldr-exit");
    ttLdrMessageIndex=0;
    if(ttLdrMessage){
        ttLdrMessage.textContent=ttLdrMessages[0];
        ttLdrMessage.style.opacity="1";
        ttLdrMessage.style.transform="translateY(0)";
    }
    ttLdrMessageInterval=setInterval(function(){
        ttLdrMessageIndex++;
        if(ttLdrMessageIndex>=ttLdrMessages.length)ttLdrMessageIndex=0;
        if(ttLdrMessage){
            ttLdrMessage.style.opacity="0";
            ttLdrMessage.style.transform="translateY(5px)";
            setTimeout(function(){
                if(ttLdrMessage){
                    ttLdrMessage.textContent=ttLdrMessages[ttLdrMessageIndex];
                    ttLdrMessage.style.opacity="1";
                    ttLdrMessage.style.transform="translateY(0)";
                }
            },250);
        }
    },1300);
}
/*--- Hide Loader ---*/
function ttHideLoader(){
    if(!ttLdrLoader)return;
    clearTimeout(ttLdrHideTimeout);
    ttLdrHideTimeout=setTimeout(function(){
        clearInterval(ttLdrMessageInterval);
        ttLdrLoader.classList.add("tt-ldr-exit");
        setTimeout(function(){
            if(ttLdrLoader){
                ttLdrLoader.classList.add("tt-ldr-hidden");
                ttLdrLoader.style.display="none";
            }
        },800);
    },500);
}
/*--- Initial Page Load ---*/
document.addEventListener("DOMContentLoaded",function(){
    ttShowLoader();
});
/*--- Window Loaded ---*/
window.addEventListener("load",function(){
    ttHideLoader();
});
/*--- Browser Back / Forward ---*/
window.addEventListener("pageshow",function(ttLdrEvent){
    if(ttLdrEvent.persisted){
        ttShowLoader();
        ttHideLoader();
    }
});