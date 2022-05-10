// ANIMAÇÃO SCROLL
export default function initAnimaScroll() {
  const activeClass = "ativo";
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowHalf = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowHalf < 0;
      if (isSectionVisible) {
        section.classList.add(activeClass);
      } else if (section.classList.contains("ativo")) {
        section.classList.remove(activeClass);
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
