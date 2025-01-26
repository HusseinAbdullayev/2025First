// Hamburger
// const navbarIcon= document.querySelector('.navbar-icon')
// const navbar= document.querySelector('.navbar')

function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    
    // Navbar'ı açıb bağlamaq üçün .show sinfini əlavə et
    navbar.classList.toggle('show');
    
    // Eyni zamanda stil dəyişdirə bilərik, məsələn:
    if (navbar.classList.contains('show')) {
      navbar.style.backgroundColor = '#333'; // Navbarın fon rəngini dəyiş
      navbar.style.display = 'block'; // Navbarı göstər
    } else {
      navbar.style.display = 'none'; // Navbarı gizlət
    }
  }