const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    // loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});

const cards = document.querySelectorAll(".view-more");

cards.forEach((item) => {
    item.addEventListener("click", () => {
        const popupEl = ".popup-" + item.getAttribute("id");
        const popups = document.querySelectorAll(`${popupEl}`);
        // console.log(popups);
        popups.forEach((popup) => {
            popup.classList.remove("hidden");
        });
    });
});

const closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach((closeBtn) => {
    closeBtn.addEventListener("click", () => {
        const popupEl = closeBtn.getAttribute("id");
        const popups = document.querySelectorAll(".popup");
        popups.forEach((popup) => {
            if (popup.classList.contains(`${popupEl}`)) {
                popup.classList.add("hidden");
                console.log(popup);
            }
        });
    });
});
