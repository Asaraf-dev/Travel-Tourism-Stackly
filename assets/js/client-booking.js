/*--- Client Booking Filters ---*/
document.addEventListener("DOMContentLoaded", function () {

    const ttClientBookingSearch =
        document.getElementById("ttClientBookingSearch");

    const ttClientBookingStatus =
        document.getElementById("ttClientBookingStatus");

    const ttClientBookingDestination =
        document.getElementById("ttClientBookingDestination");

    const ttClientBookingDate =
        document.getElementById("ttClientBookingDate");

    const ttClientBookingRows =
        document.querySelectorAll(".tt-client-booking-table tbody tr");

    const ttClientBookingCards =
        document.querySelectorAll(".tt-client-booking-card");

    const ttClientBookingCount =
        document.querySelector(".tt-client-booking-footer > span");

    const ttClientBookingTotal =
        document.querySelector(".tt-client-booking-total");


    /*--- Filter Function ---*/
    function ttFilterClientBookings() {

        const searchValue =
            ttClientBookingSearch?.value.trim().toLowerCase() || "";

        const statusValue =
            ttClientBookingStatus?.value.trim().toLowerCase() || "";

        const destinationValue =
            ttClientBookingDestination?.value.trim().toLowerCase() || "";

        const dateValue =
            ttClientBookingDate?.value.trim().toLowerCase() || "";


        let visibleCount = 0;


        /*--- Table Rows ---*/
        ttClientBookingRows.forEach(function (row) {

            const rowText =
                row.textContent.toLowerCase();

            const rowStatus =
                row.dataset.status?.toLowerCase() || "";

            const rowDestination =
                row.dataset.destination?.toLowerCase() || "";

            const rowDate =
                row.dataset.date?.toLowerCase() || "";


            const searchMatch =
                !searchValue ||
                rowText.includes(searchValue);

            const statusMatch =
                !statusValue ||
                rowStatus === statusValue;

            const destinationMatch =
                !destinationValue ||
                rowDestination === destinationValue;

            const dateMatch =
                !dateValue ||
                rowDate === dateValue;


            const showRow =
                searchMatch &&
                statusMatch &&
                destinationMatch &&
                dateMatch;


            row.style.display =
                showRow ? "" : "none";


            if (showRow) {
                visibleCount++;
            }

        });


        /*--- Mobile Cards ---*/
        ttClientBookingCards.forEach(function (card) {

            const cardText =
                card.textContent.toLowerCase();

            const cardStatus =
                card.dataset.status?.toLowerCase() || "";

            const cardDestination =
                card.dataset.destination?.toLowerCase() || "";

            const cardDate =
                card.dataset.date?.toLowerCase() || "";


            const searchMatch =
                !searchValue ||
                cardText.includes(searchValue);

            const statusMatch =
                !statusValue ||
                cardStatus === statusValue;

            const destinationMatch =
                !destinationValue ||
                cardDestination === destinationValue;

            const dateMatch =
                !dateValue ||
                cardDate === dateValue;


            const showCard =
                searchMatch &&
                statusMatch &&
                destinationMatch &&
                dateMatch;


            card.style.display =
                showCard ? "" : "none";

        });


        /*--- Result Count ---*/
        if (ttClientBookingCount) {

            ttClientBookingCount.innerHTML =
                "Showing <strong>1–" +
                visibleCount +
                "</strong> of <strong>" +
                ttClientBookingRows.length +
                "</strong> bookings";

        }


        if (ttClientBookingTotal) {

            ttClientBookingTotal.textContent =
                visibleCount + " Bookings";

        }

    }


    /*--- Events ---*/

    ttClientBookingSearch?.addEventListener(
        "input",
        ttFilterClientBookings
    );

    ttClientBookingStatus?.addEventListener(
        "change",
        ttFilterClientBookings
    );

    ttClientBookingDestination?.addEventListener(
        "change",
        ttFilterClientBookings
    );

    ttClientBookingDate?.addEventListener(
        "change",
        ttFilterClientBookings
    );


    /*--- Initial Filter ---*/
    ttFilterClientBookings();


    /*--- View Booking Buttons ---*/

    const ttClientBookingViewButtons =
        document.querySelectorAll(
            ".tt-client-booking-view, .tt-client-booking-card-btn"
        );

    ttClientBookingViewButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            window.location.href = "404.html";

        });

    });

});