document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.mobile');

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
      case 'Skills.':
        el.addEventListener('click', () => document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'Projects.':
        el.addEventListener('click', () => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'Contact.':
        el.addEventListener('click', () => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'Home':
        el.addEventListener('click', () => {
          menu.classList.toggle('mobile--active');
          hamburger.classList.toggle('hamburger--active');
          document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        });
        break;
      case 'About':
        el.addEventListener('click', () => {
          menu.classList.toggle('mobile--active');
          hamburger.classList.toggle('hamburger--active');
          document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });
        break;
      case 'Skills':
        el.addEventListener('click', () => {
          menu.classList.toggle('mobile--active');
          hamburger.classList.toggle('hamburger--active');
          document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
        });
        break;
      case 'Projects':
        el.addEventListener('click', () => {
          menu.classList.toggle('mobile--active');
          hamburger.classList.toggle('hamburger--active');
          document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
        });
        break;
      case 'Contact':
        el.addEventListener('click', () => {
          menu.classList.toggle('mobile--active');
          hamburger.classList.toggle('hamburger--active');
          document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
        });
        break;
    }
  });

  // toggle hamburger class
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger--active');
    menu.classList.toggle('mobile--active');
  });
});
