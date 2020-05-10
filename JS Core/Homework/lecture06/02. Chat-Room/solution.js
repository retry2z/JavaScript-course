function solve() {
    let chatInput = document.getElementById("chat_input");
    let chatBody = document.getElementById("chat_messages");

    let sendButton = document.getElementById("send");
    sendButton.addEventListener('click', (e) => {
        if (chatInput.value) {
            chatBody.innerHTML += `<div class=\"message my-message\">${chatInput.value}</div>`;
            chatInput.value = null;
        }
    });
}



