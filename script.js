const startDate = new Date("2025-08-18T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((diff / 1000 / 60) % 60);
    const secs = Math.floor((diff / 1000) % 60);

    const timerDiv = document.getElementById("timer");
    if (timerDiv) {
        timerDiv.innerHTML = `Đã đồng hành cùng nhau: ${days} ngày ${hours} giờ ${mins} phút ${secs} giây`;
    }
}

setInterval(updateTimer, 1000);
updateTimer();
