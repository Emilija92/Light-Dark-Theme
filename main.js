const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');
const bars = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');
const body = document.querySelector('body');

//Image mode
function imageMode(color) {
    image1.src =  `img/undraw_proud_coder_${color}.svg`;
    image2.src =  `img/undraw_feeling_proud_${color}.svg`;
    image3.src =  `img/undraw_conceptual_idea_${color}.svg`;
}


//Dark mode styles
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    // toggleIcon.children[1].classList.remove('fa-sun');
    // toggleIcon.children[1].classList.add('fa-moon');
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
}
//Light mode styles
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    imageMode('light');
}


//Switch Theme
function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

//EventListener
toggleSwitch.addEventListener('change', switchTheme);

//Check localStorage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode()
    }
}





//Responsive navigation

function showNavigation() {
    nav.classList.add('responsiveNav');
    bars.style.display = 'none';
    closeIcon.addEventListener('click', () => {
        nav.classList.remove('responsiveNav');
        bars.style.display = 'block';
        body.classList.remove('bodyScroll');
    })
    body.classList.add('bodyScroll');
}

bars.addEventListener('click', showNavigation);

