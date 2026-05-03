document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        let hasVisibleItems = false;

        timelineItems.forEach(item => {
            const title = item.getAttribute('data-title') || '';
            const speaker = item.getAttribute('data-speaker') || '';
            const category = item.getAttribute('data-category') || '';

            if (title.includes(searchTerm) || speaker.includes(searchTerm) || category.includes(searchTerm)) {
                item.style.display = 'flex';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 10);
                hasVisibleItems = true;
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });

        if (!hasVisibleItems && searchTerm !== '') {
            setTimeout(() => {
                noResults.classList.remove('hidden');
            }, 300);
        } else {
            noResults.classList.add('hidden');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
