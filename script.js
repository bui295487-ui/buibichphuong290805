document.addEventListener('DOMContentLoaded', () => {
    // 1. Hiệu ứng cuộn mượt (Smooth Scroll)
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

    // 2. Hiệu ứng Fade-in khi cuộn trang (Intersection Observer)
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 }); // Kích hoạt khi thấy 10% nội dung

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
});
