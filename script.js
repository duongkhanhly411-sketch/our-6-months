// Cập nhật ngày kỷ niệm chính xác của Ly và Bình Minh
const startDate = new Date("2025-08-18T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // Hiển thị ra màn hình
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.innerHTML = `
            <div style="font-size: 1.5rem; margin-bottom: 10px;">${days} ngày</div>
            <div style="font-size: 1rem;">${hours} giờ ${minutes} phút ${seconds} giây</div>
        `;
    }
}

// Cập nhật mỗi giây
setInterval(updateTimer, 1000);
updateTimer();
