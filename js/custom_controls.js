document.addEventListener("DOMContentLoaded", () => {
    const playButtons = document.querySelectorAll(".play-button");
    const toggleButtons = document.querySelectorAll(".control-btn.toggle");
    const rewindButtons = document.querySelectorAll(".control-btn.rewind");
    const forwardButtons = document.querySelectorAll(".control-btn.forward");
    const players = document.querySelectorAll(".custom-player");
    const audios = document.querySelectorAll("audio");

    function hideAllPlayersExcept(currentId)
    {
        players.forEach(player => {
            if (!player.id.endsWith(currentId)) {
                player.style.display = "none";
            }
        });

        audios.forEach(audio => {
            if (audio.id !== currentId) {
                audio.pause();
                audio.currentTime = 0;
            }
        });

        toggleButtons.forEach(btn => {
            if (btn.getAttribute("data-audio") !== currentId) {
                btn.innerHTML = '<i class="fas fa-pause"></i>';
            }
        });
    }

    playButtons.forEach(button => {
        button.addEventListener("click", () => {
            const audioId = button.getAttribute("data-audio");
            const audio = document.getElementById(audioId);
            const player = document.getElementById("player-" + audioId);

            hideAllPlayersExcept(audioId);

            player.style.display = "flex";
            audio.play();
        });
    });

    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const audioId = button.getAttribute("data-audio");
            const audio = document.getElementById(audioId);

            if (audio.paused) {
                audio.play();
                button.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                audio.pause();
                button.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    });

    rewindButtons.forEach(button => {
        button.addEventListener("click", () => {
            const audio = document.getElementById(button.getAttribute("data-audio"));
            audio.currentTime = Math.max(0, audio.currentTime - 5);
        });
    });

    forwardButtons.forEach(button => {
        button.addEventListener("click", () => {
            const audio = document.getElementById(button.getAttribute("data-audio"));
            audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        });
    });
});

