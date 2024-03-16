document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel-inner');
    const slides = document.querySelectorAll('.carousel-item');
  
    let counter = 0;
    let slideWidth = slides[0].offsetWidth; // Cambiar clientWidth por offsetWidth
  
    // Clonar el primer slide y colocarlo al final para efecto de repetición
    carousel.appendChild(slides[0].cloneNode(true));
  
    function nextSlide() {
      counter++;
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${counter * slideWidth}px)`;
  
      // Cuando se alcanza el último slide, volver al principio con la transición del primer slide al final
      if (counter >= slides.length) {
        setTimeout(() => {
          counter = 0;
          carousel.style.transition = 'none';
          carousel.style.transform = `translateX(-${counter * slideWidth}px)`;
          counter++;
          setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            carousel.style.transform = `translateX(-${counter * slideWidth}px)`;
          }, 50);
        }, 500);
      }
    }
  
    function prevSlide() {
      counter--;
      if (counter < 0) {
        counter = slides.length - 1;
      }
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${counter * slideWidth}px)`;
    }
  
    nextButton.addEventListener('click', nextSlide);
  
    prevButton.addEventListener('click', prevSlide);
  
    // Cambiar automáticamente de diapositiva cada 2,5 segundos
    setInterval(nextSlide, 2500);
});
