function addPost() {
  const postContent = prompt("Введите текст новости:");
  if (postContent) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <h3>Новая новость</h3>
      <p>${postContent}</p>
      <p><small>${new Date().toLocaleString()}</small></p>
    `;
    document.getElementById("posts").appendChild(postElement);
  }
}
