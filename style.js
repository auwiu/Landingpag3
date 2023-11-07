const alienCards = document.querySelectorAll('.alien-card');
const alienInfo = document.querySelector('.alien-info');

alienCards.forEach(card => {
    card.addEventListener('click', () => {
        const selectedAlien = card.getAttribute('data-alien');
        displayAlienInfo(selectedAlien);
    });
});

function displayAlienInfo(alien) {
    const alienData = {
        Heatblast: "Heatblast is a fire-based alien who can shoot fire from his hands.",
        "Four Arms": "Four Arms is a strong and powerful alien with four arms."
        
    };

    if (alienData[alien]) {
        alienInfo.textContent = alienData[alien];
    } else {
        alienInfo.textContent = "Select an alien to learn more!";
    }
}
