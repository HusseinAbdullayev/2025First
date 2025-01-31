
// HAMBURGER AND X ICON CHANCE 

function toggleNavbar() {
  const navbar = document.getElementById('navbar');
  const icon = document.querySelector('#navbar-icon i'); // Düzgün ikon seçimi

  navbar.classList.toggle('show');

 
  if (navbar.classList.contains('show')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
}


//SPLIDE JS 

var splide = new Splide( '.splide', {
  type   : 'loop',
  drag   : 'free',
  perPage: 3,
} );

splide.mount();





  //Sections animation
  // const sections = document.querySelectorAll("section");

  //   const observerOptions = {
  //     threshold: 0.2
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       }
  //     });
  //   }, observerOptions);

  //   sections.forEach(section => {
  //     observer.observe(section);
  //   });