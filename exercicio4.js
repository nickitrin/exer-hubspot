const API_USER = "https://randomuser.me/api/?results=4"

const fetchData = async () => {

try{    const response = await fetch(API_USER);
    if (!response.ok){
        throw new Error (`DEU ERRO ${response.status}`);
    }
    const dados = await response.json();
    const idades = dados.results.filter( dados => dados.dob);
    console.log("idades");
    idades.forEach(idade => {
        console.log(idade.dob.age);
});
    return idades;
}
catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};
fetchData();