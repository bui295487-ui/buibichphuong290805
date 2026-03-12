document.addEventListener("DOMContentLoaded", function() {
    // Lấy tất cả các phần tử có class 'fade-in'
    const fadeElements = document.querySelectorAll('.fade-in');

    // Tạo observer để theo dõi khi cuộn tới
    const appearOptions = {
        threshold: 0.15, // Kích hoạt khi cuộn thấy 15% phần tử
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Kích hoạt animation khi cuộn tới
                entry.target.style.animationPlayState = 'running';
                entry.target.style.opacity = 1;
                // Ngừng theo dõi để không chạy lại animation nhiều lần
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    // Bắt đầu theo dõi các phần tử
    fadeElements.forEach(el => {
        // Tạm dừng animation lúc mới load trang
        el.style.animationPlayState = 'paused'; 
        appearOnScroll.observe(el);
    });
});
