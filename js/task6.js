const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoe');
const gradients = document.querySelectorAll('.gradient');
const outPrice = document.querySelector('#outprice');

colors.forEach(color => {
  color.addEventListener('click', () => {
    colors.forEach(c => c.classList.remove('active'));
    color.classList.add('active');

    const selectedColor = color.getAttribute('color');

    shoes.forEach(shoe => {
      const shoeColor = shoe.getAttribute('color');
      if (shoeColor === selectedColor) {
        shoe.classList.add('show');
      } else {
        shoe.classList.remove('show');
      }
    });

    gradients.forEach(gradient => {
      const gradientColor = gradient.getAttribute('color');
      if (gradientColor === selectedColor) {
        gradient.style.opacity = 1;
      } else {
        gradient.style.opacity = 0;
      }
    });

    outPrice.innerHTML = color.getAttribute('data-price');
  });
});