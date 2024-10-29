let liveCount = 0;
let blankCount = 0;
let predictions = [];

function updateDisplay() {
    document.getElementById('live-count').innerText = liveCount;
    document.getElementById('blank-count').innerText = blankCount;
}

function addLive() {
    liveCount++;
    updateDisplay();
}

function removeLive() {
    if (liveCount > 0) {
        liveCount--;
        updateDisplay();
    }
}

function addBlank() {
    blankCount++;
    updateDisplay();
}

function removeBlank() {
    if (blankCount > 0) {
        blankCount--;
        updateDisplay();
    }
}

function addPrediction() {
    const count = parseInt(document.getElementById('prediction-count').value);
    const type = document.getElementById('prediction-type').value;

    if (!isNaN(count) && count > 0) {
        const prediction = { count, type };
        predictions.push(prediction);
        updatePredictionList();
        document.getElementById('prediction-count').value = '';
    }
}

function updatePredictionList() {
    const predictionList = document.getElementById('prediction-list');
    predictionList.innerHTML = '';

    predictions.forEach(prediction => {
        const li = document.createElement('li');
        li.textContent = `Предсказание: ${prediction.count} патронов - ${prediction.type}`;
        predictionList.appendChild(li);
    });
}

function shoot(type) {
    if (type === 'live') {
        removeLive();
    } else {
        removeBlank();
    }

    predictions.forEach((prediction, index) => {
        prediction.count--;
        if (prediction.count <= 0) {
            const historyList = document.getElementById('history-list');
            const historyItem = document.createElement('li');
            historyItem.textContent = `ВЫСТРЕЛИЛ ${prediction.type === 'live' ? 'ЖИВОЙ' : 'ХОЛОСТОЙ'} ${prediction.count} ПАТРОНОВ НАЗАД`;
            historyList.appendChild(historyItem);
            predictions.splice(index, 1);
        }
    });

    updatePredictionList();
}