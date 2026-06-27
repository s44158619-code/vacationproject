const CART_KEY = "ahimha-cart";
const currency = new Intl.NumberFormat("ko-KR");

const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

function readCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadges();
}

function formatWon(value) {
  return `${currency.format(value)}원`;
}

function showToast(message) {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add("is-visible");

  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function updateCartBadges() {
  const count = readCart().reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((badge) => {
    badge.textContent = count;
  });
}

function addToCart(product) {
  const cart = readCart();
  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
  renderCart();
  showToast(`${product.name}을 장바구니에 담았습니다.`);
}

function changeQuantity(id, amount) {
  const cart = readCart()
    .map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item)
    .filter((item) => item.quantity > 0);

  saveCart(cart);
  renderCart();
}

function removeFromCart(id) {
  const cart = readCart().filter((item) => item.id !== id);
  saveCart(cart);
  renderCart();
  showToast("장바구니에서 삭제했습니다.");
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");

  if (!cartItems) {
    return;
  }

  const cart = readCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.getElementById("cartTotal").textContent = formatWon(total);
  document.getElementById("cartItemCount").textContent = `${itemCount}개`;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-cart">
        <h2>장바구니가 비어 있습니다.</h2>
        <p>서비스 페이지에서 필요한 항목을 담아보세요.</p>
        <a class="primary-button" href="./services.html">서비스 보러가기</a>
      </div>
    `;
    return;
  }

  cartItems.innerHTML = cart.map((item) => `
    <article class="cart-item">
      <img src="${item.image}" alt="${item.name}">
      <div>
        <h2>${item.name}</h2>
        <p>${item.desc}</p>
        <strong>${formatWon(item.price * item.quantity)}</strong>
      </div>
      <div class="cart-controls">
        <div class="quantity-control" aria-label="${item.name} 수량 조절">
          <button type="button" data-cart-action="decrease" data-cart-id="${item.id}" aria-label="수량 줄이기">-</button>
          <span>${item.quantity}</span>
          <button type="button" data-cart-action="increase" data-cart-id="${item.id}" aria-label="수량 늘리기">+</button>
        </div>
        <button class="remove-button" type="button" data-cart-action="remove" data-cart-id="${item.id}">삭제</button>
      </div>
    </article>
  `).join("");
}

function renderCheckout() {
  const checkoutItems = document.getElementById("checkoutItems");

  if (!checkoutItems) {
    return;
  }

  const cart = readCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalElement = document.getElementById("checkoutTotal");

  if (totalElement) {
    totalElement.textContent = formatWon(total);
  }

  if (cart.length === 0) {
    checkoutItems.innerHTML = `
      <div class="empty-checkout">
        <strong>담긴 서비스가 없습니다.</strong>
        <p>서비스를 먼저 장바구니에 담아주세요.</p>
        <a class="link-button center-link" href="./services.html">서비스 보러가기</a>
      </div>
    `;
    return;
  }

  checkoutItems.innerHTML = cart.map((item) => `
    <article>
      <span>${item.name}</span>
      <strong>${formatWon(item.price * item.quantity)}</strong>
      <small>${item.quantity}개 · ${item.desc}</small>
    </article>
  `).join("");
}

function setupSlider() {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const dots = Array.from(document.querySelectorAll(".dots button"));
  const prevButton = document.getElementById("prevSlide");
  const nextButton = document.getElementById("nextSlide");

  if (!slides.length || !prevButton || !nextButton) {
    return;
  }

  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("is-active", slideIndex === currentSlide);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentSlide);
    });
  }

  prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
  nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => showSlide(Number(dot.dataset.slide)));
  });

  window.setInterval(() => showSlide(currentSlide + 1), 5200);
}

function setupNoticeSearch() {
  const searchInput = document.querySelector("[data-notice-search]");
  const rows = Array.from(document.querySelectorAll("[data-notice-row]"));

  if (!searchInput || !rows.length) {
    return;
  }

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();

    rows.forEach((row) => {
      row.hidden = keyword.length > 0 && !row.textContent.toLowerCase().includes(keyword);
    });
  });
}

function setupFooterLinks() {
  const footerLinks = document.querySelector(".footer-links");

  if (!footerLinks || footerLinks.querySelector("[data-policy-link]")) {
    return;
  }

  const root = document.body.dataset.root === ".." ? "." : "./pages";
  const links = [
    { href: `${root}/terms.html`, label: "이용약관" },
    { href: `${root}/privacy.html`, label: "개인정보처리방침" }
  ];

  links.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    anchor.dataset.policyLink = "true";
    footerLinks.appendChild(anchor);
  });
}

menuToggle?.addEventListener("click", () => {
  siteHeader?.classList.toggle("is-open");
});

document.querySelectorAll(".main-nav a, .account-actions a").forEach((link) => {
  link.addEventListener("click", () => {
    siteHeader?.classList.remove("is-open");
  });
});

document.querySelectorAll(".add-cart-button").forEach((button) => {
  button.addEventListener("click", () => {
    addToCart({
      id: button.dataset.cartId,
      name: button.dataset.cartName,
      price: Number(button.dataset.cartPrice),
      desc: button.dataset.cartDesc,
      image: new URL(button.dataset.cartImage, window.location.href).href
    });
  });
});

document.addEventListener("click", (event) => {
  const control = event.target.closest("[data-cart-action]");

  if (!control) {
    return;
  }

  const id = control.dataset.cartId;
  const action = control.dataset.cartAction;

  if (action === "increase") {
    changeQuantity(id, 1);
  }

  if (action === "decrease") {
    changeQuantity(id, -1);
  }

  if (action === "remove") {
    removeFromCart(id);
  }
});

document.querySelectorAll("[data-fake-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("아직 실제 전송은 연결 전입니다. 링크와 계정 정보를 받으면 연결할 수 있습니다.");
  });
});

document.getElementById("checkoutButton")?.addEventListener("click", () => {
  const cart = readCart();

  if (cart.length === 0) {
    showToast("장바구니에 담긴 서비스가 없습니다.");
    return;
  }

  window.location.href = "./checkout.html";
});

setupSlider();
setupNoticeSearch();
setupFooterLinks();
updateCartBadges();
renderCart();
renderCheckout();
