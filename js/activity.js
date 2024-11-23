const apiUrl = 'https://api.statusbadges.me/presence/578276833624195125';

// Store previous values to compare
let prevStatus = '';
let prevListening = '';
let prevPlaying = '';

function updateStatus() {
    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 5 second timeout

    fetch(apiUrl, {
        signal: controller.signal
    })
        .then(response => {
            clearTimeout(timeoutId);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const status = document.getElementById('status');
            const statusCurrent = data.status || 'offline';
            const newStatusText = `Status: ${statusCurrent}`;
            if (status && newStatusText !== prevStatus) {
                status.style.opacity = '0';
                setTimeout(() => {
                    status.textContent = newStatusText;
                    status.style.opacity = '1';
                }, 200);
                prevStatus = newStatusText;
            }

            const statusListening = document.getElementById('listening');
            const spotify = data.activities.find(activity => activity.name === 'Spotify');
            const newListeningText = spotify ? `Listening: ${spotify.details} - ${spotify.state}` : 'Listening: nothing';
            if (statusListening && newListeningText !== prevListening) {
                statusListening.style.opacity = '0';
                setTimeout(() => {
                    statusListening.textContent = newListeningText;
                    statusListening.style.opacity = '1';
                }, 200);
                prevListening = newListeningText;
            }

            const statusPlaying = document.getElementById('playing');
            const game = data.activities.find(activity => activity.type === 0);
            const newPlayingText = game ? `Playing: ${game.name}` : 'Playing: nothing';
            if (statusPlaying && newPlayingText !== prevPlaying) {
                statusPlaying.style.opacity = '0';
                setTimeout(() => {
                    statusPlaying.textContent = newPlayingText;
                    statusPlaying.style.opacity = '1';
                }, 200);
                prevPlaying = newPlayingText;
            }
        })
        .catch(error => {
            clearTimeout(timeoutId);
            console.error('Error fetching status:', error);
            const newStatusText = 'Status: offline';
            const newListeningText = 'Listening: nothing';
            const newPlayingText = 'Playing: nothing';
            
            const elements = [
                { id: 'status', text: newStatusText, prev: prevStatus },
                { id: 'listening', text: newListeningText, prev: prevListening },
                { id: 'playing', text: newPlayingText, prev: prevPlaying }
            ];

            elements.forEach(({ id, text, prev }) => {
                const element = document.getElementById(id);
                if (element && text !== prev) {
                    element.style.opacity = '0';
                    setTimeout(() => {
                        element.textContent = text;
                        element.style.opacity = '1';
                    }, 200);
                }
            });

            prevStatus = newStatusText;
            prevListening = newListeningText;
            prevPlaying = newPlayingText;
        });
}

// Add transition style to status elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = ['status', 'listening', 'playing'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.style.transition = 'opacity 0.2s ease-in-out';
        }
    });
});

// Initial update
updateStatus();

// Update every 3 seconds
setInterval(updateStatus, 6000);
