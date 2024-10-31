document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.fading-text span');
    let activeText = -1;

    function fadeText() {
        if (activeText !== -1) {
            texts[activeText].style.opacity = 0; // Hide previous text
        }

        activeText = Math.floor(Math.random() * texts.length);
        texts[activeText].style.opacity = 1; // Show new text

        // Set a random interval to change text again (2-4 seconds)
        setTimeout(fadeText, 2000 + Math.random() * 2000);
    }

    fadeText(); // Start the initial text fade
});