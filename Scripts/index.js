const testimonials = document.querySelectorAll(".testimonial");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

leftArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
});

showTestimonial(currentIndex);

document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email-input");
  const subscribeBtn = document.getElementById("subscribe-btn");
  const message = document.getElementById("subscribe-message");

  const savedEmail = localStorage.getItem("subscribedEmail");

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function showMessage(text, color = "green") {
    message.textContent = text;
    message.style.color = color;
  }

  function updateUIForSubscribed(email) {
    emailInput.value = email;
    emailInput.disabled = true;
    subscribeBtn.textContent = "Unsubscribe";
    showMessage("You are already subscribed.", "green");
  }

  function updateUIForUnsubscribed() {
    emailInput.value = "";
    emailInput.disabled = false;
    subscribeBtn.textContent = "Subscribe";
    showMessage("You have unsubscribed.", "orange");
  }

  // Inicialização: verificar se já tem e-mail no localStorage
  if (savedEmail && isValidEmail(savedEmail)) {
    updateUIForSubscribed(savedEmail);
  }

  // Ação do botão
  subscribeBtn.addEventListener("click", () => {
    if (subscribeBtn.textContent === "Unsubscribe") {
      localStorage.removeItem("subscribedEmail");
      updateUIForUnsubscribed();
      return;
    }

    const email = emailInput.value.trim();

    if (!isValidEmail(email)) {
      showMessage("Invalid email. Please enter a valid address.", "red");
      return;
    }

    localStorage.setItem("subscribedEmail", email);
    updateUIForSubscribed(email);
    showMessage("Subscription successful!", "green");
  });
});
