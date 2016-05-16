function validContactData() {
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	var submit_button = document.getElementById('submit_button');
	
	var nameLength = name.value.length;
	var lastThreeCharactersOfEmail = id.substr(id.length - 3);
	var lastFourCharactersOfEmail = id.substr(id.length - 4);
	var messageLength = message.value.length;
	
	submit_button.disabled = true;
	
	if(!((nameLength>3)&&(nameLength<=30)&&(name.value.indexOf(" ")==-1)))
	{
		name.style.backgroundColor = "#FF0000";
	}
	
	else if(!((lastThreeCharactersOfEmail==".hu")||(lastFourCharactersOfEmail==".com")))
	{
		email.style.backgroundColor = "#FF0000";
	}
	
	else if(!((messageLength>20)&&(nameLength<=500)))
	{
		name.style.backgroundColor = "#FF0000";
	}
	
	else
	{
		submit_button.disabled = false;
	}
}

function sendMessage()
{
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var message = document.getElementById('message');
	
	alert(name+" "+email+" "+message+" Üzeneted elküldve!");
}