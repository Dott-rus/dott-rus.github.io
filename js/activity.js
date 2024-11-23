const apiUrl = 'https://api.statusbadges.me/presence/578276833624195125';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const status = document.getElementById('status');
        const statusCurrent = data.status;
        if (statusCurrent) {
            status.textContent = `Status: ${statusCurrent}`;
        }

        const statusListening = document.getElementById('listening');
        const yandexMusic = data.activities.find(activity => activity.name === 'Spotify');
        if (yandexMusic) {
            statusListening.textContent = `Listening: ${yandexMusic.details} - ${yandexMusic.state}`;
        }

        const statusAPP = document.getElementById('APP');
        const game = data.activities.find(activity => activity.type === 0);
        if (game) {
            statusAPP.textContent = `Playing: ${game.name}`;
        }
    })
    .catch(error => {
        statusText.textContent = 'Error loading status';
    });