// Zobrazí konkrétní sekci
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('visible');
    });
    document.getElementById(sectionId).classList.add('visible');
    if (sectionId === 'mainSection') {
        displayFavoriteMovie();
    }
}

// Uloží název filmu do sessionStorage
function saveMovie() {
    const movieInput = document.getElementById('movieInput').value;
    if (movieInput.trim() !== "") {
        sessionStorage.setItem('favoriteMovie', movieInput);
        alert('Film byl uložen!');
        document.getElementById('movieInput').value = ""; // Vyčistit pole
    } else {
        alert('Zadejte prosím název filmu.');
    }
}

// Zobrazí aktuální nejoblíbenější film
function displayFavoriteMovie() {
    const favoriteMovie = sessionStorage.getItem('favoriteMovie');
    const displayElement = document.getElementById('favoriteMovie');
    if (favoriteMovie) {
        displayElement.textContent = favoriteMovie;
    } else {
        displayElement.textContent = "Žádný film nebyl nastaven.";
    }
}

// Inicializace při načtení stránky
displayFavoriteMovie();
