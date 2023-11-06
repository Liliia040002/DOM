const sendBtn = document.querySelector('.btn');
const informBox = document.querySelector('.out');

sendBtn.addEventListener('click', () => {
  const nameIn = document.querySelector('input[name="fio"]').value;
  const phone = document.querySelector('input[name="phone"]').value;
  const birthday = document.querySelector('input[name="birthday"]').value;
  const email = document.querySelector('input[name="email"]').value;



  informBox.innerHTML = `ПІБ: ${nameIn}<br>Номер телефону: ${phone}<br>Дата народження: ${birthday}<br>Електронна пошта: ${email}`;
  
  document.querySelectorAll('input').forEach(input => input.value = '');

});
