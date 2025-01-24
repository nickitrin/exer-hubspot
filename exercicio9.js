const API_URL = "http://localhost:3000/posts";

// Adicionar um novo post
async function addPost(data) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log("Post criado:", result);
}

// Obter todos os posts
async function getPosts() {
  const response = await fetch(API_URL);
  const posts = await response.json();
  console.log("Posts:", posts);
}

// Deletar um post por ID
async function deletePost(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  console.log(`Post ${id} deletado`);
}

// Testando as funções
addPost({ username: "Nicole", age: 25 });
getPosts();
deletePost(1);
