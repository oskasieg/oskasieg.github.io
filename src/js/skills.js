import descriptions from '../json/descriptions.js';

document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelector('.icons').querySelectorAll('.icon');
  const description = document.querySelector('#skills').querySelector('.content').querySelector('.description');
  const name = description.querySelector('.description__name');
  const text = description.querySelector('.description__text');

  const descriptionMobile = document.querySelector('#skills').querySelector('.content').querySelector('.descriptionMobile--hidden');
  const buttonMobile = document.querySelector('.descriptionMobile__button').querySelector('img');
  const nameMobile = descriptionMobile.querySelector('.descriptionMobile__name');
  const textMobile = descriptionMobile.querySelector('.descriptionMobile__text');

  const contentTitle = document.querySelector('#skills').querySelector('.content').querySelector('.title');
  const contentIcons = document.querySelector('#skills').querySelector('.content').querySelector('.icons');
  const contentText = document.querySelector('#skills').querySelector('.content').querySelector('.text');

  buttonMobile.addEventListener('click', () => {
    if (!contentIcons.classList.contains('icons')) {
      descriptionMobile.classList.remove('descriptionMobile');
      descriptionMobile.classList.add('descriptionMobile--hidden');
      contentIcons.classList.add('icons');
      contentText.classList.remove('text--hidden');
      contentTitle.classList.remove('title--hidden');
    }
  });

  // toggle icon class and set up description (desktop skills)
  icons.forEach((el) => {
    el.addEventListener('click', () => {
      icons.forEach((el2) => {
        if (el2.classList.contains('icon--active')) el2.classList.remove('icon--active');
      });
      el.classList.toggle('icon--active');

      if (contentIcons.classList.contains('icons') && window.innerWidth < 400) {
        contentIcons.classList.remove('icons');
        descriptionMobile.classList.remove('descriptionMobile--hidden');
        descriptionMobile.classList.add('descriptionMobile');
        contentTitle.classList.add('title--hidden');
        contentIcons.classList.add('icons--hidden');
        contentText.classList.add('text--hidden');
      }

      switch (el.getAttribute('name')) {
        case 'html': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[0].name;
            text.textContent = descriptions.descriptions[0].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[0].name;
            textMobile.textContent = descriptions.descriptions[0].description;
          }
          break;
        }
        case 'css': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[1].name;
            text.textContent = descriptions.descriptions[1].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[1].name;
            textMobile.textContent = descriptions.descriptions[1].description;
          }
          break;
        }
        case 'javascript': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[2].name;
            text.textContent = descriptions.descriptions[2].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[2].name;
            textMobile.textContent = descriptions.descriptions[2].description;
          }
          break;
        }
        case 'react': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[3].name;
            text.textContent = descriptions.descriptions[3].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[3].name;
            textMobile.textContent = descriptions.descriptions[3].description;
          }
          break;
        }
        case 'ts': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[4].name;
            text.textContent = descriptions.descriptions[4].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[4].name;
            textMobile.textContent = descriptions.descriptions[4].description;
          }
          break;
        }
        case 'scss': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[5].name;
            text.textContent = descriptions.descriptions[5].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[5].name;
            textMobile.textContent = descriptions.descriptions[5].description;
          }
          break;
        }
        case 'redux': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[6].name;
            text.textContent = descriptions.descriptions[6].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[6].name;
            textMobile.textContent = descriptions.descriptions[6].description;
          }
          break;
        }
        case 'saga': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[7].name;
            text.textContent = descriptions.descriptions[7].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[7].name;
            textMobile.textContent = descriptions.descriptions[7].description;
          }
          break;
        }
      }
    });
  });
});
