
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');
menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('show');
});
const images = [
    { src: '63013_126396_k', title: 'Смертоносні тварини' },
    { src: '63013_126396_k', title: 'Невгамовні мерці' },
    { src: '63013_126396_k', title: 'Дейзі Гейтс' },
    { src: '63013_126396_k', title: 'Золото' },
    { src: '63013_126396_k', title: 'Книгоходець' }
];
let currentIndex = 0;
const sliderContainer = document.querySelector('.slider-container');
const imageTitle = document.getElementById('image-title');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    imageTitle.textContent = images[currentIndex].title;
}
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

document.getElementById("accessibilityBtn").addEventListener("click", toggleAccessibility);

document.addEventListener("keydown", function (event) {
    if (event.altKey && event.key.toLowerCase() === 'a') {
        toggleAccessibility();
    }
});

function toggleAccessibility() {
    document.body.classList.toggle("accessible");
    localStorage.setItem("accessibilityMode", document.body.classList.contains("accessible"));
}

window.addEventListener("load", function () {
    if (localStorage.getItem("accessibilityMode") === "true") {
        document.body.classList.add("accessible");
    }
});






