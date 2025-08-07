document.addEventListener('DOMContentLoaded', () => {
    // Menampilkan tahun saat ini di footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Efek fade-in saat scroll
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.2, // Elemen akan muncul saat 20% terlihat
        rootMargin: "0px 0px -50px 0px" // Sedikit menunda munculnya elemen
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target); // Berhenti mengamati setelah muncul
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});
