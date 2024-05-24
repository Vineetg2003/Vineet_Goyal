document.addEventListener('DOMContentLoaded', function () {
    // ScrollReveal initialization
    const scrollReveal = ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
        reset: true // Add reset option if needed
    });

    // Reveal elements with specified origin
    scrollReveal.reveal('.home_content, .heading', { origin: 'top' });
    scrollReveal.reveal('.home_image, .skills_main, .portfolio-box, .contact form, .service_box', { origin: 'bottom' });
    scrollReveal.reveal('.home_content h1, .about_img', { origin: 'left' });
    scrollReveal.reveal('.home_content p, .about_content', { origin: 'right' });

    // Toggle menu and navbar
    // Toggle menu and navbar
    let menuIcon = document.querySelector('#menu_icon');
    let navbar = document.querySelector('.navbar');
    let navLinks1 = document.querySelectorAll('header nav a'); // Select all navigation links

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Add event listener to each navigation link
    navLinks1.forEach(link => {
        link.addEventListener('click', () => {
            menuIcon.classList.remove('bx-x'); // Close the menu
            navbar.classList.remove('active'); // Close the menu
        });
    });

    // Your existing onscroll logic
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
                });

                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            }
        });
    };
    
    // Typed.js initialization
    // const typed = new Typed('.multiple-text', {
    //     strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    //     typeSpeed: 100,
    //     backSpeed: 100,
    //     backDelay: 1000,
    //     loop: true
    // });
    var typed = new Typed(".Multiple_text", {
        strings: ["ML Developer", "Data Scientist", "Programmer", "AI Enthusiast 🚀","UI/UX Designer"],
        typeSpeed: 125,
        backSpeed: 100,
        loop: true
    });
});
document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get the resume link from the input field
    var resumeLink = document.getElementById("resume-link").value;
    
    // Redirect to the resume link
    window.open(resumeLink, '_blank');
});

