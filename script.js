document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav ul li a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});