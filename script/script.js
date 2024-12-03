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
    


