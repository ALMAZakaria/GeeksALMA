//   Exercise 1
const h1 = document.querySelector('h1');
console.log(h1);

const article = document.querySelector('article');
article.lastElementChild.remove();

const h2 = document.querySelector('h2');
h2.addEventListener('click', () => {
  h2.style.backgroundColor = 'red';
});

const h3 = document.querySelector('h3');
h3.addEventListener('click', () => {
  h3.style.display = 'none';
});

const boldBtn = document.getElementById('boldBtn');
boldBtn.addEventListener('click', () => {
  article.querySelectorAll('p').forEach(p => {
    p.style.fontWeight = 'bold';
  });
});

h1.addEventListener('mouseover', () => {
  const size = Math.floor(Math.random() * 100) + 'px';
  h1.style.fontSize = size;
});
h1.addEventListener('mouseout', () => {
  h1.style.fontSize = '2rem';
});

const secondParagraph = article.querySelectorAll('p')[1];
secondParagraph.classList.add('transition-opacity', 'duration-700');
secondParagraph.addEventListener('mouseover', () => {
  secondParagraph.classList.add('opacity-0');
});
secondParagraph.addEventListener('mouseout', () => {
  secondParagraph.classList.remove('opacity-0');
});

//   Exercise 2
const form = document.getElementById('nameForm');
console.log(form);

const fnameInput = document.getElementById('fname');
const lnameInput = document.getElementById('lname');
console.log(fnameInput, lnameInput);

const fnameByName = document.getElementsByName('firstname')[0];
const lnameByName = document.getElementsByName('lastname')[0];
console.log(fnameByName, lnameByName);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const fname = fnameInput.value.trim();
  const lname = lnameInput.value.trim();

  if (fname && lname) {
    const ul = document.querySelector('.usersAnswer');
    ul.innerHTML = '';

    [fname, lname].forEach(val => {
      const li = document.createElement('li');
      li.textContent = val;
      ul.appendChild(li);
    });

    form.reset();
  }
});

//   Exercise 3
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll('#hoverText strong');
}
function highlight() {
  allBoldItems.forEach(item => item.style.color = 'blue');
}
function returnItemsToDefault() {
  allBoldItems.forEach(item => item.style.color = 'black');
}

const paragraph = document.getElementById('hoverText');
getBoldItems();
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);

//   Exercise 4
document.getElementById('MyForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const radius = parseFloat(document.getElementById('radius').value);
  if (!isNaN(radius)) {
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(2);
  } else {
    alert('Please enter a valid number');
  }
});
