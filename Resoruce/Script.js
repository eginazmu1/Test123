// GSAP Animasi
gsap.from('#beranda h1', {duration: 1.5, opacity: 0, y: -50});
gsap.from('#beranda p', {duration: 1.5, opacity: 0, delay: 0.5, y: -50});
gsap.from('.btn', {duration: 1.5, opacity: 0, delay: 1, scale: 0});

// Intersection Observer untuk animasi saat di-scroll
function animateOnScroll(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.to(entry.target, {duration: 1, opacity: 1, y: 0});
        }
    });
}

let observerOptions = {
    threshold: 0.5
};

let observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Mengamati elemen-elemen untuk animasi
document.querySelectorAll('.profile-section, #video, #cv').forEach(element => {
    observer.observe(element);
});

// Navbar sticky effect dan animasi scroll
$(window).on('scroll', function() {
    let scrollPosition = $(window).scrollTop();
    
    // Mengubah latar belakang navbar saat di-scroll
    if (scrollPosition > 50) {
        $('header').css('background-color', 'var(--nav-bg-color-scrolled)');
    } else {
        $('header').css('background-color', 'var(--nav-bg-color)');
    }

    // Mengatur active link pada navbar
    $('.nav-link').each(function() {
        let sectionOffset = $($(this).attr('href')).offset().top - 70;
        if (scrollPosition >= sectionOffset) {
            $('.nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });
});

// Mengatur link navbar untuk smooth scrolling
$('.nav-link').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 50
    }, 800);
});
