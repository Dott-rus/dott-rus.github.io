const apiUrl = 'https://api.statusbadges.me/presence/578276833624195125';

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const status = document.getElementById('status');
        const statusCurrent = data.status || 'offline';
        if (status) {
            status.textContent = `Status: ${statusCurrent}`;
        }

        const statusListening = document.getElementById('listening');
        const spotify = data.activities.find(activity => activity.name === 'Spotify');
        if (statusListening) {
            if (spotify) {
                statusListening.textContent = `Listening: ${spotify.details} - ${spotify.state}`;
            } else {
                statusListening.textContent = 'Listening: nothing';
            }
        }

        const statusPlaying = document.getElementById('playing');
        const game = data.activities.find(activity => activity.type === 0);
        if (statusPlaying) {
            if (game) {
                statusPlaying.textContent = `Playing: ${game.name}`;
            } else {
                statusPlaying.textContent = 'Playing: nothing';
            }
        }
    })
    .catch(error => {
        console.error('Error fetching status:', error);
        const status = document.getElementById('status');
        if (status) {
            status.textContent = 'Status: offline';
        }
        const statusListening = document.getElementById('listening');
        if (statusListening) {
            statusListening.textContent = 'Listening: nothing';
        }
        const statusPlaying = document.getElementById('playing');
        if (statusPlaying) {
            statusPlaying.textContent = 'Playing: nothing';
        }
    });
