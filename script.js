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

if (backToTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      backToTop.classList.remove(
        "opacity-0",
        "invisible",
        "translate-y-4"
      );

      backToTop.classList.add(
        "opacity-100",
        "visible",
        "translate-y-0"
      );

    } else {

      backToTop.classList.add(
        "opacity-0",
        "invisible",
        "translate-y-4"
      );

      backToTop.classList.remove(
        "opacity-100",
        "visible",
        "translate-y-0"
      );
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const email = document.getElementById("email").value.trim();
        
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value.trim();


        
        if (!name || !phone || !department || !date || !time) {
            alert("Please fill all required fields.");
            return;
        }

        try {

            const { error } = await supabaseClient
            .from("appointments")
            .insert([
                {
                    full_name: name,
                    phone: phone,
                    email: email || null,
                    department: department,
                    appointment_date: date,
                    appointment_time: time,
                    message: message || null
                }
            ]);
            if (error) {

                console.error("Supabase Error:", error);

                alert("Appointment submit nahi hua. Console check karo.");

                return;
            }

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
}

    /* =========================================
       ELEMENTS
    ========================================= */

    const tableBody =
        document.getElementById("appointmentTableBody");

    const totalAppointments =
        document.getElementById("totalAppointments");

    const todayAppointments =
        document.getElementById("todayAppointments");


    const latestRequest =
        document.getElementById("latestRequest");

    const refreshBtn =
        document.getElementById("refreshBtn");


    /* =========================================
   LOAD APPOINTMENTS
========================================= */

async function loadAppointments() {

    tableBody.innerHTML = `
        <tr>
            <td colspan="8" class="loading">
                Loading appointments...
            </td>
        </tr>
    `;

    const { data, error } = await supabaseClient
        .from("appointments")
        .select("*")
        .order("created_at", {
            ascending: false
        });

    /* =====================================
       ERROR
    ===================================== */

    if (error) {

        console.error(
            "Supabase Error:",
            error
        );

        tableBody.innerHTML = `
            <tr>
                <td colspan="8" class="error">
                    Failed to load appointments.
                    Please check the browser console.
                </td>
            </tr>
        `;

        return;
    }

        /* =====================================
           BASIC STATISTICS
        ===================================== */

        totalAppointments.textContent =
            data.length;


        /* TODAY'S REQUESTS */

        const today =
            new Date().toISOString().split("T")[0];


        const todayCount =
            data.filter(item => {

                if (!item.created_at) {
                    return false;
                }

                return item.created_at.startsWith(today);

            }).length;


        todayAppointments.textContent =
            todayCount;


        /* LATEST REQUEST */

        if (data.length > 0 && data[0].created_at) {

            latestRequest.textContent =
                new Date(
                    data[0].created_at
                ).toLocaleDateString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short"
                    }
                );

        } else {

            latestRequest.textContent =
                "—";

        }


        /* =====================================
           NO DATA
        ===================================== */

        if (data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty">
                        No appointment requests yet.
                    </td>
                </tr>
            `;

            return;
        }


        /* =====================================
           DISPLAY DATA
        ===================================== */

        tableBody.innerHTML = "";


        data.forEach(appointment => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${appointment.id || "-"}
                </td>


                <td>

                  <span class="patient-name">
                      ${appointment.full_name || appointment.name || "-"}
                  </span>

                  <span class="patient-email">
                      ${appointment.email || "-"}
                  </span>

              </td>


                <td>
                    ${appointment.phone || "-"}
                </td>


                <td>
                    ${appointment.department || "-"}
                </td>


                <td>
                    ${appointment.appointment_date || "-"}
                </td>


                <td>
                    ${appointment.appointment_time || "-"}
                </td>


                <td class="message-cell">
                    ${appointment.message || "-"}
                </td>


                <td>
                    ${
                        appointment.created_at
                        ? new Date(
                            appointment.created_at
                          ).toLocaleString(
                            "en-IN",
                            {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            }
                          )
                        : "-"
                    }
                </td>
                  
                <td>
    <span class="status-badge ${
        appointment.status === "completed"
            ? "status-completed"
            : "status-pending"
    }">
        ${
            appointment.status === "completed"
                ? "Completed"
                : "Pending"
        }
    </span>
</td>

<td class="action-cell">

    <button
        type="button"
        class="action-btn view-btn"
        data-id="${appointment.id}"
    >
        View
    </button>

    ${
        appointment.status === "completed"
        ? `
            <span class="completed-label">
                ✓ Completed
            </span>
          `
        : `
            <button
                type="button"
                class="action-btn complete-btn"
                data-id="${appointment.id}"
            >
                ✓ Complete
            </button>
          `
    }

</td>
            `;


            // Patient name click → open details
const patientNameElement =
    row.querySelector(".patient-name");

if (patientNameElement) {

    patientNameElement.addEventListener(
        "click",
        function () {

            openAppointmentDetails(appointment);

        }
    );

}

// =========================================
// VIEW APPOINTMENT
// =========================================

const viewButton = row.querySelector(".view-btn");

if (viewButton) {

    viewButton.addEventListener("click", function () {

        openAppointmentDetails(appointment);

    });

}

tableBody.appendChild(row);

        });

    }

/* =========================================
   OPEN APPOINTMENT DETAILS
========================================= */

function openAppointmentDetails(appointment) {

    const modal =
        document.getElementById(
            "appointmentDetailsModal"
        );

    if (!modal) {
        console.error(
            "Appointment details modal not found."
        );
        return;
    }


    document.getElementById(
        "detailPatientName"
    ).textContent =
        appointment.full_name ||
        appointment.name ||
        "Unknown Patient";


    document.getElementById(
        "detailPhone"
    ).textContent =
        appointment.phone ||
        "—";


    document.getElementById(
        "detailEmail"
    ).textContent =
        appointment.email ||
        "—";


    document.getElementById(
        "detailDepartment"
    ).textContent =
        appointment.department ||
        "—";


    document.getElementById(
        "detailDate"
    ).textContent =
        appointment.appointment_date ||
        "—";


    document.getElementById(
        "detailTime"
    ).textContent =
        appointment.appointment_time ||
        "—";


    document.getElementById(
        "detailStatus"
    ).textContent =
        appointment.status ||
        "Pending";


    document.getElementById(
        "detailMessage"
    ).textContent =
        appointment.message ||
        "No message provided.";


    document.getElementById(
        "detailSubmitted"
    ).textContent =
        appointment.created_at
            ? new Date(
                appointment.created_at
              ).toLocaleString(
                "en-IN",
                {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit"
                }
              )
            : "—";


    modal.classList.add("show");

}
/* =========================================
   CLOSE APPOINTMENT DETAILS
========================================= */

const appointmentDetailsModal =
    document.getElementById(
        "appointmentDetailsModal"
    );

const closeAppointmentModal =
    document.getElementById(
        "closeAppointmentModal"
    );


if (closeAppointmentModal) {

    closeAppointmentModal.addEventListener(
        "click",
        function () {

            appointmentDetailsModal.classList.remove(
                "show"
            );

        }
    );

}


/* Close when clicking outside */

if (appointmentDetailsModal) {

    appointmentDetailsModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                appointmentDetailsModal
            ) {

                appointmentDetailsModal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* Close with ESC */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            appointmentDetailsModal
        ) {

            appointmentDetailsModal.classList.remove(
                "show"
            );

        }

    }
);
    /* =========================================
       REFRESH
    ========================================= */

    if (refreshBtn) {
    refreshBtn.addEventListener(
        "click",
        loadAppointments
    );
}


    // =========================================
// ADMIN LOGOUT
// =========================================

const logoutBtn =
    document.getElementById("logoutBtn");

const settingsLogoutBtn =
    document.getElementById("settingsLogoutBtn");


async function logoutAdmin() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );

    if (!confirmLogout) {
        return;
    }


    try {

        const {
            error
        } = await supabaseClient.auth.signOut();


        if (error) {

            console.error(
                "Logout Error:",
                error
            );

            alert(
                "Logout failed. Please try again."
            );

            return;
        }


        console.log(
            "Admin logged out successfully."
        );


        // Redirect to admin login
        window.location.href =
            "/admin";


    } catch (error) {

        console.error(
            "Unexpected logout error:",
            error
        );

        alert(
            "Something went wrong while logging out."
        );

    }

}


// Sidebar Logout
if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        logoutAdmin
    );

}


// Settings Logout
if (settingsLogoutBtn) {

    settingsLogoutBtn.addEventListener(
        "click",
        logoutAdmin
    );

}


    /* =========================================
       INITIAL LOAD
    ========================================= */

    if (tableBody) {
    loadAppointments();
}

// =========================================
// ADMIN NAVIGATION
// =========================================

const dashboardNavBtn = document.querySelector(".nav-item:nth-of-type(1)");
const appointmentsNavBtn = document.querySelector(".nav-item:nth-of-type(2)");
const patientsNavBtn = document.getElementById("patientsNavBtn");
const totalAppointmentsCard = document.getElementById("totalAppointmentsCard");
const todayRequestsCard = document.getElementById("todayRequestsCard");
const appointmentPanel = document.querySelector(".main .panel:not(#patientsPanel)");
const patientsPanel = document.getElementById("patientsPanel");


// -----------------------------------------
// DASHBOARD
// -----------------------------------------

if (dashboardNavBtn) {

    dashboardNavBtn.addEventListener("click", () => {

        // Dashboard currently uses the appointment panel
        if (appointmentPanel) {
            appointmentPanel.style.display = "block";
        }

        if (patientsPanel) {
            patientsPanel.style.display = "none";
        }

        document.querySelectorAll(".nav-item").forEach(btn => {
            btn.classList.remove("active");
        });

        dashboardNavBtn.classList.add("active");

    });

}

// -----------------------------------------
// APPOINTMENTS
// -----------------------------------------

if (appointmentsNavBtn) {

    appointmentsNavBtn.addEventListener("click", () => {

        if (appointmentPanel) {
            appointmentPanel.style.display = "block";
        }

        if (patientsPanel) {
            patientsPanel.style.display = "none";
        }

        document.querySelectorAll(".nav-item").forEach(btn => {
            btn.classList.remove("active");
        });

        appointmentsNavBtn.classList.add("active");

        loadAppointments();

    });

}

// -----------------------------------------
// TOTAL APPOINTMENTS CARD
// -----------------------------------------

if (totalAppointmentsCard) {

    totalAppointmentsCard.addEventListener("click", () => {

        // Hide dashboard statistics
        if (dashboardStats) {
            dashboardStats.style.display = "none";
        }

        // Hide patients
        if (patientsPanel) {
            patientsPanel.style.display = "none";
        }

        // Show appointments
        if (appointmentPanel) {
            appointmentPanel.style.display = "block";
        }

        // Remove active from all navigation buttons
        document.querySelectorAll(".nav-item").forEach(btn => {
            btn.classList.remove("active");
        });

        // Activate Appointments navigation
        if (appointmentsNavBtn) {
            appointmentsNavBtn.classList.add("active");
        }

        // Load latest appointments
        loadAppointments();

        // Smooth scroll to appointment section
        if (appointmentPanel) {
            appointmentPanel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}
// -----------------------------------------
// TODAY'S REQUESTS CARD
// -----------------------------------------

if (todayRequestsCard) {

    todayRequestsCard.addEventListener("click", async () => {

        // Hide dashboard statistics
        if (dashboardStats) {
            dashboardStats.style.display = "none";
        }

        // Hide patients panel
        if (patientsPanel) {
            patientsPanel.style.display = "none";
        }

        // Show appointments panel
        if (appointmentPanel) {
            appointmentPanel.style.display = "block";
        }

        // Update active navigation
        document.querySelectorAll(".nav-item").forEach(btn => {
            btn.classList.remove("active");
        });

        if (appointmentsNavBtn) {
            appointmentsNavBtn.classList.add("active");
        }

        // Show loading state
        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="loading">
                        Loading today's appointments...
                    </td>
                </tr>
            `;
        }

        // Get today's date
        const today =
            new Date().toISOString().split("T")[0];

        // Fetch today's appointments
        const { data, error } = await supabaseClient
            .from("appointments")
            .select("*")
            .eq("appointment_date", today)
            .order("created_at", {
                ascending: false
            });

        if (error) {

            console.error(
                "Today's Appointments Error:",
                error
            );

            if (tableBody) {
                tableBody.innerHTML = `
                    <tr>
                        <td colspan="8" class="error">
                            Failed to load today's appointments.
                        </td>
                    </tr>
                `;
            }

            return;
        }

        // No appointments today
        if (!data || data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="empty">
                        No appointments for today.
                    </td>
                </tr>
            `;

            return;
        }

        // =========================================
// LATEST REQUEST CARD
// =========================================

const latestRequestCard =
    document.getElementById("latestRequestCard");

if (latestRequestCard) {

    latestRequestCard.addEventListener("click", async function () {

        // Hide other views
        if (dashboardStats) {
            dashboardStats.style.display = "none";
        }

        if (patientsPanel) {
            patientsPanel.style.display = "none";
        }

        // Show appointment panel
        if (appointmentPanel) {
            appointmentPanel.style.display = "block";
        }

        // Active navigation
        document.querySelectorAll(".nav-item").forEach(btn => {
            btn.classList.remove("active");
        });

        if (appointmentsNavBtn) {
            appointmentsNavBtn.classList.add("active");
        }

        // Loading
        if (tableBody) {
            tableBody.innerHTML = `
                <tr>
                    <td colspan="10" class="loading">
                        Loading latest appointment...
                    </td>
                </tr>
            `;
        }

        // Get latest appointment
        const { data, error } = await supabaseClient
            .from("appointments")
            .select("*")
            .order("created_at", {
                ascending: false
            })
            .limit(1);

        if (error) {

            console.error(
                "Latest Appointment Error:",
                error
            );

            tableBody.innerHTML = `
                <tr>
                    <td colspan="10" class="error">
                        Failed to load latest appointment.
                    </td>
                </tr>
            `;

            return;
        }

        // No appointment
        if (!data || data.length === 0) {

            tableBody.innerHTML = `
                <tr>
                    <td colspan="10" class="empty">
                        No appointment requests yet.
                    </td>
                </tr>
            `;

            return;
        }

        // Show latest appointment
        const appointment = data[0];

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                ${appointment.id || "-"}
            </td>

            <td>
                <span class="patient-name">
                    ${appointment.full_name || appointment.name || "-"}
                </span>

                <span class="patient-email">
                    ${appointment.email || "-"}
                </span>
            </td>

            <td>
                ${appointment.phone || "-"}
            </td>

            <td>
                ${appointment.department || "-"}
            </td>

            <td>
                ${appointment.appointment_date || "-"}
            </td>

            <td>
                ${appointment.appointment_time || "-"}
            </td>

            <td class="message-cell">
                ${appointment.message || "-"}
            </td>

            <td>
                ${
                    appointment.created_at
                    ? new Date(
                        appointment.created_at
                    ).toLocaleString(
                        "en-IN",
                        {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        }
                    )
                    : "-"
                }
            </td>

            <td>
                <span class="status-badge ${
                    appointment.status === "completed"
                    ? "status-completed"
                    : "status-pending"
                }">
                    ${
                        appointment.status === "completed"
                        ? "Completed"
                        : "Pending"
                    }
                </span>
            </td>

            <td>
                <button
                    class="action-btn view-btn latest-view-btn"
                    type="button"
                >
                    View
                </button>
            </td>
        `;

        tableBody.innerHTML = "";

        tableBody.appendChild(row);

        // Smooth scroll
        if (appointmentPanel) {
            appointmentPanel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}
async function openAppointmentDetailsFromLatest(id) {

    const { data, error } = await supabaseClient
        .from("appointments")
        .select("*")
        .eq("id", id)
        .single();

    if (error) {
        console.error("Appointment Details Error:", error);
        return;
    }

    openAppointmentDetails(data);
}
        // =========================================
// DISPLAY TODAY'S APPOINTMENTS
// =========================================

tableBody.innerHTML = "";

data.forEach(appointment => {

    const row = document.createElement("tr");

    row.innerHTML = `

        <td>
            ${appointment.id || "-"}
        </td>

        <td>

            <span class="patient-name">
                ${appointment.full_name || appointment.name || "-"}
            </span>

            <span class="patient-email">
                ${appointment.email || "-"}
            </span>

        </td>

        <td>
            ${appointment.phone || "-"}
        </td>

        <td>
            ${appointment.department || "-"}
        </td>

        <td>
            ${appointment.appointment_date || "-"}
        </td>

        <td>
            ${appointment.appointment_time || "-"}
        </td>

        <td class="message-cell">
            ${appointment.message || "-"}
        </td>

        <td>
            ${
                appointment.created_at
                ? new Date(
                    appointment.created_at
                ).toLocaleString(
                    "en-IN",
                    {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                    }
                )
                : "-"
            }
        </td>

        <td>

            <span class="status-badge ${
                appointment.status === "completed"
                    ? "status-completed"
                    : "status-pending"
            }">

                ${
                    appointment.status === "completed"
                        ? "Completed"
                        : "Pending"
                }

            </span>

        </td>

        <td class="action-cell">

            <button
                type="button"
                class="action-btn view-btn"
                data-id="${appointment.id}"
            >
                View
            </button>

            ${
                appointment.status === "completed"
                ? `
                    <span class="completed-label">
                        ✓ Completed
                    </span>
                  `
                : `
                    <button
                        type="button"
                        class="action-btn complete-btn"
                        onclick="completeAppointment('${appointment.id}')"
                    >
                        ✓ Complete
                    </button>
                  `
            }

        </td>

    `;
    const latestViewBtn =
    row.querySelector(".latest-view-btn");

if (latestViewBtn) {

    latestViewBtn.addEventListener("click", function () {

        openAppointmentDetails(appointment);

    });

}


    // Patient name → Details
    const patientNameElement =
        row.querySelector(".patient-name");

    if (patientNameElement) {

        patientNameElement.addEventListener(
            "click",
            function () {

                openAppointmentDetails(
                    appointment
                );

            }
        );

    }


    // View → Details
    const viewButton =
        row.querySelector(".view-btn");

    if (viewButton) {

        viewButton.addEventListener(
            "click",
            function () {

                openAppointmentDetails(
                    appointment
                );

            }
        );

    }


    tableBody.appendChild(row);

});

        // Smooth scroll
        if (appointmentPanel) {
            appointmentPanel.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

}

// =========================================
// LOAD PATIENTS
// =========================================

async function loadPatients() {

    const pendingBody =
        document.getElementById("pendingPatientsBody");

    const completeBody =
        document.getElementById("completePatientsBody");

    if (!pendingBody || !completeBody) {
        console.error("Patient table bodies not found.");
        return;
    }

    // Loading state
    pendingBody.innerHTML = `
        <tr>
            <td colspan="6" class="loading">
                Loading pending patients...
            </td>
        </tr>
    `;

    completeBody.innerHTML = `
        <tr>
            <td colspan="6" class="loading">
                Loading completed patients...
            </td>
        </tr>
    `;


    // Fetch appointments
    const { data, error } = await supabaseClient
        .from("appointments")
        .select("*")
        .order("created_at", {
            ascending: false
        });


    // Error
    if (error) {

        console.error(
            "Patients Fetch Error:",
            error
        );

        pendingBody.innerHTML = `
            <tr>
                <td colspan="6" class="error">
                    Failed to load patients.
                </td>
            </tr>
        `;

        completeBody.innerHTML = `
            <tr>
                <td colspan="6" class="error">
                    Failed to load patients.
                </td>
            </tr>
        `;

        return;
    }


    // Separate pending and completed
    const pendingPatients = data.filter(
        patient =>
            patient.status !== "completed"
    );

    const completedPatients = data.filter(
        patient =>
            patient.status === "completed"
    );


    // =========================================
    // PENDING
    // =========================================

    if (pendingPatients.length === 0) {

        pendingBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty">
                    No pending patients.
                </td>
            </tr>
        `;

    } else {

        pendingBody.innerHTML = "";

        pendingPatients.forEach(patient => {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>
                    <span class="patient-name">
                        ${patient.full_name || patient.name || "-"}
                    </span>

                    <span class="patient-email">
                        ${patient.email || "-"}
                    </span>
                </td>

                <td>
                    ${patient.phone || "-"}
                </td>

                <td>
                    ${patient.department || "-"}
                </td>

                <td>
                    ${patient.appointment_date || "-"}
                </td>

                <td>
                    ${patient.appointment_time || "-"}
                </td>

                <td>
                    <span class="status-badge status-pending">
                        Pending
                    </span>
                </td>
            `;


            // Patient name → details
            const name =
                row.querySelector(".patient-name");

            if (name) {

                name.addEventListener(
                    "click",
                    () => {

                        openAppointmentDetails(
                            patient
                        );

                    }
                );

            }

            pendingBody.appendChild(row);

        });

    }


    // =========================================
    // COMPLETED
    // =========================================

    if (completedPatients.length === 0) {

        completeBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty">
                    No completed patients.
                </td>
            </tr>
        `;

    } else {

        completeBody.innerHTML = "";

        completedPatients.forEach(patient => {

            const row =
                document.createElement("tr");

            row.innerHTML = `
                <td>
                    <span class="patient-name">
                        ${patient.full_name || patient.name || "-"}
                    </span>

                    <span class="patient-email">
                        ${patient.email || "-"}
                    </span>
                </td>

                <td>
                    ${patient.phone || "-"}
                </td>

                <td>
                    ${patient.department || "-"}
                </td>

                <td>
                    ${patient.appointment_date || "-"}
                </td>

                <td>
                    ${patient.appointment_time || "-"}
                </td>

                <td>
                    <span class="status-badge status-completed">
                        Completed
                    </span>
                </td>
            `;


            // Patient name → details
            const name =
                row.querySelector(".patient-name");

            if (name) {

                name.addEventListener(
                    "click",
                    () => {

                        openAppointmentDetails(
                            patient
                        );

                    }
                );

            }

            completeBody.appendChild(row);

        });

    }

}

// =========================================
// PATIENTS
// =========================================

if (patientsNavBtn) {

    patientsNavBtn.addEventListener("click", () => {

        hideAllViews();

        // Show patients
        if (patientsPanel) {
            patientsPanel.style.display = "block";
        }

        // Active navigation
        navItems.forEach(item => {
            item.classList.remove("active");
        });

        patientsNavBtn.classList.add("active");

        // Load patient data
        loadPatients();

    });

}
// -----------------------------------------
// HIDE ALL MAIN VIEWS
// -----------------------------------------

function hideAllViews() {

    if (dashboardStats) {
        dashboardStats.style.display = "none";
    }

    if (appointmentsPanel) {
        appointmentsPanel.style.display = "none";
    }

    if (patientsPanel) {
        patientsPanel.style.display = "none";
    }

    if (settingsPanel) {
        settingsPanel.style.display = "none";
    }

}

const navItems = document.querySelectorAll(".nav-item");


// -----------------------------------------
// DASHBOARD
// -----------------------------------------

navItems[0]?.addEventListener("click", function () {

    hideAllViews();

    // Show dashboard statistics
    if (dashboardStats) {
        dashboardStats.style.display = "grid";
    }

    // Show appointment table also
    if (appointmentsPanel) {
        appointmentsPanel.style.display = "block";
    }

    // Active menu
    navItems.forEach(item => {
        item.classList.remove("active");
    });

    this.classList.add("active");

    // Load latest appointments
    loadAppointments();

});
// -----------------------------------------
// APPOINTMENTS
// -----------------------------------------

navItems[1]?.addEventListener("click", function () {

    hideAllViews();

    if (appointmentsPanel) {
        appointmentsPanel.style.display = "block";
    }

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    this.classList.add("active");

    loadAppointments();

});
// -----------------------------------------
// PATIENTS
// -----------------------------------------

navItems[2]?.addEventListener("click", function () {

    hideAllViews();

    if (patientsPanel) {
        patientsPanel.style.display = "block";
    }

    navItems.forEach(item => {
        item.classList.remove("active");
    });

    this.classList.add("active");

});
// =========================================
// ADMIN LOGIN
// =========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document
            .getElementById("email")
            .value
            .trim();

        const password = document
            .getElementById("password")
            .value;

        console.log("Login started...");

        const { data, error } =
            await supabaseClient.auth.signInWithPassword({
                email: email,
                password: password
            });

        if (error) {

            console.error("Login failed:", error);

            alert(error.message);

            return;
        }

        console.log("Login successful:", data);

        // Successful login → Admin Dashboard
        window.location.href = "/admin/dashboard";
    });

}
// =========================================
// COMPLETE APPOINTMENT
// =========================================

async function completeAppointment(id) {

    const confirmComplete = confirm(
        "Are you sure you want to mark this appointment as completed?"
    );

    if (!confirmComplete) {
        return;
    }

    try {

        const { error } = await supabaseClient
            .from("appointments")
            .update({
                status: "completed"
            })
            .eq("id", id);

        if (error) {

    console.error("COMPLETE ERROR FULL:", error);

    alert(
        "ERROR: " +
        error.message +
        "\nCode: " +
        error.code +
        "\nDetails: " +
        error.details
    );

    return;
}

        alert(
            "Appointment marked as completed successfully!"
        );

        // Reload appointment list
        loadAppointments();

    } catch (error) {

        console.error(
            "Unexpected Error:",
            error
        );

        alert(
            "Something went wrong. Please try again."
        );

    }
}
// =========================================
// SETTINGS
// =========================================

const settingsNavBtn =
    document.getElementById("settingsNavBtn");

const settingsPanel =
    document.getElementById("settingsPanel");

const currentAdminEmail =
    document.getElementById("currentAdminEmail");


// =========================================
// LOAD CURRENT ADMIN EMAIL
// =========================================

async function loadAdminSettings() {

    if (!currentAdminEmail) {
        console.error(
            "currentAdminEmail element not found."
        );
        return;
    }


    const {
        data: {
            user
        },
        error
    } = await supabaseClient.auth.getUser();


    if (error) {

        console.error(
            "Unable to get admin user:",
            error
        );

        currentAdminEmail.value =
            "Unable to load email";

        return;
    }


    if (user) {

        currentAdminEmail.value =
            user.email || "";

    } else {

        currentAdminEmail.value =
            "No admin logged in";

    }

}


