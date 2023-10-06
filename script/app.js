let t1 = gsap.timeline({ repeat: -1 });
t1.to(".QRcode3", { opacity: 0, duration: 1 }, 4);
t1.to(".QRcode2", { opacity: 0, duration: 1 }, 9);
t1.to(".QRcode1", { opacity: 0, duration: 1 }, 14);
t1.to(".QRcode3", { opacity: 1, duration: 1 }, 14);
let header = document.querySelector("header");
let scrollStart = 0;
let scrollEnd;
window.addEventListener("scroll", (e) => {
  scrollEnd = window.scrollY;
  if (scrollEnd - scrollStart > 0) {
    setTimeout(() => {
      scrollStart = scrollEnd;
      header.style.top = "-100px";
    }, 100);
  } else {
    setTimeout(() => {
      scrollStart = scrollEnd;
      header.style.top = "0px";
    }, 100);
  }
});
