document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('totalInCart').textContent = getCart().length;
});
const btnsAdd = document.querySelectorAll('.addToCart');

btnsAdd.forEach(btnAdd => {
  btnAdd.addEventListener('click', () => {
    const name = btnAdd.getAttribute('data-name');
    const image = btnAdd.getAttribute('data-image');
    const price = btnAdd.getAttribute('data-price');
    const id = btnAdd.getAttribute('data-id');
    const quantity = 1

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
  const showAll = document.getElementById('product-list');

  showAll.innerHTML = '';

  products.forEach(product => {
    let productLi = document.createElement('li');
    productLi.classList.add('product-item');
    
    let productId = document.createElement('span');
    productId.textContent = product.id;

    let productName = document.createElement('span');
    productName.textContent = product.name;

    let productPrice = document.createElement('span');
    productPrice.textContent = `${product.price} Kz`;

    let productQuantity = document.createElement('span');
    productQuantity.textContent = product.quantity;

    let btnRemove = document.createElement('button');
    btnRemove.classList.add('remove');
    btnRemove.setAttribute('data-id', product.id);
    btnRemove.textContent = 'Deletar';

    let btnDiminuir = document.createElement('button');
    btnDiminuir.classList.add('redux');
    btnDiminuir.setAttribute('data-id', product.id);
    btnDiminuir.textContent = '-';

    productLi.appendChild(productId);
    productLi.appendChild(productName);
    productLi.appendChild(productPrice);
    productLi.appendChild(productQuantity);
    productLi.appendChild(btnDiminuir);
    productLi.appendChild(btnRemove);
    showAll.appendChild(productLi);
  });

}

function removeProduct(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id === productId);

  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

function subtraiProduct(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productIndex = cart.findIndex(item => item.id === productId);

  if (productIndex !== -1) {
    if (cart[productIndex].quantity > 1) {
      cart[productIndex].quantity -= 1
    }else {
      cart.splice(productIndex, 1);
    }
  }

  localStorage.setItem('cart', JSON.stringify(cart));
}

const btnRemoves = document.querySelectorAll('.remove');
const btnReduxs = document.querySelectorAll('.redux');

btnRemoves.forEach(btn => btn.addEventListener('click', () => {
  removeProduct(btn.getAttribute('data-id'));
}));

btnReduxs.forEach(btn => btn.addEventListener('click', () => {
  subtraiProduct(btn.getAttribute('data-id'));
}));
