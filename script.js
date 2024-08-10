const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementByld('modal');
const modallmg = document.getElementByld('modal-img');
const captionText = document.getElementByld('caption');
const closeBtn = document.getElementByld('close');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
        modallmg.src = item.querySelector('img').src;
        captionText.innerHTML = item.querySelector('img').alt;
    });
});

closeBtn.onclick = fucntion() {
    modal.style.display = 'none';
}

window.onclick = fuction(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}