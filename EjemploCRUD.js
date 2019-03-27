window.onload = function () {
    var localStorageKeyName = 'data';

    loadFromLocalStorage();

    document.querySelector("#btn-add").addEventListener('click', function () {
        var name = document.getElementById("name"),
            job = document.getElementById("job"),
            age = document.getElementById("age");

        // Validate
        if (name.value.length === 0 || job.value.length === 0 || !parseInt(age.value)) return;

        var user = {
            name: name.value,
            job: job.value,
            age: age.value
        };

        // Clean data
        name.value = '';
        job.value = '';
        age.value = '';

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
                tdJob = document.createElement("td"),
                tdAge = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button");

            tdName.innerHTML = x.name;
            tdJob.innerHTML = x.job;
            tdAge.innerHTML = x.age;

            btnRemove.textContent = 'Remove';
            btnRemove.className = 'btn btn-xs btn-danger';
            btnRemove.addEventListener('click', function(){
                removeFromLocalStorage(i);
            });

            tdRemove.appendChild(btnRemove);

            tr.appendChild(tdName);
            tr.appendChild(tdJob);
            tr.appendChild(tdAge);
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
}