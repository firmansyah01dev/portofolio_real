
 // ========== Toggle Icon Navbar ==========
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// ========== Scroll Sections Active Link ==========
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');

                let activeLink = document.querySelector(
                    'header nav a[href="#' + id + '"]'
                );

                if (activeLink) {
                    activeLink.classList.add('active');
                }
            });
        }
    });

    // ========== Sticky Navbar ==========
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // ========== Close Mobile Navbar ==========
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// ========== Scroll Reveal ==========
ScrollReveal().reveal('.robot', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});

ScrollReveal().reveal(
    '.services-container, .portofolio-box, .contact form',
    { origin: 'bottom' }
);

ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});

ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});


// ========== Typed JS ==========
const typed = new Typed('.multiple-text', {
    strings: [
        'Ai Engineering Student',
        'Web Developer Student',
        'Software Engineering Student'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// ========== Read More Modal ==========
const modal = document.querySelector('#readmore-modal');
const modalTitle = document.querySelector('#modal-title');
const modalText = document.querySelector('#modal-text');
const modalIcon = document.querySelector('#modal-icon');
const closeModal = document.querySelector('#modal-close');

const readmoreData = {
    about: {
        title: 'About Me',
        text: 'Saya adalah siswa Rekayasa Perangkat Lunak yang berfokus mempelajari Front End Development dan AI Engineering melalui sekolah, ekstrakurikuler, serta pembelajaran mandiri di rumah menggunakan handphone dan laptop.',
        icon: 'bx-user'
    },

    webdev: {
        title: 'Web Development Student',
        text: 'Saya mempelajari HTML dasar seperti elemen dasar dan atribut, CSS seperti styling dan layout, dan JavaScript seperti fungsi dan variabel untuk membangun website yang menarik, responsif, dan interaktif.',
        icon: 'bx-code-alt'
    },

    design: {
        title: 'Graphic Design Student',
        text: 'Saya tertarik pada desain grafis dan telah memiliki pengalaman membuat desain logo bara api yang mengilustrasikan semangat dan kualitas produk. Saya terus mengembangkan kreativitas dan kemampuan desain.',
        icon: 'bxs-paint'
    },

    finance: {
        title: 'Finance Student',
        text: 'Saya mempelajari dasar-dasar keuangan secara mandiri seperti budgeting, investasi, dan analisis keuangan, penyebaran uang yang saya dapat, termasuk pengelolaan uang dan pemahaman finansial.',
        icon: 'bx-bar-chart-alt'
    }
};


// Membuka pop-up sesuai tombol yang ditekan
document.querySelectorAll('.readmore-btn').forEach(button => {
    button.addEventListener('click', event => {
        event.preventDefault();

        const info = readmoreData[button.dataset.info];

        if (!info) return;

        modalTitle.textContent = info.title;
        modalText.textContent = info.text;
        modalIcon.className = 'bx ' + info.icon;

        modal.classList.add('active');
    });
});


// Menutup pop-up melalui tombol X
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});


// Menutup pop-up saat mengeklik area di luar kotak
modal.addEventListener('click', event => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});


// Menutup pop-up menggunakan tombol Escape
document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        modal.classList.remove('active');
    }
});
