const body = document.body;
const main = document.createElement('main');
main.setAttribute('class', 'mainClass check item');

const div = document.createElement('div');
div.setAttribute('id', 'myDiv');

const paragraph = document.createElement('p');
paragraph.textContent = 'First paragraph';

div.appendChild(paragraph);
main.appendChild(div);
body.appendChild(main);

