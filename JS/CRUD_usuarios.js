window.onload = function () {
    var localStorageKeyName = 'data';
    var indexChange;

    loadFromLocalStorage();

    document.querySelector("#btn-add").addEventListener('click', function () {
        var userName = document.getElementById("userName"),
            email = document.getElementById("email"),
            password = document.getElementById("password");

        // Validate
        if (userName.value.length === 0 || email.value.length === 0 || password.value === 0) return;

        var user = {
            userName: userName.value,
            email: email.value,
            password: password.value
        };

        // Clean data
        userName.value = '';
        email.value = '';
        password.value = '';

        // Append to my localStorage
        appendObjectToLocalStorage(user);
    })

    function appendObjectToLocalStorage(obj) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        users.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }

    

    function loadFromLocalStorage() {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");

        if (dataInLocalStorage !== null) {
            users = JSON.parse(dataInLocalStorage);
        }

        // Draw TR from TBODY
        gridBody.innerHTML = '';

        users.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                tdName = document.createElement("td"),
                tdEmail = document.createElement("td"),
                tdPass = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button"),
                btnEdit = document.createElement("button"),
                passwordTemp;

            passwordTemp = x.password;
            
            /*
            passwordTemp = x.password.replace(/./gi, '*');
            console.log(x.password);
            console.log(passwordTemp);
            */

            tdName.innerHTML = x.userName;
            tdEmail.innerHTML = x.email;
            tdPass.innerHTML = passwordTemp;
            
            btnEdit.textContent = "Editar"
            btnEdit.className = 'btn boton_igual btn-xs btn-info';
            btnEdit.addEventListener('click', function(){
                //console.log(i);
                openForm(i);
                indexChange = i;
            });

            tdRemove.appendChild(btnEdit);

            btnRemove.textContent = 'Eliminar';
            btnRemove.className = 'btn boton_igual btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){
                removeFromLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(tdName);
            tr.appendChild(tdEmail);
            tr.appendChild(tdPass);
            tr.appendChild(tdRemove);

            gridBody.appendChild(tr);
        });
    }

    function removeFromLocalStorage(index){
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        users.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    }


    document.querySelector("#btn-change").addEventListener('click', function () {
        var newUser = document.getElementById("newUser"),
            newEmail = document.getElementById("newEmail"),
            newPsw = document.getElementById("newPsw");


        // Validate
        if (newUser.value.length === 0 || newEmail.value.length === 0 || newPsw.value === 0) return;
        
        /*
        console.log(newUser.value);
        console.log(newEmail.value);
        console.log(newPsw.value);
        */

        var users = [],
                dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        console.log(indexChange);
        
        users[indexChange].userName = newUser.value;
        users[indexChange].email = newEmail.value;
        users[indexChange].password = newPsw.value;
        console.log(users[indexChange]);
        
        localStorage.setItem(localStorageKeyName, JSON.stringify(users));

        loadFromLocalStorage();
    })

    function openForm(index) {
        var users = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        users = JSON.parse(dataInLocalStorage);

        document.getElementById("myForm").style.display = "block";
        document.getElementsByName('newUser')[0].placeholder=users[index].userName;
        document.getElementsByName('newEmail')[0].placeholder=users[index].email;
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
