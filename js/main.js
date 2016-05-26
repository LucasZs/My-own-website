(function(app){
	app.validContactName = validContactName;
	app.validContactEmail = validContactEmail;
	app.validContactMessage = validContactMessage;
	app.sendMessage = sendMessage;
	app.contactData = {
		name: '',
		email: '',
		message: ''
	};
	
	
	var validity = {
		name: false,
		email: false,
		message: false
	};
	
	window.addEventListener('load', init);

	function init(){
		document.getElementById("submit_button").disabled = true;
	}

	function validContactName() {
		var name = document.getElementById('name');
		app.contactData.name = name.value;
		var nameLength = name.value.length;
		
		if(!((nameLength>3)&&(nameLength<=30)&&(name.value.indexOf(" ")!=-1)))
		{
			name.style.backgroundColor = "#FF0000";
			document.getElementById("submit_button").disabled = true;
			validity.name = false;
		}
		else
		{
			name.style.backgroundColor = "#FFFFFF";
			validity.name = true;
		}
		document.getElementById("submit_button").disabled = !(validity.name && validity.email && validity.message);
	}

	function validContactEmail() {
		var email = document.getElementById('email');
		app.contactData.email = email.value;
		var lastThreeCharactersOfEmail = email.value.substr(email.value.length - 3);
		var lastFourCharactersOfEmail = email.value.substr(email.value.length - 4);
		
		if(!((lastThreeCharactersOfEmail==".hu")||(lastFourCharactersOfEmail==".com")))
		{
			email.style.backgroundColor = "#FF0000";
			validity.email = false;
		}
		else
		{
			email.style.backgroundColor = "#FFFFFF";
			validity.email = true;
		}
		document.getElementById("submit_button").disabled = !(validity.name && validity.email && validity.message);
	}

	function validContactMessage() {
		var message = document.getElementById('message');
		app.contactData.message = message.value;
		var messageLength = message.value.length;
		
		if(!((messageLength>20)&&(messageLength<=500)))
		{
			message.style.backgroundColor = "#FF0000";
			document.getElementById("submit_button").disabled = true;
			validity.message = false;
		}
		else
		{
			message.style.backgroundColor = "#FFFFFF";
			validity.message = true;
		}
		document.getElementById("submit_button").disabled = !(validity.name && validity.email && validity.message);
	}

	function sendMessage()
	{
		var name = document.getElementById('name');
		var email = document.getElementById('email');
		var message = document.getElementById('message');
		
		alert(app.contactData.name+" "+app.contactData.email+" "+app.contactData.message+" \nÜzeneted elküldve!");
	}
})(window.myApp = window.myApp || {});