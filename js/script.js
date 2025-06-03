document.addEventListener('DOMContentLoaded', () => {
    const playButtons = document.querySelectorAll('.play-button');
    const audioPlayers = document.querySelectorAll('.audio-player');

    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioId = button.getAttribute('data-audio');
            const thisAudio = document.getElementById(audioId);

            // Pause all others
            audioPlayers.forEach(audio => {
                if (audio !== thisAudio) {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.style.display = 'none';
                }
            });

            // Toggle this audio
            if (thisAudio.style.display === 'block') {
                thisAudio.pause();
                thisAudio.currentTime = 0;
                thisAudio.style.display = 'none';
                button.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                thisAudio.style.display = 'block';
                thisAudio.play();
                button.innerHTML = '<i class="fas fa-pause"></i>';
            }
        });
    });

    // Hide all audio players initially
    audioPlayers.forEach(audio => {
        audio.style.display = 'none';
    });
});