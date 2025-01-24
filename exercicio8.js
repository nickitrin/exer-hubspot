
const ApiMinha = "https://jsonplaceholder.typicode.com/posts" 
async function postData(url, data) {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log("Success:", result);
  }

  postData("https://jsonplaceholder.typicode.com/posts", { username: "Nicole", age:"25" });

  const getData =  async () =>{
    const response = await fetch(ApiMinha);
    if (response.status===200){
        const data = await response.json();
        console.log("Success:", data);
        return data;
    }
  }
  getData();

