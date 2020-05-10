function attachEventsListeners() {
    const btns = document.querySelectorAll('input[type="button"]');
    const fields = document.querySelectorAll('input[type="text"]');

    const outputTime = (value, id) => {
        const setDate = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
        if (value) {
            setDate[id] = value;
        }
    };

    [...btns].forEach(btn => {
        btn.addEventListener('click', (ev) => {
            const type = ev.currentTarget.parentElement
            const elementType = type.children[1].getAttribute('id');
            const elementValue = type.children[1].value;

            outputTime(elementValue, elementType);
        });
    });
}