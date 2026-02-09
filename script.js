const startDate = new Date("2025-08-18T00:00:00"); // Ngày kỷ niệm của Ly và Bình Minh

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const timer = document.getElementById("timer");
    if (timer) {
        timer.innerHTML = `Đã bên nhau: ${days} ngày ${hours} giờ ${mins} phút ${secs} giây`;
    }
}
setInterval(updateTimer, 1000);
updateTimer();

// --- GIỮ NGUYÊN HÀM CỦA LY ---
let playing = true;
function toggleMusic() {
    const iframe = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    if (iframe && icon) {
        if (playing) {
            iframe.src = "";
            icon.innerText = "🔇";
        } else {
            iframe.src = "https://www.youtube.com/embed/OkXnZSafFns?autoplay=1&loop=1&playlist=OkXnZSafFns";
            icon.innerText = "🎵";
        }
        playing = !playing;
    }
}

const audio = document.getElementById("myAudio");
let isPlaying = false;

function handleMusic() {
    if (!audio) return;
    if (isPlaying) {
        audio.pause();
        document.getElementById("music-icon").innerText = "🔇";
        document.getElementById("music-control").style.animationPlayState = "paused";
    } else {
        audio.play().catch(error => console.log("Chờ tương tác người dùng..."));
        document.getElementById("music-icon").innerText = "🎵";
        document.getElementById("music-control").style.animationPlayState = "running";
    }
    isPlaying = !isPlaying;
}

// --- THÊM HÀM MỞ QUÀ CHO LY ---
function openGift() {
    const timer = document.getElementById("timer");
    const gift = document.getElementById("gift-container");

    // Phát nhạc "Phép Màu" khi nhấn vào thuyền
    if (!isPlaying) {
        handleMusic();
    }

    // Ẩn con thuyền và hiện đồng hồ lung linh
    if (gift && timer) {
        gift.style.display = "none";
        timer.style.display = "block";
        timer.classList.add("active");
    }
}

// Tự động phát khi Bình Minh chạm vào màn hình lần đầu tiên
document.addEventListener('click', function() {
    if(!isPlaying) {
        handleMusic();
    }
}, { once: true });
