document.addEventListener("DOMContentLoaded", function() {
    // 1. Phân loại link cuộn trang và link chuyển trang
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Chỉ tạo hiệu ứng cuộn mượt nếu link là trỏ đến 1 phần trong CÙNG 1 trang (bắt đầu bằng #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.getElementById(href.substring(1));
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
            // Nếu link là chuyển sang trang khác (như experience.html), cứ để trình duyệt chuyển trang bình thường
        });
    });

    // 2. Hiệu ứng hiện dần khi cuộn trang
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 50;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    
    window.addEventListener("scroll", reveal);
    reveal(); 
});
