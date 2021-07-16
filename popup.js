let popupWrite = document.querySelector(".modal-write-us");
let writeUsLink = document.querySelector('.write-us-link');
let modalCloseWrite = document.querySelector('.modal-close-write');
writeUsLink.onclick = function() {
    popupWrite.style.display = 'grid';
}

modalCloseWrite.onclick = function() {
    popupWrite.style.display = 'none';
}
let popup = document.querySelector(".modal-map");
let mapLink = document.querySelector('.popup-map');
let closeMap = document.querySelector('.modal-close-map');
mapLink.onclick = function() {
    popup.style.display = 'block';
}

closeMap.onclick = function() {
    popup.style.display = 'none';
}