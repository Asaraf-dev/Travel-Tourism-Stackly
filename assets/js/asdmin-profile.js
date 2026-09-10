/*--- Admin Profile ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttDashProfileName=document.getElementById("ttDashProfileName");
    const ttDashProfileFullName=document.getElementById("ttDashProfileFullName");
    const ttDashProfileEmail=document.getElementById("ttDashProfileEmail");
    const ttDashProfileEmailDetails=document.getElementById("ttDashProfileEmailDetails");
    const ttDashProfilePhone=document.getElementById("ttDashProfilePhone");
    const ttDashProfileRole=document.getElementById("ttDashProfileRole");
    const ttDashProfileAccountType=document.getElementById("ttDashProfileAccountType");
    const ttDashProfileInitials=document.getElementById("ttDashProfileInitials");
    const ttProfileName=localStorage.getItem("ttProfileName")||"Traveler";
    const ttProfilePhone=localStorage.getItem("ttProfilePhone")||"Not Provided";
    const ttProfileRole=localStorage.getItem("ttProfileRole")||sessionStorage.getItem("ttLoginRole")||"admin";
    const ttLoginEmail=sessionStorage.getItem("ttLoginEmail")||localStorage.getItem("ttLoginEmail")||"Not Provided";
    const ttProfileRoleName=ttProfileRole==="admin"?"Administrator":"Client";
    const ttProfileInitials=ttProfileName.trim().split(/\s+/).map(function(ttNamePart){
        return ttNamePart.charAt(0);
    }).join("").substring(0,2).toUpperCase();
    if(ttDashProfileName){
        ttDashProfileName.textContent=ttProfileName;
    }
    if(ttDashProfileFullName){
        ttDashProfileFullName.textContent=ttProfileName;
    }
    if(ttDashProfileEmail){
        ttDashProfileEmail.textContent=ttLoginEmail;
    }
    if(ttDashProfileEmailDetails){
        ttDashProfileEmailDetails.textContent=ttLoginEmail;
    }
    if(ttDashProfilePhone){
        ttDashProfilePhone.textContent=ttProfilePhone;
    }
    if(ttDashProfileRole){
        ttDashProfileRole.textContent=ttProfileRoleName;
    }
    if(ttDashProfileAccountType){
        ttDashProfileAccountType.textContent=ttProfileRoleName;
    }
    if(ttDashProfileInitials){
        ttDashProfileInitials.textContent=ttProfileInitials||"A";
    }
});