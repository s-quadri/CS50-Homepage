const jumbotron = document.querySelector(".jumbotron");
const pages = document.querySelector(".pages");

const tl = new TimelineMax();

tl.fromTo(jumbotron, 2, { x: "-100%" }, {x: "0%", ease: Power2.easeInOut })

    .fromTo(pages, 2, { x: "100%" }, {x: "0%", ease: Power2.easeInOut }, "-=2");