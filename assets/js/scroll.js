document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopLink = document.getElementById('scrollToTop');

    // Check if the link exists
    if (scrollToTopLink) {
        scrollToTopLink.addEventListener('click', function(event) {
            event.preventDefault();

            // Scroll smoothly to the top
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Enable smooth scrolling
            });
        });
    } else {
        console.error('Scroll to top link not found');
    }
});
