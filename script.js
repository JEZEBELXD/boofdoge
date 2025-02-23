// Homepage Logo Interaction
const logo = document.getElementById('logo');
const navButtons = document.getElementById('nav-buttons');

logo.addEventListener('click', () => {
  navButtons.classList.toggle('active');
});

/* About Section */
document.addEventListener("DOMContentLoaded", function() {
  const textboxes = document.querySelectorAll(".textbox");

  textboxes.forEach(box => {
      box.addEventListener("mouseover", () => {
          box.style.transform = "scale(1.05)";
      });

      box.addEventListener("mouseleave", () => {
          box.style.transform = "scale(1)";
      });
  });

  const flickerText = document.querySelector('.flicker-text');
  flickerText.addEventListener("mouseenter", () => {
      flickerText.style.textShadow = "0 0 25px #ff00ff, 0 0 45px #ff00ff";
  });

  flickerText.addEventListener("mouseleave", () => {
      flickerText.style.textShadow = "0 0 15px #00f2ff, 0 0 30px #00f2ff";
  });
});
/* Tokenomics */
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("tokenomicsChart").getContext("2d");

  // Initialize Chart.js
  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Liquidity (30%)", "Community (20%)", "Marketing (15%)", "Reserves (15%)", "Community Projects (20%)"],
      datasets: [{
        data: [30, 20, 15, 15, 20],
        backgroundColor: ["#00f2ff", "#6565ff", "#9f93ff", "#c7c7ff", "#f09eff"],
        borderColor: "#12123a",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: { color: "#e3e3ff" }
        }
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  for (let i = 0; i < 30; i++) {
      let particle = document.createElement("div");
      particle.classList.add("particle");
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      body.appendChild(particle);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  if (window.twttr) {
    window.twttr.widgets.load(); // Reloads Twitter feed
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const toggle = item.querySelector(".faq-toggle");

      question.addEventListener("click", function () {
          // Toggle active class
          item.classList.toggle("active");

          // Expand or Collapse Answer
          if (item.classList.contains("active")) {
              answer.style.maxHeight = answer.scrollHeight + "px";
              toggle.textContent = "−"; // Change to minus when expanded
          } else {
              answer.style.maxHeight = "0px";
              toggle.textContent = "+"; // Change back to plus when collapsed
          }

          // Collapse other open FAQs when clicking a new one
          faqItems.forEach((otherItem) => {
              if (otherItem !== item) {
                  otherItem.classList.remove("active");
                  otherItem.querySelector(".faq-answer").style.maxHeight = "0px";
                  otherItem.querySelector(".faq-toggle").textContent = "+";
              }
          });
      });
  });
});
