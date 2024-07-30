const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));


// document.addEventListener("DOMContentLoaded", function () {
//     const lenis = new Lenis();

//     lenis.on("scroll", ScrollTrigger.update);

//     gsap.ticker.add((time) => {
//         lenis.raf(time * 1000);
//     });

//     gsap.ticker.lagSmoothing(0);

//     const services = gsap.utils.toArray(".service");

//     const observerOptions = {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.1,
//     };

//     const observerCallback = (entries, observer) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const service = entry.target;
//                 const imgContainer = service.querySelector(".img");

//                 ScrollTrigger.create({
//                     trigger: service,
//                     start: "bottom bottom",
//                     end: "top top",
//                     scrub: true,
//                     onUpdate: (self) => {
//                         let progress = self.progress;
//                         let newWidth = 30 + 70 * progress;
//                         gsap.to(imgContainer, {
//                             width: newWidth + "%",
//                             duration: 0.1,
//                             ease: "none",
//                         });
//                     },
//                 });


//                 ScrollTrigger.create({
//                     trigger: service,
//                     start: "top bottom",
//                     end: "top top",
//                     scrub: true,
//                     onUpdate: (self) => {
//                         let progress = self.progress;
//                         let newHeight = 150 + 300 * progress;
//                         gsap.to(service, {
//                             height: newHeight + "px",
//                             duration: 0.1,
//                             ease: "none",
//                         });
//                     },
//                 });

//                 // observer.unobserve(service);
//             }
//         });
//     };
//     const observer = new IntersectionObserver(observerCallback, observerOptions);

//     services.forEach((service) => {
//         observer.observe(service);
//     });
// });


// CustomStateSet.create("cubic", "0.83, 0, 0.17, 1");
// let isAnimating = false;

// function splitTextIntoSpans(selector){
//     let elements = document.querySelectorAll(selector);
//     elements.forEach((element) => {
//         let text = element.innerText;
//         let splitText = text
//             .split("")
//             .map(function (char) {
//                 return `<span>${char === " "? "&nbsp;&nbsp;" : char}</span>`;
//             })
//             .join("");
//             element.innerHTML = splitText;
//     });
// }

// function initializeCards() {
//     let cards = Array.from(document.querySelectorAll(".card"));
//     gsap.to(cards, {
//         y: (i) => -15 + 15 * i + "%",
//         z: (i) => 15 * i,
//         duration: 1,
//         ease: "cubic",
//         stagger: -0.1,
//     });
// }

// document.addEventListener("DOMContentLoaded", function(){
//     // document.addEventListener("workContainer", function(){
//     splitTextIntoSpans(".copy h1");
//     initializeCards();

//     gsap.set("h1 span", { y: -200 });
//     gsap.set(".slider .card:last-child h1 span", { y: 0 })
// });