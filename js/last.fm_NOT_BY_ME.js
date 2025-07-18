// vars
const parts = ['4c67', '2513', '1b21', '3c8d', '0955', '896b', '938a', '34b0'];
const apiKey = parts.join('');
const username = 'someDott';
let currentTrackName = '';

// script
function fetchCurrentTrack() {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${apiKey}&format=json`)
    .then(response => response.json())
    .then(data => {
        const recentTracks = data.recenttracks.track;
        if (recentTracks.length > 0) {
            const currentTrack = recentTracks[0];
            const newTrackName = currentTrack.name;

            if (newTrackName !== currentTrackName) {
                currentTrackName = newTrackName;
                document.getElementById('album-title').innerText = currentTrack.album['#text'];
                document.getElementById('track-title').innerText = currentTrack.name;
                document.getElementById('artist-name').innerText = currentTrack.artist['#text'];
                document.getElementById('album-cover').src = currentTrack.image[3]['#text'];

                // Add link for the track
                const trackLink = currentTrack.url;
                const linkElement = document.querySelector('.lastfm-link a'); // Target the <a> inside the <span>
                if (linkElement) {
                    linkElement.href = trackLink;
                    linkElement.innerText = 'See on Last.fm';
                }
            }
        } else {
            document.getElementById('album-title').innerText = 'No data';
            document.getElementById('track-title').innerText = '';
            const linkElement = document.querySelector('.lastfm-link a'); // Target the <a> inside the <span>
            if (linkElement) {
                linkElement.href = '#';
                linkElement.innerText = 'See on Last.fm';
            }
        }
    })
    .catch(error => console.error('error:', error));
}

setInterval(fetchCurrentTrack, 1000);
fetchCurrentTrack();