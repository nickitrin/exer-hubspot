const APIDISNEY =  "https://api.disneyapi.dev/character"

const fetchdata =  async () =>{
    const response = await fetch(APIDISNEY)
    if (!response.ok){
        throw new Error(`deu erro ${response.status}`)
    }
    
    const dados = await response.json()
    const personagens = dados.data
    
    const personagensfiltrados = personagens.filter(personagem =>
        personagem.films
    );

    console.log("Personagens com a letra A");
    personagensfiltrados.forEach(personagem =>
        console.log(personagem.films)
    );

    return personagensfiltrados
}

fetchdata()
