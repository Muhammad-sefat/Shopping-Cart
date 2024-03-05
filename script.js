const addCart = () => {
  const inputName = document.getElementById("input-name").value;
  const inputValue = document.getElementById("input-value").value;
  document.getElementById("input-name").value = "";
  document.getElementById("input-value").value = "";
  setNameValueInCart(inputName, inputValue);
  saveDataInLocalStroage(inputName, inputValue);
};

function setNameValueInCart(name, value) {
  const showValue = document.getElementById("show-value");
  const li = document.createElement("li");
  li.innerText = `${name} : ${value}`;
  showValue.appendChild(li);
}

const setDataInLocalStroage = () => {
  let cart = {};
  const shopCart = localStorage.getItem("cart");
  if (shopCart) {
    cart = JSON.parse(shopCart);
  }
  return cart;
};

const saveDataInLocalStroage = (name, value) => {
  const cart = setDataInLocalStroage();
  cart[name] = value;
  const stringfyData = JSON.stringify(cart);
  localStorage.setItem("cart", stringfyData);
};

const displayProducts = () => {
  const saveData = setDataInLocalStroage();
  for (let name in saveData) {
    const value = saveData[name];
    setNameValueInCart(name, value);
  }
};
displayProducts();
