// Select all chord buttons
const chordButtons = document.querySelectorAll(".chord-btn");

chordButtons.forEach(button => {
    button.addEventListener("click", () => {
        const chord = button.dataset.chord;
        const audio = new Audio(`assets/${chord}.mp3`);
        audio.currentTime = 0; // restart sound if clicked quickly
        audio.play();

        // Add click animation class and remove after animation ends
        button.classList.add('clicked');
        const onAnimEnd = () => {
            button.classList.remove('clicked');
            button.removeEventListener('animationend', onAnimEnd);
        };
        button.addEventListener('animationend', onAnimEnd);
    });
});
