document.addEventListener("DOMContentLoaded", function() {
    let role = localStorage.getItem("userRole") || "visitor";
    applyRole(role);

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
            addPost(postText);
            postInput.value = "";
        }
    });
});

function applyRole(role) {
    if (role === "editor") {
        document.getElementById("post-form").style.display = "flex";
    } else {
        document.getElementById("post-form").style.display = "none";
    }
}

function addPost(text) {
    const postContainer = document.getElementById("posts-container");
    const postElement = document.createElement("div");
    postElement.textContent = text;
    postElement.style.background = "#007bff";
    postElement.style.color = "#fff";
    postElement.style.padding = "10px";
    postElement.style.margin = "10px 0";
    postElement.style.borderRadius = "5px";
    postContainer.appendChild(postElement);
}
