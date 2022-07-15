function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }

    const containerEl = document.querySelector('body');
    const startBtn = document.querySelector('[data-start]');
    const stopBtn = document.querySelector('[data-stop]');

    let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
    containerEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
});


