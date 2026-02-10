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
document.addEventListener('DOMContentLoaded', () => {
    // ... (Giữ nguyên các hàm hiện có của Ly) ...

    const sixMonthsLetterSection = document.getElementById('six-months-letter');
    const typedTextElement = document.getElementById('typed-text');
    const letterContent = `Thế là mình đã đi cùng nhau được 6 tháng rồi anh nhỉ?
Cảm ơn anh vì nửa năm qua đã luôn ở bên, chiều chuộng và kiên nhẫn với những suy nghĩ vu vơ của em. Em không hứa những ngày sau này lúc nào cũng toàn màu hồng, nhưng em hứa sẽ luôn cùng anh chia sẻ, cùng anh trưởng thành và trân trọng từng phút giây mình có nhau.
Chúc mừng kỉ niệm 6 tháng của chúng mình. Mong là nhiều cái 6 tháng nữa, em vẫn được là người ở bên cạnh anh.`; // Thêm cả đoạn "Yêu anh rất nhiều!" vào đây nếu muốn nó đánh máy cùng

    let charIndex = 0;
    let typingInterval;

    function typeLetter() {
        if (charIndex < letterContent.length) {
            typedTextElement.textContent += letterContent.charAt(charIndex);
            charIndex++;
            typedTextElement.style.borderRightColor = 'rgba(220, 200, 160, 0.7)'; // Giữ con trỏ khi đang gõ
        } else {
            clearInterval(typingInterval);
            typedTextElement.style.borderRightColor = 'transparent'; // Ẩn con trỏ khi gõ xong
        }
    }

    // Hàm kiểm tra khi người dùng cuộn đến trang thư
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.target.id === 'six-months-letter') {
                if (!typingInterval) { // Chỉ chạy một lần
                    typedTextElement.textContent = ''; // Xóa nếu đã có text cũ
                    charIndex = 0;
                    typingInterval = setInterval(typeLetter, 50); // Tốc độ đánh máy (50ms/chữ)
                }
            } else {
                // Tùy chọn: Reset lại hoặc làm gì đó khi rời khỏi trang
                // clearInterval(typingInterval);
                // typedTextElement.textContent = '';
                // typingInterval = null;
            }
        });
    }, { threshold: 0.5 }); // Khi 50% trang hiển thị trên màn hình

    if (sixMonthsLetterSection) {
        observer.observe(sixMonthsLetterSection);
    }
});
