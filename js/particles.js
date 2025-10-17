function createParticles() {
    const container = document.querySelector('.particles-container');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random initial position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random movement
        particle.style.setProperty('--move-y', `${-50 - Math.random() * 100}px`);
        particle.style.setProperty('--move-x', `${-50 + Math.random() * 100}px`);
        particle.style.setProperty('--duration', `${8 + Math.random() * 7}s`);
        
        container.appendChild(particle);
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);