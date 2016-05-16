function validContactName() {
	var name = document.getElementById('name');
	var nameLength = name.value.length;
	
	if(!((nameLength>3)&&(nameLength<=30)&&(name.value.indexOf(" ")!=-1)))
	{
		name.style.backgroundColor = "#FF0000";
		document.getElementById("submit_button").disabled = true;
	}
	else
	{
		name.style.backgroundColor = "#FFFFFF";
	}
}

function validContactEmail() {
	var email = document.getElementById('email');
	var lastThreeCharactersOfEmail = email.value.substr(email.value.length - 3);
	var lastFourCharactersOfEmail = email.value.substr(email.value.length - 4);
	
	if(!((lastThreeCharactersOfEmail==".hu")||(lastFourCharactersOfEmail==".com")))
	{
		email.style.backgroundColor = "#FF0000";
		document.getElementById("submit_button").disabled = true;
	}
	else
	{
		email.style.backgroundColor = "#FFFFFF";
	}
}

function validContactMessage() {
	var message = document.getElementById('message');
	var messageLength = message.value.length;
	
	if(!((messageLength>20)&&(messageLength<=500)))
	{
		message.style.backgroundColor = "#FF0000";
		document.getElementById("submit_button").disabled = true;
	}
	else
	{
		message.style.backgroundColor = "#FFFFFF";
	}
}

function sendMessage()
{
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	
	alert(name.value+" "+email.value+" "+message.value+" Üzeneted elküldve!");
}
document.getElementById("submit_button").disabled = true;