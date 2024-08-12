<script>
    document.addEventListener('DOMContentLoaded', function() {
        const carouselImages = document.querySelector('.carousel-images');
        const images = document.querySelectorAll('.carousel-images img');
        const totalImages = images.length;
        let index = 0;

        function showImage(newIndex) {
            if (newIndex >= totalImages) {
                index = 0;
            } else if (newIndex < 0) {
                index = totalImages - 1;
            } else {
                index = newIndex;
            }
            const offset = -index * 100;
            carouselImages.style.transform = `translateX(${offset}%)`;
        }

        document.querySelector('.carousel-control.next').addEventListener('click', function() {
            showImage(index + 1);
        });

        document.querySelector('.carousel-control.prev').addEventListener('click', function() {
            showImage(index - 1);
        });
    });
</script>
