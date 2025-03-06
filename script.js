// document.addEventListener("DOMContentLoaded", function () {
//     alert("Welcome to my AI Portfolio Website!");
// });

// Slideshow Logic
document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".slide img");
    let index = 0;

    function showSlide() {
        slides.forEach((img, i) => {
            img.style.display = i === index ? "block" : "none";
        });
        index = (index + 1) % slides.length;
    }

    showSlide();
    setInterval(showSlide, 3000);
});

// Open Fullscreen Image
function openFullscreen(imgElement) {
    let fullscreenContainer = document.getElementById("fullscreenViewer");
    let fullscreenImage = document.getElementById("fullscreenImage");

    fullscreenImage.src = imgElement.src;
    fullscreenContainer.style.display = "flex";
}

// Close Fullscreen Image
function closeFullscreen() {
    document.getElementById("fullscreenViewer").style.display = "none";
}

