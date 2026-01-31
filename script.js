document.addEventListener('DOMContentLoaded', () => {
    console.log("%c System Active: TerminaI Interface Loaded ", "background: #000; color: #0f0; padding: 5px; border: 1px solid #0f0;");

    // Optional: Add subtle mouse movement parallax to the glow background
    const glowBg = document.querySelector('.glow-bg');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        glowBg.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });

    // Card Hover Effect for Flagship
    const flagship = document.querySelector('.flagship');
    if (flagship) {
        flagship.addEventListener('mousemove', (e) => {
            const rect = flagship.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Update CSS variables for glow position if we were using them, 
            // but for now let's just do a subtle tilt or just leave the CSS hover.
            // Actually, let's move the .card-glow element
            const glow = flagship.querySelector('.card-glow');
            if (glow) {
                glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0) 70%)`;
            }
        });
        
        flagship.addEventListener('mouseleave', () => {
             const glow = flagship.querySelector('.card-glow');
             if (glow) {
                 glow.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 70%)`;
             }
        });
    }
});
