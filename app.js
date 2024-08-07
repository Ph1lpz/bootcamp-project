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
      //? show page Btns
    document.getElementById('homeBtn').addEventListener('click', () => showPage('homePage'));
    document.getElementById('aboutBtn').addEventListener('click', () => showPage('aboutPage'));
    document.getElementById('contactBtn').addEventListener('click', () => showPage('contactPage'));
    document.getElementById('registerBtn').addEventListener('click', () => showPage('registerPage'));
    document.getElementById('login-menu-btn').addEventListener('click', () => showPage('loginPage'))



    //? login page validation

    const errorMsg = document.getElementById("errorMsg");

    document.getElementById('loginForm').addEventListener('submit', (event) => {
      event.preventDefault()
      // Clear previous errors
      errorMsg.textContent = '';

      // Form validation
      var isValid = true;
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      // Email validation
      if (!email) {
        errorMsg.textContent = 'Email address is required.';
        isValid = false;
      } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.indexOf('.')) {
        errorMsg.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Password validation
      if (!password) {
        errorMsg.textContent = 'Password is required.';
        isValid = false;
      } else if (password.length < 6) {
        errorMsg.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
      }

      if (isValid) {
        // code to display another website or maybe delete it
        alert(`user ${email} signed in`)
      }
      showPage('homePage')
    })

    // ? Register Form code


    document.getElementById("registerForm").addEventListener('submit' , (event) => {
        event.preventDefault()
        let isValid = true
        let errorMsg = document.getElementById('registerErrorMsg');
        let email = document.getElementById("registerEmail").value;
        let password = document.getElementById('registerPassword').value;
        let confirmPassword = document.getElementById("confirm-passowrd").value;
        let termsAccepted  = document.getElementById("terms").checked;
         // Email validation
      if (!email) {
       errorMsg.textContent = 'Email address is required.';
        isValid = false;
      } else if (email.indexOf('@') === -1 || email.indexOf('.') === -1 || email.indexOf('@') > email.indexOf('.')) {
       errorMsg.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      // Password validation
      if (!password) {
        errorMsg.textContent = 'Password is required.';
        isValid = false;
      } else if (password.length < 6) {
        errorMsg.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
      }

      // Confirm password validation
      if (password !== confirmPassword) {
        errorMsg.textContent = 'Passwords do not match.';
        isValid = false;
      }

      // Terms acceptance validation
      if (!termsAccepted) {
        errorMsg.textContent = 'You must accept the terms and conditions.';
        isValid = false;
      }

      
      if (isValid) {
        // this.submit();
        
        alert(`Registerd with ${email}`); // Placeholder for actual submission
      }
      showPage('homePage')
    })