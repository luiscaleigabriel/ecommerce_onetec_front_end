document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('totalInCart').textContent = getCart().length;
  showProducts();
});
const btnsAdd = document.querySelectorAll('.addToCart');

btnsAdd.forEach(btnAdd => {
  btnAdd.addEventListener('click', () => {
    const name = btnAdd.getAttribute('data-name');
    const image = btnAdd.getAttribute('data-image');
    const price = btnAdd.getAttribute('data-price');
    const id = btnAdd.getAttribute('data-id');
    const quantity = 1;

    const product = {
      id: id,
      image: image,
      name: name,
      price: price,
      quantity: quantity
    };

    addToCart(product);
    
  });
});

function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let producExist = cart.find(item => item.id == product.id);

  if (producExist) {
    producExist.quantity += product.quantity;
  }else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  document.getElementById('totalInCart').textContent = getCart().length;
}

function getCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) ||[];
  return cart;
}

function showProducts() {
  const products = getCart();
  const showAll = document.getElementById('product-list--main');
  let total= 0;

  showAll.innerHTML = '';

  if (products.length <= 0) {
    showAll.innerHTML = '<h2 style="margin-block: 20px;">Nenhum produto adicionado</h2>';
  }

  products.forEach(product => {
    let productTr = document.createElement('tr');
    
    productTr.innerHTML = `
    <td>
      <div class="item-product">
        <div>
          <img src="${product.image}" alt="Product" />
        </div>
        <h2>${product.name}</h2>
      </div>
    </td>
    <td>
      ${product.price} kz
    </td>
      <td>
        <button class="btn-change" onclick="subtraiProduct(${product.id})">-</button>

        <input type="number" name="qtd" id="qtd" value="${product.quantity}" disabled />

        <button id="btn-change" onclick="addProdct(${product.id})">+</button>
      </td>
      <td>
        ${product.quantity * product.price} Kz
      </td>
      <td>
        <button class="btn-primary" onclick="removeProduct(${product.id})">Remover</button>
      </td>
    `;

    let valor = (product.price * product.quantity);
    total += (product.price * product.quantity);
    
    showAll.appendChild(productTr);
  });

  document.getElementById('total').textContent = `Total: ${total} Kz`;

}

function showInCheckout() {
  const products = getCart();
  const showAll = document.getElementById('list-checkout');
  let total= 0;

  showAll.innerHTML = '';

  if (products.length <= 0) {
    showAll.innerHTML = '<h2 style="margin-block: 20px;">Nenhum produto adicionado</h2>';
  }

  products.forEach(product => {
    let productTr = document.createElement('tr');
    
    productTr.innerHTML = `
    
    `;

    let valor = (product.price * product.quantity);
    total += (product.price * product.quantity);
    
    showAll.appendChild(productTr);
  });

  document.getElementById('total').textContent = `Total: ${total} Kz`;

}

function removeProduct(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id == productId);

  if (productIndex != -1) {
    cart.splice(productIndex, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  showProducts();
  document.getElementById('totalInCart').textContent = getCart().length;
}

function addProdct(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id == productId);

  if (productIndex != -1) {
    cart[productIndex].quantity += 1;
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  showProducts();
  document.getElementById('totalInCart').textContent = getCart().length;
}

function subtraiProduct(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id == productId);

  if (productIndex != -1) {
    if (cart[productIndex].quantity > 1) {
      cart[productIndex].quantity -= 1
    }else {
      cart.splice(productIndex, 1);
    }
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  showProducts();
  document.getElementById('totalInCart').textContent = getCart().length;
}

