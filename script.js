document.addEventListener('DOMContentLoaded', () => {
    const phrases = ["Love", "Compassion", "Hope", "Kindness", "Joy"]; // Random words

    document.addEventListener('click', (e) => {
        // Get random phrase
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        
        // Create a new span element with the random text
        const textElement = document.createElement('span');
        textElement.classList.add('click-text');
        textElement.textContent = randomPhrase;

        // Position the element at the click location
        textElement.style.position = 'absolute';
        textElement.style.left = `${e.pageX}px`;
        textElement.style.top = `${e.pageY}px`;
        textElement.style.transform = 'translate(-50%, -50%)';

        // Append the element to the body
        document.body.appendChild(textElement);

        // Remove the element after the animation ends (2s in this case)
        setTimeout(() => {
            textElement.remove();
        }, 2000);
    });
});