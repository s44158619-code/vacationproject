const slides = Array.from(document.querySelectorAll(".slide"));
const dots = Array.from(document.querySelectorAll(".dots button"));
const panels = {
  login: document.getElementById("loginPanel"),
  signup: document.getElementById("signupPanel"),
  find: document.getElementById("findPanel"),
  guide: document.getElementById("guidePanel"),
  center: document.getElementById("centerPanel"),
  cart: document.getElementById("cartPanel"),
  notice: document.getElementById("noticePanel")
};

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

document.getElementById("prevSlide").addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

document.getElementById("nextSlide").addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
  });
});

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

document.querySelectorAll("[data-panel]").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = panels[button.dataset.panel];

    if (!panel) {
      return;
    }

    Object.values(panels).forEach((item) => {
      if (item !== panel && item.open) {
        item.close();
      }
    });

    panel.showModal();
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});
