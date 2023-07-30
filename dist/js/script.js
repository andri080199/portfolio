// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector ('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');

    }else {
        header.classList.remove('navbar-fixed');
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const textToType = "Front End Developer";
        const typedElement = document.getElementById("typed-text");
        let charIndex = 0;

        function typeText() {
            if (charIndex < textToType.length) {
                typedElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, 100); // Delay 100ms between each character typing
            } else {
                // Setelah selesai diketik, hapus teks dan mulai lagi
                setTimeout(() => {
                    typedElement.textContent = "";
                    charIndex = 0;
                    typeText();
                }, 2000); // Delay 2000ms (2 detik) sebelum mulai lagi
            }
        }

        typeText();

// Fungsi untuk memulai animasi saat elemen muncul di dalam viewport
function animateOnScroll() {
    const initialDivs = document.querySelectorAll('.initial-div');
    initialDivs.forEach(initialDiv => {
        if (isElementInViewport(initialDiv)) {
            initialDiv.classList.add('final-div');
        }
    });
}

// Panggil fungsi animateOnScroll() saat halaman di-scroll
window.addEventListener('scroll', animateOnScroll);
// Panggil juga saat halaman dimuat, jika elemen sudah terlihat di atas viewport saat awal load
animateOnScroll();
    