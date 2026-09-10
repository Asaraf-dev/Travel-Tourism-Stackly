/*--- 404 Page ---*/
document.addEventListener("DOMContentLoaded",function(){
    const tt404BackBtn=document.getElementById("tt404BackBtn");
    if(tt404BackBtn){
        tt404BackBtn.addEventListener("click",function(){
            if(document.referrer&&document.referrer!==window.location.href){
                window.history.back();
            }else{
                window.location.href="index.html";
            }
        });
    }
});