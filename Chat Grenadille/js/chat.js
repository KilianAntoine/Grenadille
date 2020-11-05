
// websocket.onopen = function(event) {
// 	MessageAdd('<div class="message green">Bienvenue dans de le chat</div>');
// };

// // on websocket close:
// websocket.onclose = function(event) {
// 	MessageAdd('<div class="message blue">Au revoir</div>');
// };

// // on websocket error:
// websocket.onerror = function(event) {
// 	MessageAdd('<div class="message red">ERROR Bien sûr</div>');
// };

// websocket.onmessage = function(event) {
// 	var data = JSON.parse(event.data);

// 	if (data.type == "message") {
// 		MessageAdd('<div class="message">' + data.username + ': ' + data.message + '</div>');
// }
// };


function sendMessage(){
	//1. Récupérer la valeur
	var message_element = document.getElementById("msg").value;
	const divMsg=document.createElement('div');
	let container = document.getElementById("message-container");
	let paragraphe = document.createElement('p');
	// 2. Afficher la valeur
	
	divMsg.classList.add('divMsg');
	paragraphe.classList.add("msg");
	paragraphe.innerHTML = message_element;
	divMsg.appendChild(paragraphe);
	container.appendChild(divMsg);
	document.querySelector('.chatMsg').appendChild(divMsg);


	//3. Remettre le champs du formulaire à vide
	document.getElementById("msg").value = '';		
}

// function MessageAdd(message) {
// 	var chat_messages = document.getElementById("chat-messages");

// 	chat_messages.insertAdjacentHTML("beforeend", message);
// 	chat_messages.scrollTop = chat_messages.scrollHeight;
// }