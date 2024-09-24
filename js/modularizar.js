function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', '/public/components/headernav.html');
    loadHTML('footer', '/public/components/footer.html');
});