const ApiAni = "https://freetestapi.com/api/v1/animals";

const fetchAnimal = async() => {
    const response = await fetch(ApiAni);
    if (response.status === 200) {
        const animals = await response.json();
        const animalweight = animals.filter(animal => animal.weight_kg);
        
        animalweight.forEach(element => {
            if (element.weight_kg<10) {
                console.log(element.weight_kg);
            };
        });

        return animalweight;
    }
};
fetchAnimal();
