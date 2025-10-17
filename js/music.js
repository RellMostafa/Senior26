let bgMusic;

function initMusic() {
    bgMusic = new Audio('/media/background-music.mp3');
    bgMusic.loop = true;
    bgMusic.volume = 0.3;

    const musicBtn = document.getElementById('toggleMusic');
    
    musicBtn.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicBtn.textContent = 'Music: On';
        } else {
            bgMusic.pause();
            musicBtn.textContent = 'Music: Off';
        }
    });
}

document.addEventListener('DOMContentLoaded', initMusic);