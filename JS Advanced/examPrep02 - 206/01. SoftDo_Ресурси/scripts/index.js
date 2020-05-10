// NOTE: The comment sections inside the index.html file is an example of how suppose to be structured the current elements.
//       - You can use them as an example when you create those elements, to check how they will be displayed, just uncomment them.
//       - Also keep in mind that, the actual skeleton in judge does not have this comment sections. So do not be dependent on them!
//       - Тhey are present in the skeleton just to help you!


function mySolution() {

    const elements = {
        question: document.querySelector('#inputSection textarea'),
        user: document.querySelector('#inputSection div input[type=username]'),
        sendBtn: document.querySelector('#inputSection div button'),
        pendingQuestions: document.getElementById('pendingQuestions'),
        openQuestions: document.querySelector('#openQuestions'),
    };

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
    };

    //Add Listeners


    elements.sendBtn.addEventListener('click', () => {
        const user = elements.user.value || 'Anonymous';
        const question = elements.question.value;

        const questionElement = generatePendingQuestion(user, question);
        elements.pendingQuestions.appendChild(questionElement);
    });

    // Generating Question Sections


    function generatePendingQuestion(user, question) {
        const divElement = createNewHTMLElement('div', 'pendingQuestion');
        const imgElement = createNewHTMLElement(
            'img',
            null,
            null,
            [
                { name: 'src', value: './images/user.png' },
                { name: 'width', value: '32', },
                { name: 'height', value: '32' },
            ]
        );
        const spanElement = createNewHTMLElement('span', null, user);
        const pElement = createNewHTMLElement('p', null, question);

        const divActionElement = createNewHTMLElement('div', 'actions');
        const buttonActionArchiveElement =
            createNewHTMLElement(
                'button', 'archive', 'Archive', null, { type: 'click', func: archiveQuestion });
        const buttonActionOpenElement =
            createNewHTMLElement('button', 'open', 'Open', null, { type: 'click', func: openQuestion });

        divActionElement.appendChild(buttonActionArchiveElement);
        divActionElement.appendChild(buttonActionOpenElement);

        divElement.appendChild(imgElement);
        divElement.appendChild(spanElement);
        divElement.appendChild(pElement);
        divElement.appendChild(divActionElement);

        return divElement;
    }

    function generateOpenQuestion(user, question) {
        const divElement = createNewHTMLElement('div', 'openQuestion');
        const imgElement = createNewHTMLElement(
            'img',
            null,
            null,
            [
                { name: 'src', value: './images/user.png' },
                { name: 'width', value: '32' },
                { name: 'height', value: '32' },
            ]
        );
        const spanElement = createNewHTMLElement('span', null, user);
        const pElement = createNewHTMLElement('p', null, question);

        const divActionElement = createNewHTMLElement('div', 'actions');
        const buttonActionReplyElement =
            createNewHTMLElement(
                'button', 'reply', 'Reply', null, { type: 'click', func: replyQuestion }
            );

        const divReplySectionElement =
            createNewHTMLElement(
                'div', 'replySection', null
            );
        divReplySectionElement.style.display = "none";
        const inputReplySectionElement =
            createNewHTMLElement(
                'input',
                'replyInput',
                null,
                [
                    { name: 'type', value: 'text' },
                    { name: 'placeholder', value: 'Reply to this question here...' }
                ]
            );
        const buttonReplySectionElement =
            createNewHTMLElement(
                'button',
                'replyButton',
                'Send',
                null,
                { type: 'click', func: ansQuestion }
            );
        const olListReplyElement =
            createNewHTMLElement(
                'ol',
                'reply',
                null,
                [{ name: 'type', value: "1" }],
            );

        divReplySectionElement.appendChild(inputReplySectionElement);
        divReplySectionElement.appendChild(buttonReplySectionElement);
        divReplySectionElement.appendChild(olListReplyElement);

        divActionElement.appendChild(buttonActionReplyElement);

        divElement.appendChild(imgElement);
        divElement.appendChild(spanElement);
        divElement.appendChild(pElement);
        divElement.appendChild(divActionElement);
        divElement.appendChild(divReplySectionElement);

        return divElement;
    }

    // Buttons functionality


    function archiveQuestion(ev) {
        ev.currentTarget.parentNode.parentNode.remove();
    }

    function openQuestion(ev) {
        const user = ev.currentTarget.parentNode.parentNode.querySelector('span').textContent;
        const question = ev.currentTarget.parentNode.parentNode.querySelector('p').textContent;
        const openQuestion = generateOpenQuestion(user, question);
        elements.openQuestions.appendChild(openQuestion)
    }

    function replyQuestion() {
        const button = this.parentNode.parentNode.querySelector('.actions button');
        const inputSection = this.parentNode.parentNode.querySelector('.replySection');

        const stage = {
            "Back": () => {
                button.textContent = 'Reply';
                inputSection.style.display = 'none';
            },
            "Reply": () => {
                button.textContent = 'Back';
                inputSection.style.display = 'block';
            }
        }
        stage[button.textContent]();
    }

    function ansQuestion() {
        const [input, button, ol] = Array.from(this.parentNode.children);

        //console.log(input, button, ol);
        const liElement = document.createElement('li');
        liElement.textContent = input.value;
        ol.appendChild(liElement);
    }
}
