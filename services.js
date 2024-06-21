document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service li');
    
    services.forEach(service => {
        service.addEventListener('mouseover', () => {
            service.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
        });

        service.addEventListener('mouseout', () => {
            service.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
        });
    });
});
