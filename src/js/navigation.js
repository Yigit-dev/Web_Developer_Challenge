export default () => {
  var t1 = new TimelineMax({ paused: true });

  t1.to(".menu", 0.4, {
    autoAlpha: 1,
  });

  t1.staggerFrom(
    ".main-menu li",
    1,
    {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
    },
    0.1
  );

  t1.staggerFrom(
    ".media ul li",
    0.4,
    {
      opacity: 0,
      y: 10,
      ease: Power3.easeInOut,
    },
    0.1,
    "-=2"
  );

  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-menu");
  const mainMenuItem = document.querySelectorAll(".main-menu-item");

  t1.reverse();
  menuBtn.addEventListener("click", () => {
    t1.reversed(!t1.reversed());
  });

  closeBtn.addEventListener("click", () => {
    t1.reversed(!t1.reversed());
  });

  mainMenuItem.forEach((item) =>
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    })
  );

}