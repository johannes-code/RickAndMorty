fetch('https://rickandmortyapi.com/api/character/')
.then(res => res.json())
.then(json => {
  const characters = json.results;
  const container = document.getElementById('Characters-container');
  

  characters.map(async (character) => {
      const characterDiv = document.createElement('div');
      characterDiv.className = 'character';

      const episodePromises = character.episode.map(url => fetch(url).then(res => res.json()));
      const episodes = await Promise.all(episodePromises);
      const episodesNames = episodes.map(episodes => episodes.name).join(' , ') 
      

      characterDiv.innerHTML = `
      <h3>${character.name}</h3>
      <img src="${character.image}" alt="${character.name}">
      <p><b>Character id:</b> ${character.id}</p>
      <p><b>Status:</b> ${character.status}</p>
      <p><b>Species:</b> ${character.species}</p>
      <p><b>Gender:</b> ${character.gender}</p>
      <p><b>Origin:</b> ${character.origin.name}</p>
      <p><b>Location:</b> ${character.location.name}</p>
      <p><b>Episodes:</b> ${episodesNames}</p>
    `;
    container.appendChild(characterDiv);
  });

  })    

fetch('https://rickandmortyapi.com/api/location/')
.then(res => res.json())
.then(json => {
  const location = json.results;
  const container = document.getElementById('Location-container');
  

  location.forEach(async (location) => {
      const locationDiv = document.createElement('div');
      locationDiv.className = 'location';

      const residentsPromises = location.residents.slice(0, 5).map(url => fetch(url).then(res => res.json()));
      const residents = await Promise.all(residentsPromises);
      const residentsNames = residents.map(residents => residents.name).join(' , ');

      locationDiv.innerHTML = `
      <h2>${location.name}</h2>
      <p><b>location id:</b> ${location.id}</p>
      <p><b>Type:</b> ${location.type}</p>
      <p><b>Dimension:</b> ${location.dimension}</p>
      <p><b>Residents:</b> ${residentsNames}</p>
    `;
    container.appendChild(locationDiv);
  });

  })

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
    <p><b>Episode:</b> ${episode.episode}</p>
    <p><b>Air date:</b> ${episode.air_date}</p>
    <p><b>Characters:</b> ${characterNames}</p>
  `;
  container.appendChild(episodeDiv);
});

})

.catch(error => console.error('Error', error));


