const loadAndInsertHTML = (filename) => {
    return fetch(filename)
        .then(response => response.text())
        .then(html => {
            document.querySelector(".loader").insertAdjacentHTML('beforebegin', html);
        })
        .catch(error => console.error(`Błąd podczas wczytywania ${filename}:`, error));
};
const loadHTMLSequentially = async (files) => {
    for (const file of files) {
        await loadAndInsertHTML(file);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const htmlFiles = ['hero.html', 'article.html'];
    loadHTMLSequentially(htmlFiles)
        .then(() => {
            //add app.js
            return fetch("./js/app.js")
            .then(response => response.text())
            .then(scriptCode => {
                eval(scriptCode);
            })
        });
});


console.log('Konfiguracja lazy loading.');