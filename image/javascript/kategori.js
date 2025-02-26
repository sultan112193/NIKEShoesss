document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarSupportedContent");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });

  // Dropdown functionality
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  if (dropdownToggle) {
    dropdownToggle.addEventListener("click", function (event) {
      event.preventDefault();
      this.nextElementSibling.classList.toggle("show");
    });
  }

  // Category button click event
  const categoryButtons = document.querySelectorAll(".category-btn");
  categoryButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Anda memilih kategori: " + this.getAttribute("data-category"));
    });
  });
});
