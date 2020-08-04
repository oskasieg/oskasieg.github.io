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

      if (contentIcons.classList.contains('icons') && window.innerWidth < 900) {
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
        case 'formik': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[8].name;
            text.textContent = descriptions.descriptions[8].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[8].name;
            textMobile.textContent = descriptions.descriptions[8].description;
          }
          break;
        }
        case 'rwd': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[9].name;
            text.textContent = descriptions.descriptions[9].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[9].name;
            textMobile.textContent = descriptions.descriptions[9].description;
          }
          break;
        }
        case 'figma': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[10].name;
            text.textContent = descriptions.descriptions[10].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[10].name;
            textMobile.textContent = descriptions.descriptions[10].description;
          }
          break;
        }
        case 'git': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[11].name;
            text.textContent = descriptions.descriptions[11].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[11].name;
            textMobile.textContent = descriptions.descriptions[11].description;
          }
          break;
        }
        case 'github': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[12].name;
            text.textContent = descriptions.descriptions[12].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[12].name;
            textMobile.textContent = descriptions.descriptions[12].description;
          }
          break;
        }
        case 'gitlab': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[13].name;
            text.textContent = descriptions.descriptions[13].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[13].name;
            textMobile.textContent = descriptions.descriptions[13].description;
          }
          break;
        }
        case 'jira': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[14].name;
            text.textContent = descriptions.descriptions[14].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[14].name;
            textMobile.textContent = descriptions.descriptions[14].description;
          }
          break;
        }
        case 'sql': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[15].name;
            text.textContent = descriptions.descriptions[15].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[15].name;
            textMobile.textContent = descriptions.descriptions[15].description;
          }
          break;
        }
        case 'json': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[16].name;
            text.textContent = descriptions.descriptions[16].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[16].name;
            textMobile.textContent = descriptions.descriptions[16].description;
          }
          break;
        }
        case 'java': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[17].name;
            text.textContent = descriptions.descriptions[17].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[17].name;
            textMobile.textContent = descriptions.descriptions[17].description;
          }
          break;
        }
        case 'c': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[18].name;
            text.textContent = descriptions.descriptions[18].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[18].name;
            textMobile.textContent = descriptions.descriptions[18].description;
          }
          break;
        }
        case 'cpp': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[19].name;
            text.textContent = descriptions.descriptions[19].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[19].name;
            textMobile.textContent = descriptions.descriptions[19].description;
          }
          break;
        }
        case 'php': {
          if (descriptionMobile.classList.contains('descriptionMobile--hidden')) {
            name.textContent = descriptions.descriptions[20].name;
            text.textContent = descriptions.descriptions[20].description;
          } else {
            nameMobile.textContent = descriptions.descriptions[20].name;
            textMobile.textContent = descriptions.descriptions[20].description;
          }
          break;
        }
      }
    });
  });
});
