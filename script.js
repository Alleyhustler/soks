const orbitingImages = document.querySelectorAll('.sub-image');
const radius = 150; // Adjust radius of orbit
const speed = 0.005; // Reduced speed for slower orbit

function animate() {
    const time = Date.now() * speed;

    orbitingImages.forEach((img, index) => {
        const angle = time + (index * Math.PI * 2) / orbitingImages.length;
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        
        img.style.transform = `translate(${x}px, ${y}px)`;
    });

    requestAnimationFrame(animate);
}

animate();
