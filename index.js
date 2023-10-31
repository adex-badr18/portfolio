// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont');
const smallMenu = document.querySelector('.header__sm-menu');
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu');
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
);
const optionalProjects = [...document.querySelectorAll('.project-d-none')];
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link');

optionalProjects.forEach(project => project.style.display = 'none');

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Show more or less projects
// const showMore = document.getElementById('angles-down');
// const showLess = document.getElementById('angles-up');

// for (let i = 0; i < optionalProjects.length; i++) {
//     if (optionalProjects[i].classList.contains('project-d-none')) {
//         moreLessContainer.innerHTML = '<i id="angles-down" class="fa-solid fa-angles-down"></i>';
//     } else {
//         moreLessContainer.innerHTML = '<i id="angles-up" class="fa-solid fa-angles-up"></i>';
//     }
// }

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('show')) {
        const moreLessContainer = document.getElementById('more-less');

        if (optionalProjects[0].style.display === 'none') {
            optionalProjects.forEach(project => project.style.display = 'block');

            moreLessContainer.innerHTML = '<i id="angles-up" class="fa-solid fa-angles-up show"></i>';
        } else {
            optionalProjects.forEach(project => project.style.display = 'none');

            moreLessContainer.innerHTML = '<i id="angles-up" class="fa-solid fa-angles-down show"></i>';

            window.location.href = './index.html#projects';
        }
    } 
    // else if (e.target.classList.contains('show-less')) {

    // }
})

