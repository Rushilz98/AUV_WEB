document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(el => {
                    const target = parseInt(el.getAttribute('data-value'));
                    let count = 0;
                    // Slow down the animation by:
                    // 1. Reducing increment amount (target / 100 instead of 50)
                    // 2. Increasing interval duration (50ms instead of 30ms)
                    const increment = Math.ceil(target / 70); 
                    
                    const timer = setInterval(() => {
                        count += increment;
                        // Add smooth easing effect
                        count = Math.min(count, target); 
                        
                        el.textContent = count.toLocaleString();
                        
                        if (count >= target) {
                            clearInterval(timer);
                            el.textContent = target.toLocaleString();
                        }
                    }, 50); // Increased interval duration
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(document.querySelector('.stats-section'));
});

document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const items = document.querySelectorAll('.sponsor-item');
    
    // Duplicate items for infinite loop
    track.innerHTML += track.innerHTML;
    
    let isHovered = false;
    
    track.addEventListener('mouseenter', () => {
        isHovered = true;
    });
    
    track.addEventListener('mouseleave', () => {
        isHovered = false;
    });
    
    function animate() {
        if (!isHovered) {
            track.style.transform = `translateX(-${track.scrollWidth / 2 * (Date.now() / 20000)}px)`;
        }
        requestAnimationFrame(animate);
    }
    
    animate();
});