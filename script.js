// Apenas uma mensagem para confirmar que o arquivo está funcionando
console.log("Portfólio pronto para interatividade!");

// --- Lógica para animar a timeline ao rolar a página (Fade in) ---
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

timelineItems.forEach(item => {
    observer.observe(item);
});

