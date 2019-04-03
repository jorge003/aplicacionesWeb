window.onload = function () {
	
	var localStorageKeyName = 'movie-data';

    var films = [],
            dataInLocalStorage = localStorage.getItem(localStorageKeyName);

        if (dataInLocalStorage !== null) {
            films = JSON.parse(dataInLocalStorage);
            document.getElementById("movie").innerHTML = films[0].movie;
            document.getElementById("director").innerHTML = films[0].director;
            document.getElementById("year").innerHTML = films[0].year;
        }
        
}