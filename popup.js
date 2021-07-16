let popupWrite = document.querySelector(".modal-write-us");
let writeUsLink = document.querySelector('.write-us-link');
let modalCloseWrite = document.querySelector('.modal-close-write');
writeUsLink.onclick = function() {
    popupWrite.classList.remove("hide")
    popupWrite.classList.add("show-form")
}

modalCloseWrite.onclick = function() {
    popupWrite.classList.remove("show-form")
    popupWrite.classList.add("hide")
}
let popup = document.querySelector(".modal-map");
let mapLink = document.querySelector('.popup-map');
let closeMap = document.querySelector('.modal-close-map');
mapLink.onclick = function() {
    popup.classList.remove("hide")
    popup.classList.add("show-map")
}

closeMap.onclick = function() {
    popup.classList.remove("show-map")
    popup.classList.add("hide")
}