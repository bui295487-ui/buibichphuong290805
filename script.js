document.addEventListener('DOMContentLoaded', () => {
    // Hiệu ứng cuộn trang mượt mà (Smooth scrolling) cho các liên kết menu
    const links = document.querySelectorAll('.nav-links a, .hero-content a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Cuộn xuống vị trí tương ứng, trừ đi chiều cao của thanh header (khoảng 70px)
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});
