
  document.addEventListener('DOMContentLoaded', () => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal-el, .reveal-img-wrap');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  });


document.addEventListener("DOMContentLoaded", function () {

  const gallery = document.getElementById("facilities-gallery");
  const trigger = document.getElementById("facilities-gallery-trigger");
  const closeBtn = document.getElementById("facilities-gallery-close");
  const backdrop = document.getElementById("facilities-gallery-backdrop");


  /* ================= OPEN GALLERY ================= */

  function openGallery() {

    gallery.classList.remove("hidden");

    // Browser ko render hone ka time
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gallery.classList.add("gallery-open");
      });
    });

    document.body.style.overflow = "hidden";
  }


  /* ================= CLOSE GALLERY ================= */

  function closeGallery() {

    gallery.classList.remove("gallery-open");

    document.body.style.overflow = "";

    // Animation complete hone ke baad hide
    setTimeout(() => {
      gallery.classList.add("hidden");
    }, 700);
  }


  /* ================= EVENTS ================= */

  if (trigger) {
    trigger.addEventListener("click", openGallery);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeGallery);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeGallery);
  }


  /* ================= ESC KEY ================= */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      !gallery.classList.contains("hidden")
    ) {
      closeGallery();
    }

  });

});

document.addEventListener("DOMContentLoaded", () => {

  const qualityBoxes = document.querySelectorAll(".quality-box");

  const qualityObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 300);

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.25
    }
  );

  qualityBoxes.forEach(box => {
    qualityObserver.observe(box);
  });

});


document.addEventListener("DOMContentLoaded", function () {

  const gallery = document.getElementById("facilities-gallery");
  const trigger = document.getElementById("facilities-gallery-trigger");
  const closeBtn = document.getElementById("facilities-gallery-close");
  const backdrop = document.getElementById("facilities-gallery-backdrop");


  /* ================= OPEN GALLERY ================= */

  function openGallery() {

    gallery.classList.remove("hidden");

    // Browser ko render hone ka time
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gallery.classList.add("gallery-open");
      });
    });

    document.body.style.overflow = "hidden";
  }


  /* ================= CLOSE GALLERY ================= */

  function closeGallery() {

    gallery.classList.remove("gallery-open");

    document.body.style.overflow = "";

    // Animation complete hone ke baad hide
    setTimeout(() => {
      gallery.classList.add("hidden");
    }, 700);
  }


  /* ================= EVENTS ================= */

  if (trigger) {
    trigger.addEventListener("click", openGallery);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeGallery);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeGallery);
  }


  /* ================= ESC KEY ================= */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      !gallery.classList.contains("hidden")
    ) {
      closeGallery();
    }

  });

});
// ================= BACK TO TOP BUTTON =================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.remove("opacity-0", "invisible", "translate-y-4");
    backToTop.classList.add("opacity-100", "visible", "translate-y-0");
  } else {
    backToTop.classList.add("opacity-0", "invisible", "translate-y-4");
    backToTop.classList.remove("opacity-100", "visible", "translate-y-0");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// Open home page at the top when returning from appointment page
if (window.location.search.includes("top=1")) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant"
  });
}

  const appointmentForm = document.getElementById("appointmentForm");

  appointmentForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !phone || !department || !date) {
      alert("Please fill all required fields.");
      return;
    }

    try {

      const { data, error } = await supabase
        .from("appointments")
        .insert([
          {
            name: name,
            phone: phone,
            email: email || null,
            department: department,
            appointment_date: date,
            appointment_time: time || null,
            message: message || null
          }
        ])
        .select();

      if (error) {
        console.error("Supabase Error:", error);
        alert("Appointment submit nahi hua. Console check karo.");
        return;
      }

      console.log("Appointment Saved:", data);

      alert(
        "Thank you, " +
        name +
        ". Your appointment request has been submitted successfully."
      );

      appointmentForm.reset();

    } catch (error) {

      console.error("Unexpected Error:", error);

      alert("Something went wrong. Please try again.");

    }
  });

