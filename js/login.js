
    document.addEventListener('DOMContentLoaded', function() {
    const userNav = document.getElementById('userNav');
    const siteMenu = document.getElementById('siteMenu');
    const siteSearch = document.getElementById('siteSearch');
    const userType = localStorage.getItem('userType');

    if (userType === 'user') {
      userNav.style.display = 'block';
      siteMenu.innerHTML += `
        <li><a href="history.html">History Order</a></li>
        <li><a href="#" id="logout">Logout</a></li>
      `;
    } else {
      userNav.style.display = 'none';
      siteMenu.innerHTML += `
        <li><a href="login.html">Login / Sign-up</a></li>
      `;
    }

    // Add event listener for logout
    document.getElementById('logout')?.addEventListener('click', function(e) {
      e.preventDefault();
      localStorage.clear();
      window.location.href = 'index.html';
    });
  });

  document.getElementById("logoutBtn").addEventListener("click", function(e) {
    e.preventDefault(); // Menghentikan perilaku default dari tautan
    localStorage.removeItem("userData"); // Menghapus data dari local storage
    window.location.href = "../index.html"; // Mengarahkan pengguna ke halaman index
});