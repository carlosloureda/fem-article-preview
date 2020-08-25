

function addEventListeners() {
    onShareClickListener();
}

function onShareClickListener() {
    document.getElementById('js-open-share-options').addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.article-preview__share-content').classList.toggle('hidden');
    })
}

function init() {
    addEventListeners();
}

init();