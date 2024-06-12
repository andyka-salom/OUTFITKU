document.addEventListener('DOMContentLoaded', function() {
  const userNav = document.getElementById('userNav');
  const siteMenu = document.getElementById('siteMenu');
  const userType = localStorage.getItem('userType');
  const userIcon = document.getElementById('userIcon');
  const heartIcon = document.getElementById('heartIcon');
  const cartIcon = document.getElementById('cartIcon');

  if (userType === 'user') {
    if (userNav) {
      userNav.style.display = 'block';
    }
    if (siteMenu) {
      siteMenu.innerHTML += `
        <li><a href="history.html">History Order</a></li>
        <li><a href="#" id="logout">Logout</a></li>
      `;
    }
  } else {
    if (userNav) {
      userNav.style.display = 'none';
    }
    if (siteMenu) {
      siteMenu.innerHTML += `
        <li><a href="login.html">Login / Sign-up</a></li>
      `;
    }
    // Hide icons when not logged in
    if (userIcon) {
      userIcon.style.display = 'none';
    }
    if (heartIcon) {
      heartIcon.style.display = 'none';
    }
    if (cartIcon) {
      cartIcon.style.display = 'none';
    }
  }

  // Add event listener for logout
  document.getElementById('logout')?.addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    window.location.href = 'index.html';
  });
});

document.getElementById("logoutBtn")?.addEventListener("click", function(e) {
  e.preventDefault(); // Menghentikan perilaku default dari tautan
  localStorage.removeItem("userData"); // Menghapus data dari local storage
  window.location.href = "../index.html"; // Mengarahkan pengguna ke halaman index
});
