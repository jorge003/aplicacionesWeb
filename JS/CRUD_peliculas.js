window.onload = function () {
    var localStorageKeyName = 'movie-data';
    var indexChange;

    loadFromLocalStorage();

    document.querySelector("#btn-add").addEventListener('click', function () {
        var movie = document.getElementById("movie"),
            director = document.getElementById("director"),
            year = document.getElementById("year");

        // Validate
        if (movie.value.length === 0 || director.value.length === 0 || year.value === 0) return;

        var film = {
            movie: movie.value,
            director: director.value,
            year: year.value
        };

        // Clean data
        movie.value = '';
        director.value = '';
        year.value = '';

        // Append to my localStorage
        appendObjectToLocalStorage(film);
    })

    function appendObjectToLocalStorage(obj) {
        var films = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            films = JSON.parse(dataInLocalStorage);
        }

        films.push(obj);

        localStorage.setItem(localStorageKeyName, JSON.stringify(films));

        loadFromLocalStorage();
    }

    

    function loadFromLocalStorage() {
        var films = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName),
            gridBody = document.querySelector("#grid tbody");

        if (dataInLocalStorage !== null) {
            films = JSON.parse(dataInLocalStorage);
        }

        // Draw TR from TBODY
        gridBody.innerHTML = '';

        films.forEach(function (x, i) {
            var tr = document.createElement("tr"),
                tdName = document.createElement("td"),
                tdDir = document.createElement("td"),
                tdYear = document.createElement("td"),
                tdRemove = document.createElement("td"),
                btnRemove = document.createElement("button"),
                btnEdit = document.createElement("button");

            tdName.innerHTML = x.movie;
            tdDir.innerHTML = x.director;
            tdYear.innerHTML = x.year;
            
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
            tr.appendChild(tdDir);
            tr.appendChild(tdYear);
            tr.appendChild(tdRemove);

            gridBody.appendChild(tr);
        });
    }

    function removeFromLocalStorage(index){
        var films = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        films = JSON.parse(dataInLocalStorage);

        films.splice(index, 1);

        localStorage.setItem(localStorageKeyName, JSON.stringify(films));

        loadFromLocalStorage();
    }


    document.querySelector("#btn-change").addEventListener('click', function () {
        var newMovie = document.getElementById("newMovie"),
            newDirector = document.getElementById("newDirector"),
            newYear = document.getElementById("newYear");


        // Validate
        if (newMovie.value.length === 0 || newDirector.value.length === 0 || newYear.value === 0) return;
        
        /*
        console.log(newMovie.value);
        console.log(newDirector.value);
        console.log(newYear.value);
        */

        var films = [],
                dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        films = JSON.parse(dataInLocalStorage);

        console.log(indexChange);
        
        films[indexChange].movie = newMovie.value;
        films[indexChange].director = newDirector.value;
        films[indexChange].year = newYear.value;
        console.log(films[indexChange]);
        
        localStorage.setItem(localStorageKeyName, JSON.stringify(films));

        loadFromLocalStorage();
    })

    function openForm(index) {
        var films = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        films = JSON.parse(dataInLocalStorage);

        document.getElementById("myForm").style.display = "block";
        document.getElementsByName('newMovie')[0].placeholder=films[index].movie;
        document.getElementsByName('newDirector')[0].placeholder=films[index].director;
        document.getElementsByName('newYear')[0].placeholder=films[index].year;
    }
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
