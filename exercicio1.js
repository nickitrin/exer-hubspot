const API_URL = "https://hp-api.onrender.com/api/characters";

const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Tá dando erro ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  const data = await fetchData();
};

main();
