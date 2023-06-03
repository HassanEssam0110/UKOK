let nav = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        nav.classList.add('navbar-scrolling');
    }
    else {
        nav.classList.remove('navbar-scrolling');
    }
})

let hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));