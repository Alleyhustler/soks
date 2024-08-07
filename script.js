const container = document.getElementById('container');
const images = [
    'images/1.png',  // Replace these with your image URLs or paths
    'images/2.png',
    'images/3.png',
    'images/4.png',
    'images/5.png',
    'images/6.png',
    'images/7.png',
    'images/8.png',
    'images/9.png',
    'images/10.png',
    'images/11.png',
    'images/12.png',
    'images/13.png',
    'images/14.png',
    'images/15.png',
];

function getRandomPosition() {
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const randomX = Math.floor(Math.random() * (containerWidth - 100)); // 100 is the max width/height of the image
    const randomY = Math.floor(Math.random() * (containerHeight - 100));
    return { x: randomX, y: randomY };
}

function createImageElement(src) {
    const img = document.createElement('img');
    img.src = src;
    img.style.opacity = 0;
    setTimeout(() => img.style.opacity = 1, 0);
    return img;
}

function popImage() {
    const imgSrc = images[Math.floor(Math.random() * images.length)];
    const imgElement = createImageElement(imgSrc);
    const { x, y } = getRandomPosition();
    imgElement.style.left = `${x}px`;
    imgElement.style.top = `${y}px`;
    container.appendChild(imgElement);

    setTimeout(() => {
        imgElement.style.opacity = 0;
        setTimeout(() => imgElement.remove(), 500); // Remove image after fade out
    }, 1000); // Image display time
}

setInterval(popImage, 1000);
