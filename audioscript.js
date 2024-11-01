document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-audio');
    const volumeSlider = document.getElementById('volume-slider');
    const volumeLabel = document.getElementById('volume-label');
    const soundSelect = document.getElementById('sound-select');

    // Initialize audio settings
    audio.volume = 0;
    audio.muted = true;

    // Play audio after user interaction (e.g., click)
    document.body.addEventListener('click', () => {
        audio.play();
    }, { once: true }); // Only trigger this once

    // Update volume when the slider changes
    volumeSlider.addEventListener('input', () => {
        const volume = volumeSlider.value / 100; // Convert slider value to 0 - 1 for audio volume
        audio.volume = volume;
        
        // Unmute the audio if volume is above 0, otherwise mute it
        audio.muted = volume === 0;

        // Update the label to show the percentage
        volumeLabel.textContent = `${volumeSlider.value}%`;
    });

    soundSelect.addEventListener('change', (event) => {
        const selectedSound = event.target.value; // Get the selected file path
        audio.src = selectedSound; // Set the new audio source
        audio.play(); // Play the new sound immediately
    });
});