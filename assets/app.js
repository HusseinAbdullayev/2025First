
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





//Contact inputs 


  function validateForm() {
    const fields = [
      { id: 'first-name', name: 'First Name' },
      { id: 'last-name', name: 'Last Name' },
      { id: 'email', name: 'Email' },
      { id: 'phone', name: 'Phone' }
    ];
    
    let isValid = true;

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const errorText = input.nextElementSibling;
      input.classList.remove('error'); 

      if (input.value.trim() === '') {
        input.classList.add('error');
        if (!errorText) {
          const errorMessage = document.createElement('p');
          errorMessage.className = 'error-message';
          errorMessage.innerText = `${field.name} cannot be empty.`;
          input.parentNode.appendChild(errorMessage);
        }
        isValid = false;
      } else if (errorText) {
        input.parentNode.removeChild(errorText); 
      }
    });

    if (isValid) {
      alert('Form uğurla göndərildi!');
    }
  }



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