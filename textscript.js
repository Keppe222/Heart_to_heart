document.addEventListener('DOMContentLoaded', () => {
    const roller = ["Love", "Warmth", "Comfort", "Happiness", "Joy", "Sweet", "Calm", "Together"];
    const container = document.querySelector('.fading-container');

    function showRandomText() {
        // Choose a random phrase
        const randomPhrase = roller[Math.floor(Math.random() * roller.length)];
        
        // Create a new span element for the random phrase
        const textElement = document.createElement('span');
        textElement.classList.add('fading-text');
        textElement.textContent = randomPhrase;

        // Set a random position within the container
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const randomX = Math.random() * (containerWidth - 100); // Offset to keep text within bounds
        const randomY = Math.random() * (containerHeight - 30);

        textElement.style.position = 'absolute';
        textElement.style.left = `${randomX}px`;
        textElement.style.top = `${randomY}px`;
        textElement.style.opacity = 0; // Start hidden

        // Append to container and apply fade in/out animation
        container.appendChild(textElement);
        textElement.animate([
            { opacity: 0 },
            { opacity: 1, offset: 0.3 },
            { opacity: 0 }
        ], {
            duration: 2000, // 2 seconds fade-in/out
            easing: 'ease-in-out'
        });

        // Remove element after animation completes
        setTimeout(() => {
            textElement.remove();
        }, 20000);

        // Set a random interval for the next text to appear
        setTimeout(showRandomText, 10 + Math.random() * 20);
    }

    showRandomText(); // Start the initial text fade
});