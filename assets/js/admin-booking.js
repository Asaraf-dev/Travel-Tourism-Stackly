/*--- Booking Filters ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttDashBookingFilters=document.querySelector(".tt-dash-booking-filters");
    const ttDashSearch=ttDashBookingFilters?.querySelector('input[type="search"]');
    const ttDashSelects=ttDashBookingFilters?.querySelectorAll("select");
    const ttDashTable=document.querySelector(".tt-dash-booking-table");
    const ttDashRows=ttDashTable?.querySelectorAll("tbody tr");
    const ttDashCount=document.querySelector(".tt-dash-booking-footer > span");
    if(!ttDashBookingFilters||!ttDashSearch||!ttDashSelects||!ttDashTable||!ttDashRows.length)return;
    const ttDashStatusFilter=ttDashSelects[0];
    const ttDashDestinationFilter=ttDashSelects[1];
    const ttDashDateFilter=ttDashSelects[2];
    const ttDashNormalize=function(ttDashText){
        return ttDashText.replace(/\s+/g," ").trim().toLowerCase();
    };
    const ttDashParseDate=function(ttDashDateText){
        const ttDashMatch=ttDashDateText.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/);
        if(!ttDashMatch){
            return null;
        }
        const ttDashDay=parseInt(ttDashMatch[1],10);
        const ttDashMonthNames=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
        const ttDashMonth=ttDashMonthNames.indexOf(ttDashMatch[2].substring(0,3).toLowerCase());
        const ttDashYear=parseInt(ttDashMatch[3],10);
        if(ttDashMonth===-1){
            return null;
        }
        return new Date(ttDashYear,ttDashMonth,ttDashDay);
    };
    const ttDashGetDateRange=function(ttDashFilter){
        const ttDashToday=new Date();
        const ttDashCurrentYear=ttDashToday.getFullYear();
        const ttDashCurrentMonth=ttDashToday.getMonth();
        let ttDashStart=null;
        let ttDashEnd=null;
        if(ttDashFilter==="this week"){
            const ttDashDay=ttDashToday.getDay();
            ttDashStart=new Date(ttDashCurrentYear,ttDashCurrentMonth,ttDashToday.getDate()-ttDashDay);
            ttDashEnd=new Date(ttDashCurrentYear,ttDashCurrentMonth,ttDashToday.getDate()+(6-ttDashDay));
        }else if(ttDashFilter==="this month"){
            ttDashStart=new Date(ttDashCurrentYear,ttDashCurrentMonth,1);
            ttDashEnd=new Date(ttDashCurrentYear,ttDashCurrentMonth+1,0);
        }else if(ttDashFilter==="next month"){
            ttDashStart=new Date(ttDashCurrentYear,ttDashCurrentMonth+1,1);
            ttDashEnd=new Date(ttDashCurrentYear,ttDashCurrentMonth+2,0);
        }
        if(ttDashStart&&ttDashEnd){
            ttDashStart.setHours(0,0,0,0);
            ttDashEnd.setHours(23,59,59,999);
        }
        return {
            start:ttDashStart,
            end:ttDashEnd
        };
    };
    const ttDashFilterBookings=function(){
        const ttDashSearchValue=ttDashNormalize(ttDashSearch.value);
        const ttDashStatusValue=ttDashNormalize(ttDashStatusFilter.value);
        const ttDashDestinationValue=ttDashNormalize(ttDashDestinationFilter.value);
        const ttDashSelectedOption=ttDashDateFilter.options[ttDashDateFilter.selectedIndex];
        const ttDashDateValue=ttDashNormalize(ttDashSelectedOption?.textContent||"");
        const ttDashDateRange=ttDashGetDateRange(ttDashDateValue);
        let ttDashVisibleCount=0;
        ttDashRows.forEach(function(ttDashRow){
            const ttDashCells=ttDashRow.querySelectorAll("td");
            const ttDashRowText=ttDashNormalize(ttDashRow.textContent);
            const ttDashStatus=ttDashNormalize(ttDashRow.querySelector(".tt-dash-status")?.textContent||"");
            const ttDashDestination=ttDashNormalize(ttDashCells[2]?.textContent||"");
            const ttDashTravelDateText=ttDashCells[3]?.textContent||"";
            const ttDashTravelDate=ttDashParseDate(ttDashTravelDateText);
            const ttDashSearchMatch=!ttDashSearchValue||ttDashRowText.includes(ttDashSearchValue);
            const ttDashStatusMatch=!ttDashStatusValue||ttDashStatusValue==="all status"||ttDashStatus===ttDashStatusValue;
            const ttDashDestinationMatch=!ttDashDestinationValue||ttDashDestinationValue==="all destinations"||ttDashDestination.includes(ttDashDestinationValue);
            let ttDashDateMatch=true;
            if(ttDashDateRange.start&&ttDashDateRange.end){
                ttDashDateMatch=ttDashTravelDate!==null&&ttDashTravelDate>=ttDashDateRange.start&&ttDashTravelDate<=ttDashDateRange.end;
            }
            const ttDashShowRow=ttDashSearchMatch&&ttDashStatusMatch&&ttDashDestinationMatch&&ttDashDateMatch;
            ttDashRow.style.display=ttDashShowRow?"":"none";
            if(ttDashShowRow){
                ttDashVisibleCount++;
            }
        });
        if(ttDashCount){
            if(ttDashVisibleCount>0){
                ttDashCount.innerHTML='Showing <strong>1–'+ttDashVisibleCount+'</strong> of <strong>'+ttDashRows.length+'</strong> bookings';
            }else{
                ttDashCount.innerHTML='Showing <strong>0</strong> of <strong>'+ttDashRows.length+'</strong> bookings';
            }
        }
    };
    ttDashSearch.addEventListener("input",ttDashFilterBookings);
    ttDashStatusFilter.addEventListener("change",ttDashFilterBookings);
    ttDashDestinationFilter.addEventListener("change",ttDashFilterBookings);
    ttDashDateFilter.addEventListener("change",ttDashFilterBookings);
    ttDashFilterBookings();
});
/*--- Booking Action Buttons ---*/
document.addEventListener("DOMContentLoaded",function(){
    const ttDashBookingActions=document.querySelectorAll(".tt-dash-booking-actions button");
    ttDashBookingActions.forEach(function(ttDashButton){
        ttDashButton.addEventListener("click",function(){
            window.location.href="404.html";
        });
    });
});