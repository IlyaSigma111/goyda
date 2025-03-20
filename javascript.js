body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f8ff;
    color: #333;
}
.menu {
    position: fixed;
    left: -250px;
    top: 0;
    width: 250px;
    height: 100%;
    background: #1e3a8a;
    color: white;
    padding: 15px;
    transition: left 0.3s ease-in-out;
}
.menu a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 10px 0;
}
.menu-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}
.menu-btn.active {
    transform: rotate(90deg);
}
.clouds {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding: 20px;
    flex-wrap: wrap;
}
.cloud {
    background: white;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    text-align: center;
    min-width: 150px;
    max-width: 200px;
}
.role-switch {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
    padding: 5px;
    background: white;
    border: 1px solid #1e3a8a;
    cursor: pointer;
}
.hidden { display: none; }
