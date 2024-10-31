document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeLabel = document.getElementById('volume-label');

    // Ensure audio starts muted
    audio.volume = 0;
    audio.muted = true;

    // Start playing audio automatically (some browsers may require user interaction)
    audio.play().catch(error => {
        console.log("Autoplay was prevented. User interaction is required to play audio.");
    });

    // Update volume when slider value changes
    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value / 100;
        audio.volume = volume;
        audio.muted = volume === 0; // Mute if volume is at 0
        volumeLabel.textContent = `${volumeSlider.value}%`; // Update label
    });
});