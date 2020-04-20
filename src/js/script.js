document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll
  const navItems = document.querySelectorAll('.list__el');
  navItems.forEach((el) => {
    switch (el.textContent) {
      case 'Home.':
        el.addEventListener('click', () => document.querySelector('#home').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'About.':
        el.addEventListener('click', () => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'Projects.':
        el.addEventListener('click', () => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'Contact.':
        el.addEventListener('click', () => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }));
    }
  });
});
