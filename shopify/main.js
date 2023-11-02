const topCta = document.querySelector(".top-cta");
const closeCta = document.querySelector(".top-cta__btn-close");

closeCta.addEventListener("click", () => {
  topCta.remove();
});

window.onscroll = function () {
  showOnScroll();
};

function showOnScroll() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    topCta.style.display = "block";
  } else {
    topCta.style.display = "none";
  }
}
