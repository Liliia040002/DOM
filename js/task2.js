const mainTitle = document.querySelector("h1");

mainTitle.style.backgroundColor = "green";

const paragraphs = document.getElementById("myDiv");

const firstParagraph = myDiv.getElementsByTagName('p')[0];
firstParagraph.style.fontWeight = 'bold'; 

const secondParagraph = myDiv.getElementsByTagName('p')[1];
secondParagraph.style.color = 'red';

const thirdParagraph = myDiv.getElementsByTagName('p')[2];
thirdParagraph.style.textDecoration = 'underline'; 



const myList = document.getElementById('myList');
const liElements = myList.getElementsByTagName('li');

let combinedText = "";
for (const li of liElements) {
  combinedText += li.textContent.trim();
  
}


myList.innerHTML = combinedText;



const spanElements = document.getElementsByTagName('span');
      
for (const span of spanElements) {
  span.style.display = 'none';
}


