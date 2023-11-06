document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');

    circles.forEach((circle) => {
      const dataAnim = circle.getAttribute('data-anim');

      circle.classList.add(dataAnim);

      if (circle.classList.contains(dataAnim)) {
        console.log(`Анімація "${dataAnim}" застосована до елемента.`);
      }
    });
  });