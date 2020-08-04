import descriptions from '../json/descriptions.js';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');
  const aboutSection = document.querySelector('.about');
  const projectsSection = document.querySelector('.projects');

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
