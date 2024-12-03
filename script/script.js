fetch('https://rickandmortyapi.com/api/character/')
.then(res => res.json())
.then(json => {
  const characters = json.results;
  const container = document.getElementById('Characters-container');
  

  characters.forEach(character => {
      const characterDiv = document.createElement('div');
      characterDiv.className = 'character';

      characterDiv.innerHTML = `
      <h2>${character.name}</h2>
      <img src="${character.image}" alt="${character.name}">
      <p>Character id: ${character.id}</p>
      <p>Status: ${character.status}</p>
      <p>Species: ${character.species}</p>
      <p>Gender: ${character.gender}</p>
      <p>Origin: ${character.origin.name}</p>
      <p>Location: ${character.location.name}</p>
    `;
    container.appendChild(characterDiv);
  });

  })

  .catch(error => console.error('Error', error));
    

fetch('https://rickandmortyapi.com/api/location/')
.then(res => res.json())
.then(json => {
  const location = json.results;
  const container = document.getElementById('Location-container');
  

  location.forEach(location => {
      const locationDiv = document.createElement('div');
      locationDiv.className = 'location';

      locationDiv.innerHTML = `
      <h2>${location.name}</h2>
      <p>location id: ${location.id}</p>
      <p>Type: ${location.type}</p>
      <p>Dimension: ${location.dimension}</p>
      <p>Residents: "PLACEHOLDER"</p>
    `;
    container.appendChild(locationDiv);
  });

  })

  .catch(error => console.error('Error', error));


fetch('https://rickandmortyapi.com/api/episode/')
.then(res => res.json())
.then(json => {
const episode = json.results;
const container = document.getElementById('Episode-container');

episode.forEach(async (episode) => {
    const episodeDiv = document.createElement('div');
    episodeDiv.className = 'episode';

    const characterPromises = episode.characters.slice(0, 5).map(url => fetch(url).then(res => res.json()));
    const characters = await Promise.all(characterPromises);
    const characterNames = characters.map(char => char.name).join(' , ');

    episodeDiv.innerHTML = `
    <h2>${episode.name}</h2>
    <p>Episode: ${episode.episode}</p>
    <p>Air date: ${episode.air_date}</p>
    <p>Characters: ${characterNames}</p>
  `;
  container.appendChild(episodeDiv);
});

})

.catch(error => console.error('Error', error));


