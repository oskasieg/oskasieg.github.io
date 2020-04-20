document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const aboutSection = document.querySelector('.about');
  const projectsSection = document.querySelector('.projects');

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
        break;
      case 'Home':
        el.addEventListener('click', () => document.querySelector('#home').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'About':
        el.addEventListener('click', () => document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'Projects':
        el.addEventListener('click', () => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }));
        break;
      case 'Contact':
        el.addEventListener('click', () => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' }));
        break;
    }
  });

  // toggle hamburger class
  const menu = document.querySelector('.hamburger');
  const list = menu.querySelector('.list');
  menu.addEventListener('click', () => {
    menu.classList.toggle('hamburger--active');
    list.classList.toggle('list--active');
  });

  //////////////////////////////////
  // check if scrolled on section //
  //////////////////////////////////
  const recHeader = header.getBoundingClientRect();
  const recAbout = aboutSection.getBoundingClientRect();
  const recProjects = projectsSection.getBoundingClientRect();

  const startAbout = recHeader.height - 200;
  const endAbout = recHeader.height + recAbout.height - 70;

  document.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    //about
    if (scrollY >= startAbout && scrollY <= endAbout) {
      nav.style.setProperty('--text-color', '#00d0bd');
      nav.style.setProperty('--hover-bg-color', '#55d6fd26');
    } else {
      nav.style.setProperty('--text-color', 'white');
      nav.style.setProperty('--hover-bg-color', '#f0949454');
    }
  });
});
