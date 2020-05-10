function solution() {
    htmlElements = {
        input: document.querySelector('div > section:nth-child(1) > div > input[type=text]'),
        inputBtn: document.querySelector('div > section:nth-child(1) > div > button'),
        giftList: document.querySelector('div > section:nth-child(2) > ul'),
        sendedList: document.querySelector('div > section:nth-child(3) > ul'),
        discardedList: document.querySelector('div > section:nth-child(4) > ul'),
    }

    //Declaration parts


    const createNewHTMLElement = (htmlTag, classProperty, textContainer, attributes, event) => {
        const element = document.createElement(htmlTag);
        if (classProperty) {
            element.className = classProperty;
        }
        if (textContainer) {
            element.textContent = textContainer;
        }
        if (attributes) {
            attributes.forEach(attribute => {
                element.setAttribute(attribute.name, attribute.value);
            });
        }
        if (event) {
            element.addEventListener(event.type, event.func);
        }
        return element;
    }

    const clearFields = () => {
        htmlElements.input.value = '';
    }

    //Add even listener


    htmlElements.inputBtn.addEventListener('click', function () {
        const text = htmlElements.input.value;
        htmlElements.giftList.appendChild(generateGift(text));
        sortGiftList();
        clearFields();
    });

    function generateGift(text) {
        const liItem = createNewHTMLElement('li', 'gift', text);
        const sendButton =
            createNewHTMLElement(
                'button', null, 'Send', [{ name: 'id', value: 'sendButton' }], { type: 'click', func: forwardGift }
            );
        const discardButton =
            createNewHTMLElement(
                'button', null, 'Discard', [{ name: 'id', value: 'discardButton' }], { type: 'click', func: forwardGift }
            );

        liItem.appendChild(sendButton);
        liItem.appendChild(discardButton);

        return liItem;
    }

    function sortGiftList() {
        const sorted = Array.from(htmlElements.giftList.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent));

        Array.from(htmlElements.giftList.children).forEach(x => x.remove());
        sorted.forEach(x => htmlElements.giftList.appendChild(x));
    }

    //Button functionality

    function forwardGift() {
        const state = {
            'Send': () => htmlElements.sendedList.appendChild(clone),
            'Discard': () => htmlElements.discardedList.appendChild(clone),
        }
        const clone = this.parentNode.cloneNode(true);
        Array.from(clone.children).forEach(item => item.remove());

        this.parentNode.remove();

        state[this.textContent]();
    }
}