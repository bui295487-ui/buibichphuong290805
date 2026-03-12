document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Chỉ chạy 1 lần
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll(".fade-in");
    fadeElements.forEach(el => observer.observe(el));
});
document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các phần tử có class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');

    // Tạo một observer để theo dõi khi nào các phần tử này xuất hiện trên màn hình
    const appearOptions = {
        threshold: 0.15, // Kích hoạt khi cuộn thấy 15% phần tử
        rootMargin: "0px 0px -50px 0px" // Kích hoạt sớm một chút trước khi cuộn tới hẳn
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Thêm class 'appear' để CSS chạy animation
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = 1;
                // Ngừng theo dõi sau khi đã xuất hiện
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Bắt đầu theo dõi các phần tử
    fadeElements.forEach(el => {
        // Tạm dừng animation lúc mới load, chờ cuộn chuột tới mới chạy
        el.style.animationPlayState = 'paused'; 
        appearOnScroll.observe(el);
    });
});
