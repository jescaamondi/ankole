const menuPanel = document.getElementById("menu-panel");
const hoursPanel = document.getElementById("hours-panel");

document.querySelector(".menu-toggle").addEventListener("click", () => {
    hoursPanel.classList.remove("open");
    menuPanel.classList.add("open");
});

document.querySelector(".close-btn").addEventListener("click", () => {
    menuPanel.classList.remove("open");
});

document.querySelector(".clock").addEventListener("click", () => {
    hoursPanel.classList.toggle("open");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        menuPanel.classList.remove("open");
        hoursPanel.classList.remove("open");
        closeLightbox();
    }
});

const reviews = document.querySelectorAll(".review");
let currentReview = 0;

function showReview(index) {
    reviews[currentReview].classList.remove("active");
    currentReview = (index + reviews.length) % reviews.length;
    reviews[currentReview].classList.add("active");
}

if (reviews.length > 0) {
    document.getElementById("next-slide").addEventListener("click", () => showReview(currentReview + 1));
    document.getElementById("prev-slide").addEventListener("click", () => showReview(currentReview - 1));
    setInterval(() => showReview(currentReview + 1), 7000);
}

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        document.querySelectorAll(".menu-section").forEach((section) => section.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(tab.dataset.tab).classList.add("active");
    });
});

const lightbox = document.getElementById("lightbox");

function closeLightbox() {
    if (lightbox) {
        lightbox.classList.remove("open");
    }
}

if (lightbox) {
    const lightboxImage = lightbox.querySelector("img");

    document.querySelectorAll(".gallery-grid img").forEach((image) => {
        image.addEventListener("click", () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add("open");
        });
    });

    lightbox.addEventListener("click", (event) => {
        if (event.target !== lightboxImage) {
            closeLightbox();
        }
    });
}

const reservationForm = document.querySelector(".form-container");

if (reservationForm) {
    reservationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        document.querySelector(".form-message").textContent =
            "Thank you! This is a practice form, so nothing was sent. To book a real table, contact Ankole Grill directly.";
        reservationForm.reset();
    });
}
