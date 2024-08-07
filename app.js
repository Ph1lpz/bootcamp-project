const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");
const login = document.getElementById("login");
const loginMenu = document.getElementById("login-menu");
const loginMenuBtn = document.getElementById("login-menu-btn");

// ? event listner for showing and hiding menu

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// ? event listner for showing and hiding login menu


login.addEventListener("click", () => {
  loginMenu.classList.toggle("hidden");
});

console.log(!loginMenu.classList.contains("hidden"));

// ? event listner for closing login menu automatically after 5 seconds
setInterval(() => {
    if(!loginMenu.classList.contains("hidden")){
        loginMenu.classList.add("hidden");
    }
}, 5000)

    const pages = document.querySelectorAll(".page")

    function showPage(pageId) {
      pages.forEach(page => {
        page.style.display = (page.id === pageId) ? 'block' : 'none';
      })
    }

    document.getElementById('homeBtn').addEventListener('click', () => showPage('homePage'));
    document.getElementById('aboutBtn').addEventListener('click', () => showPage('aboutPage'));
    document.getElementById('contactBtn').addEventListener('click', () => showPage('contactPage'));
    document.getElementById('registerBtn').addEventListener('click', () => showPage('registerPage'));
    document.getElementById('login-menu-btn').addEventListener('click', () => showPage('loginPage'))

/** try this idea tommorow
 
 
 
<nav>
  <button id="homeBtn">Home</button>
  <button id="aboutBtn">About</button>
  <button id="contactBtn">Contact Us</button>
  <button id="registerBtn">Register</button>
</nav>

<script>
  const pages = document.querySelectorAll('.page');
  
  function showPage(pageId) {
    pages.forEach(page => {
      page.style.display = (page.id === pageId) ? 'block' : 'none';
    });
  }

  document.getElementById('homeBtn').addEventListener('click', () => showPage('homePage'));
  document.getElementById('aboutBtn').addEventListener('click', () => showPage('aboutPage'));
  document.getElementById('contactBtn').addEventListener('click', () => showPage('contactPage'));
  document.getElementById('registerBtn').addEventListener('click', () => showPage('registerPage'));
</script>

 * 
 * 
 */