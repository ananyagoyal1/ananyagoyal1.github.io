document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const projectDetails = document.getElementById('plantHealthProject');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const projectTitle = item.querySelector('.text').textContent;
            
            // Create lightbox view
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            
            const img = item.querySelector('img').cloneNode();
            lightbox.appendChild(img);
            
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });

            // Show project details if it's the Plant Health project
            if (projectTitle === 'Plant Health Evaluation') {
                projectDetails.style.display = 'block';
                projectDetails.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
