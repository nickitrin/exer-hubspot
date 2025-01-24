const APIHP =  "https://hp-api.onrender.com/api/characters"

const fetchdata = async () => {
    try {
        const response = await fetch(APIHP);
        if (!response.ok){
            throw new Error(`DEU ERRO IRMÃO ${Response.status}`);
        }
        const personagens = await response.json();

        const personagensfiltrados = personagens.filter(
            personagem => personagem.name && personagem.name.charAt(0).toUpperCase() === 'A'
        );
        console.log("Personagens com a letra A");
        personagensfiltrados.forEach(personagem => {
            console.log(personagem.name);
            
        });

        return personagensfiltrados;


    }
    catch (error) {
        console.log(error)
}
};

fetchdata()