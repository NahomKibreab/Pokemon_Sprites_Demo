const baseURL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const container = document.querySelector('#container');

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement('div');
  pokemon.classList.add('pokemon');
  const img = document.createElement('img');
  const label = document.createElement('span');
  label.innerText = `#${i}`;
  img.src = `${baseURL}${i}.png`;
  pokemon.appendChild(img);
  pokemon.appendChild(label);
  container.appendChild(pokemon);
}
