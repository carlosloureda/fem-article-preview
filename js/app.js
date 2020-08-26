function addEventListeners() {
  onShareClickListener();
}

function onShareClickListener() {
  Array.from(document.querySelectorAll(".js-open-share-options")).map((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(".article-preview__share")
        .classList.toggle("hidden");
    });
  });
}

function init() {
  addEventListeners();
}

init();
