// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show')
//         } else {

//             entry.target.classList.remove('show')
//         }
//     });
// });

// const hidden = document.querySelectorAll('cacher');

// hidden.forEach((el) => {
//     observer.observe(el)
// })


"use strict";
(function() {

    window.addEventListener('load', init)

    function init() {
        qs('.menu-btn').addEventListener('click', afficher);

        function afficher() {

            let nav = qs('.navbar');

            //     nav.ClassList.toggle('.afficher')
            if (nav.style.visibility == "hidden") {
                nav.style.visibility = 'visible';
                this.innerHTML = '<i class="bx bx-x"></i>'
            } else {
                this.innerHTML = '<i class="bx bx-menu"></i>'
                nav.style.visibility = 'hidden';
            }
        }

    }

    function qs(qs) {
        return document.querySelector(qs);
    }

})();