document.addEventListener("DOMContentLoaded", () => {
    const audios = document.querySelectorAll("audio");

    function formatTime(seconds)
    {
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }

    audios.forEach(audio => {
        const id = audio.id;

        const progressBar = document.querySelector(`.progress-bar[data-audio="${id}"]`);
        const currentTimeEl = document.querySelector(`.current-time[data-audio="${id}"]`);
        const durationEl = document.querySelector(`.duration[data-audio="${id}"]`);

        // Show duration when metadata is loaded
        audio.addEventListener("loadedmetadata", () => {
            durationEl.textContent = formatTime(audio.duration);
            progressBar.max = audio.duration;
        });

        // Update progress bar and time
        audio.addEventListener("timeupdate", () => {
            progressBar.value = audio.currentTime;
            currentTimeEl.textContent = formatTime(audio.currentTime);
        });

        // Allow user to seek
        progressBar.addEventListener("input", () => {
            audio.currentTime = progressBar.value;
        });
    });
});