/*--- Client Payment Actions ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttClientPaymentViewButtons=document.querySelectorAll(".tt-client-payment-view");
    const ttClientPaymentPayButton=document.querySelector(".tt-client-payment-pay");
    const ttClientPaymentDownload=document.querySelector(".tt-client-payment-download");
    ttClientPaymentViewButtons.forEach(function(ttClientPaymentButton){
        ttClientPaymentButton.addEventListener("click",function(){
            window.location.href="404.html";
        });
    });
    if(ttClientPaymentPayButton){
        ttClientPaymentPayButton.addEventListener("click",function(){
            window.location.href="404.html";
        });
    }
    if(ttClientPaymentDownload){
        ttClientPaymentDownload.addEventListener("click",function(){
            window.location.href="404.html";
        });
    }
});