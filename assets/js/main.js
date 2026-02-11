// Basic UX interactions for Xiao Li Yorozuya site

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking a nav link
    const navLinks = nav.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      }
    });
  }

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Simple form validation for contact page
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    const statusEl = document.querySelector(".form-status");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = (formData.get("name") || "").toString().trim();
      const way = (formData.get("contact") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();

      if (!name || !way || !message) {
        if (statusEl) {
          statusEl.textContent = "请填写姓名、联系方式和大致需求内容。";
          statusEl.classList.remove("ok");
          statusEl.classList.add("error");
        }
        return;
      }

      if (statusEl) {
        statusEl.textContent =
          "信息已在本地校验通过。由于本站为静态展示，请通过页面下方提供的方式手动发送预约信息。";
        statusEl.classList.remove("error");
        statusEl.classList.add("ok");
      }

      contactForm.reset();
    });
  }
});

