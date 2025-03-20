document.addEventListener("DOMContentLoaded", function() {
    let role = localStorage.getItem("userRole") || "visitor";
    applyRole(role);
    loadPosts();

    document.getElementById("menu-button").addEventListener("click", function() {
        document.getElementById("menu").classList.toggle("hidden");
    });

    document.getElementById("change-role").addEventListener("click", function() {
        role = (role === "visitor") ? "editor" : "visitor";
        localStorage.setItem("userRole", role);
        applyRole(role);
    });

    document.getElementById("post-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const postInput = document.getElementById("post-input");
        const postText = postInput.value.trim();
        if (postText !== "") {
            addPost(postText, true);
            savePost(postText);
            postInput.value = "";
        }
    });
});

function applyRole(role) {
    document.getElementById("post-form").style.display = (role === "editor") ? "flex" : "none";
}

function addPost(text, isNew = false) {
    const postContainer = document.getElementById("posts-container");
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.textContent = text;

    if (isNew) {
        postElement.classList.add("new-post"); // Анимация для новых постов
    }

    postContainer.appendChild(postElement);
}

function savePost(text) {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push(text);
    localStorage.setItem("posts", JSON.stringify(posts));
}

function loadPosts() {
    let posts = JSON.parse(localStorage.getItem("posts")) || [];
    document.getElementById("posts-container").innerHTML = ""; // Очищаем перед загрузкой
    posts.forEach(post => addPost(post));
}
