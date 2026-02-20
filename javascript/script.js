console.log("Je suis la console");
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

if (document.querySelector('.carousel-container')) {
    setInterval(() => {
        changeSlide(1);
    }, 5000);
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;

        if (nom && email) {
            alert("Merci " + nom + " ! Votre message a bien été envoyé.");
            contactForm.reset();
        }
    });
}

document.querySelectorAll('tr').forEach(row => {
    row.addEventListener('mouseenter', () => {
        row.style.backgroundColor = "#f1f1f1";
    });
    row.addEventListener('mouseleave', () => {
        row.style.backgroundColor = "";
    });
});