// const galerryAll = document.querySelectorAll(".gallery-img");

// galerryAll.forEach((img, i) => {
// 	img.dataset.aos = 'fade-down';
// });

gsap.registerPlugin(TextPlugin);
gsap.to(".lead", {duration: 2, delay: 1, text: "App Developer | Web Developer"})
gsap.from(".jumbotron img", {duration: 2, rotateY: 360, opacity: 0});
gsap.from("nav", {duration: 1.5,  y: -100, opacity: 0, ease: 'bounce'});
gsap.from(".display-4", {duration: 1,  x: -50, opacity: 0, delay: 0.5, ease: 'back'});