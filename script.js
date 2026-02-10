// Fade-in al cargar
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Modal para imágenes
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const images = document.querySelectorAll('.product-image');
const close = document.getElementsByClassName('close')[0];

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt + '<br>' + this.parentElement.querySelector('p').innerText;
    }
});

close.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}