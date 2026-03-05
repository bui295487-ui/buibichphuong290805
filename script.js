document.addEventListener('DOMContentLoaded', () => {
    // 1. Kích hoạt hiển thị ngay lập tức cho phần mở đầu
    const heroSection = document.querySelector('.hero-section.reveal');
    if (heroSection) {
        // Đợi 100ms để đảm bảo CSS đã tải xong rồi mới cho hiện mượt lên
        setTimeout(() => {
            heroSection.classList.add('active');
        }, 100);
    }

    // 2. Hiệu ứng Fade-in khi cuộn trang cho các phần còn lại
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Ngừng theo dõi phần tử này sau khi nó đã hiện ra để web nhẹ và mượt hơn
                observer.unobserve(entry.target);
            }
        });
    }, { 
        rootMargin: "0px",
        threshold: 0.15 // Kích hoạt khi người dùng cuộn thấy 15% nội dung
    });

    reveals.forEach(reveal => {
        // Không theo dõi lại heroSection vì đã xử lý ở bước 1
        if (!reveal.classList.contains('hero-section')) {
            observer.observe(reveal);
        }
    });

    // 3. Hiệu ứng cuộn mượt (Smooth Scroll) khi ấn vào menu
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
});
