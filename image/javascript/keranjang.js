// Fungsi untuk menambahkan produk ke keranjang
function addToCart(id, nama, harga) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Cek apakah produk sudah ada di keranjang
  const productIndex = cart.findIndex((item) => item.id === id);

  if (productIndex === -1) {
    // Jika produk belum ada, tambahkan produk baru ke keranjang
    cart.push({
      id: id,
      nama: nama,
      harga: harga,
      quantity: 1,
    });
  } else {
    // Jika produk sudah ada, tingkatkan kuantitasnya
    cart[productIndex].quantity += 1;
  }

  // Simpan kembali data keranjang ke localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Pindah ke halaman keranjang
  window.location.href = "keranjang.html";
}

// Event listener untuk tombol "Tambah ke Keranjang" di halaman produk
document.addEventListener("DOMContentLoaded", function () {
  const addButtons = document.querySelectorAll(".add-to-cart");

  addButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const id = parseInt(button.getAttribute("data-id"));
      const nama = button.getAttribute("data-nama");
      const harga = parseInt(button.getAttribute("data-harga"));

      addToCart(id, nama, harga);
    });
  });

  // Event listener untuk tombol "Tambah Ke Keranjang" pada modal
  const addButtonModal = document.querySelector(".btntambahKeKeranjang");

  if (addButtonModal) {
    addButtonModal.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-id"));
      const nama = this.getAttribute("data-nama");
      const harga = parseInt(this.getAttribute("data-harga"));

      addToCart(id, nama, harga);
    });
  }
});
