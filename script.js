const startDate = new Date("2025-08-18T00:00:00");

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
// Hàm bật/tắt nhạc
let playing = true;
function toggleMusic() {
    const iframe = document.getElementById('bg-music');
    const icon = document.getElementById('music-icon');
    if (playing) {
        iframe.src = "";
        icon.innerText = "🔇";
    } else {
        iframe.src = "https://www.youtube.com/embed/OkXnZSafFns?autoplay=1&loop=1&playlist=OkXnZSafFns";
        icon.innerText = "🎵";
    }
    playing = !playing;
}
