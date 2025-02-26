document.addEventListener("DOMContentLoaded", function () {
  let cart = [];

  function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("cart-total");
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      let li = document.createElement("li");
      li.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      li.textContent = `${item.name} - Rp. ${item.price.toLocaleString()}`;

      let removeBtn = document.createElement("button");
      removeBtn.textContent = "Hapus";
      removeBtn.classList.add("btn", "btn-danger", "btn-sm");
      removeBtn.onclick = () => {
        cart.splice(index, 1);
        updateCart();
      };

      li.appendChild(removeBtn);
      cartList.appendChild(li);
      total += item.price;
    });

    totalPrice.textContent = `Rp. ${total.toLocaleString()}`;
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", function () {
      let name = this.getAttribute("data-name");
      let price = parseInt(this.getAttribute("data-price"));
      cart.push({ name, price });
      updateCart();
    });
  });

  document.getElementById("clear-cart").addEventListener("click", function () {
    cart = [];
    updateCart();
  });
});
