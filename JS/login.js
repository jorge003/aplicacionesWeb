window.onload = function () {
	
	var localStorageKeyName = 'data';

    var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

	var admin = {
		user : "Admin",
		password : "12345"
		};

    console.log(admin.user);
    console.log(admin.password);

	document.querySelector("#btn-iniciar").addEventListener('click', function () {
        var user = document.getElementById("user"),
            password = document.getElementById("contraseña");

            console.log(user.value);
            console.log(password.value);

            if (user.value === admin.user){
            	if (password.value === admin.password ) {
            		window.open("admin_content.html")
            	} else {
            		alert("Contraseña de admnistrador incorrecta");
            	}
            } else if (dataInLocalStorage !== null) {
            	 users.forEach(function (person){
            	 	if(user.value === person.userName){
            	 		console.log(person.password);
            	 		//8920293
            	 		if(password.value === person.password){
            	 			sessionStorage.setItem('person', person.userName);
            	 			window.open("Busqueda.html")
            	 		} else {
            				alert("Contraseña de usuario incorrecta");
            			}
            	 	}
            	 })
            }
    })
}