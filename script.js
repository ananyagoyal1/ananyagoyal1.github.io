// script.js
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            // Create lightbox view
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            const img = item.querySelector('img').cloneNode();
            lightbox.appendChild(img);
            
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
});
