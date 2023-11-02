const topCta = document.querySelector(".top-cta");
const closeCta = document.querySelector(".top-cta__btn-close");

closeCta.addEventListener("click", () => {
  topCta.style.display = "none";
});

window.onscroll = function () {
  showOnScroll();
};

function showOnScroll() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topCta.style.display = "block";
  } else {
    topCta.style.display = "none";
  }
}
