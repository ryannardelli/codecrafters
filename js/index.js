// Swiper
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },

  autoplay: {
    delay: 5000, // tempo em milissegundos entre cada rolagem
    disableOnInteraction: false, // para continuar o autoplay mesmo se o usuário interagir com o swiper
},
});


window.sr = ScrollReveal({ reset: true });
sr.reveal('.about_our_services', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '10px', // Distância de deslocamento do elemento
      origin: 'right', // De onde o elemento vai se originar
      duration: 1000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});


sr.reveal('#contact_container', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '20px', // Distância de deslocamento do elemento
      origin: 'left', // De onde o elemento vai se originar
      duration: 1000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});

sr.reveal('#img_contact', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '20px', // Distância de deslocamento do elemento
      origin: 'right', // De onde o elemento vai se originar
      duration: 1000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});

sr.reveal('#card_profile_one', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '10px', // Distância de deslocamento do elemento
      origin: 'left', // De onde o elemento vai se originar
      duration: 2000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});

sr.reveal('#card_profile_two', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '10px', // Distância de deslocamento do elemento
      origin: 'top', // De onde o elemento vai se originar
      duration: 2000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});

sr.reveal('#card_profile_three', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '10px', // Distância de deslocamento do elemento
      origin: 'right', // De onde o elemento vai se originar
      duration: 2000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});