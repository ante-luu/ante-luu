document.addEventListener('DOMContentLoaded', function () {
    const marquee = document.querySelector('.marquee');
    const marqueeInner = document.querySelector('.marquee__inner');
    if (!marquee || !marqueeInner) return;

    let pos = 0;
    const speed = 0.3; // px per frame
    const innerWidth = marqueeInner.scrollWidth / 2; // половина, т.к. контент дублируется

    function animate() {
        pos -= speed;
        if (Math.abs(pos) >= innerWidth) {
            pos = 0;
        }
        marqueeInner.style.transform = `translateX(${pos}px)`;
        requestAnimationFrame(animate);
    }
    animate(); 
}); 