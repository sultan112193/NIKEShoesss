// JavaScript untuk mengambil data dan menampilkan di modal
document.querySelectorAll(".btnDetail").forEach((button) => {
  button.addEventListener("click", function () {
    // Ambil elemen terkait dengan card
    const card = this.closest(".card");
    const imageSrc = card.querySelector("img").getAttribute("src");
    const text = card.querySelector(".card-text").textContent;
    const deskripsi = card.querySelector(".deskripsi").innerHTML;
    const harga = card.querySelector(".harga").textContent;

    // Update modal dengan data yang diambil
    document.querySelector(".modalTitle").textContent = text; // Judul modal
    document.querySelector(
      ".modalImage"
    ).innerHTML = `<img src="${imageSrc}" class="img-fluid" alt="product image">`; // Gambar produk
    document.querySelector(".modalDeskripsi").innerHTML = deskripsi; // Deskripsi produk
    document.querySelector(".modalHarga").textContent = harga; // Harga produk
  });
});
