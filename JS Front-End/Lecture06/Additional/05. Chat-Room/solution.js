function solve() {
   const btn = document.getElementById('send');
   const chatBody = document.getElementById('chat_messages');

   btn.addEventListener('click', x => {
      const text = document.getElementById('chat_input');
      if (text.value) {
         const newMsg = document.createElement('div');
         newMsg.className += 'message my-message'; 
         newMsg.innerHTML = text.value;
         text.value = '';
         chatBody.appendChild(newMsg);
      }
   });
}


