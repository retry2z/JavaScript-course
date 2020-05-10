function stopwatch() {
    const timerDisplay = document.getElementById('time');
    const startBttn = document.getElementById('startBtn');
    const resetBttn = document.getElementById('stopBtn');
    const time = new Date(0);
    let countTime;

    const myTimer = () => {
        time.setSeconds(time.getSeconds() + 1);
        timerDisplay.textContent =
            time.getMinutes()
                .toString()
                .padStart(2, '0')
            + ":" +
            time.getSeconds()
                .toString()
                .padStart(2, '0');
    };

    startBttn.addEventListener('click', () => {
            timerDisplay.textContent = '00:00';
            time.setSeconds(0);            
            time.setMinutes(0);
            countTime = window.setInterval(myTimer, 1000);
            startBttn.setAttribute('disabled', true);
            resetBttn.removeAttribute('disabled');        
    });

    resetBttn.addEventListener('click', () => {
            window.clearTimeout(countTime);            
            startBttn.removeAttribute('disabled');
            resetBttn.setAttribute('disabled', true);        
    });
}