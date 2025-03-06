document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my AI Portfolio Website!");
});

document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to my AI Portfolio Website!");

    let slides = document.querySelectorAll(".cert-slide");
    let index = 0;

    function showSlide() {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % slides.length;
    }

    showSlide();
    setInterval(showSlide, 3000);
});
