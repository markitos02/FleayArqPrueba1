document.addEventListener("DOMContentLoaded", function () {
    loadComponent("navbar.html", "navbar-container");
    loadComponent("footer.html", "footer-container");
});

function loadComponent(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => console.error(`Error cargando ${url}:`, error));
}
