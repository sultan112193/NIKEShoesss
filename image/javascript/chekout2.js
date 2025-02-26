// Fungsi untuk melakukan checkout
function checkout() {
  // Kosongkan keranjang setelah checkout
  localStorage.removeItem("cart");

  // Update tampilan keranjang setelah checkout
  displayCart();

  // Tampilkan notifikasi checkout berhasil
  alert("Checkout sukses!");

  // Arahkan pengguna kembali ke halaman utama (pertemuan.html)
  window.location.href = "pertemuan.html";
}
