let currentIndex = 0;

const btn = document.getElementById("catchBtn");
const music = document.getElementById("bgMusic");

const startTime = 40;   // start point (seconds)
const endTime = 72;     // end point (seconds)

// start music at defined point
function playSegment() {
    music.currentTime = startTime;
    music.play();
}

// loop control
music.addEventListener("timeupdate", () => {
    if (music.currentTime >= endTime) {
        music.currentTime = startTime;
        music.play();
    }
});

// 💖 MOVE BUTTON (FIXED)
function moveButton() {
    const game = document.getElementById("game");

    const maxX = game.clientWidth - 120;
    const maxY = game.clientHeight - 60;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

// 🔥 start movement properly
setInterval(moveButton, 900

);

function unlock() {
    document.getElementById("game").style.display = "none";
    document.getElementById("main").style.display = "block";

    playSegment(); // 🎧 start loop segment
}

// 🎠 carousel
function updateSlide() {
    const track = document.querySelector(".carousel-track");
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    const slides = document.querySelectorAll(".slide");
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
}

function prevImage() {
    const slides = document.querySelectorAll(".slide");
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
}