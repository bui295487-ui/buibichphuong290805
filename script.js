const cards = document.querySelectorAll('.slide-item');

cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Vị trí X của chuột trong thẻ
        const y = e.clientY - rect.top;  // Vị trí Y của chuột trong thẻ

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Tính toán độ nghiêng (xoay tối đa 10 độ)
        const rotateX = (centerY - y) / 10;
        const rotateY = (x - centerX) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
    });
});
