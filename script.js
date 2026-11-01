const PROMPTS = [{"category": "Education", "title": "Student Registration", "prompt": "Create a student registration form for [Institution Name]. Include full name, email, phone number, date of birth, course, year of study, and address. Require name, email, course, and year. Validate email and phone formats, and restrict age to [Minimum Age]–[Maximum Age]. Show field-level errors and a success message."}, {"category": "Education", "title": "Course Enrollment", "prompt": "Build a course enrollment form for [Institution Name]. Include student name, email, course dropdown, learning mode, preferred start date, and prior experience. Require all fields except prior experience. Validate email, disallow past start dates, and show a confirmation after valid submission."}, {"category": "Education", "title": "Exam Registration", "prompt": "Create an exam registration form for [Exam Name]. Include candidate name, registration ID, email, subject, exam centre, and session. Require every field, validate email, enforce the ID pattern [ID Format], and show clear errors."}, {"category": "Education", "title": "Scholarship Application", "prompt": "Build a scholarship application form for [Scholarship Name]. Include applicant name, email, institution, course, percentage, family income, and statement of purpose. Validate email, restrict percentage to 0–100 and income to non-negative values, and include a required declaration checkbox."}, {"category": "Education", "title": "Course Evaluation", "prompt": "Create a course evaluation form for [Course Name]. Include course content, instructor, difficulty, and pace ratings from 1–5, plus optional suggestions. Require all ratings, limit comments to [Maximum Characters], and show a thank-you message."}, {"category": "Business & HR", "title": "Job Application", "prompt": "Create a job application form for [Company Name] for the [Job Role] position. Include full name, email, phone, location, years of experience, skills, portfolio URL, and availability date. Require name, email, role, and skills. Validate email, phone, and URL; restrict experience to 0–[Maximum Years]."}, {"category": "Business & HR", "title": "Employee Onboarding", "prompt": "Build an employee onboarding form for [Company Name]. Include full name, work email, department, job title, joining date, and optional emergency contact details. Require core work details, validate email and phone formats, and ensure the joining date is valid. Avoid unnecessary sensitive information."}, {"category": "Business & HR", "title": "Leave Request", "prompt": "Create a leave request form for [Company Name]. Include employee name, ID, work email, leave type, start date, end date, and optional reason. Require the main fields, validate email, and ensure end date is not before start date."}, {"category": "Business & HR", "title": "Performance Review", "prompt": "Build a performance review form for [Company Name]. Include employee name, department, review period, goal achievement, communication, and teamwork ratings, plus strengths and improvement areas. Restrict ratings to 1–5 and limit written feedback to [Maximum Characters]."}, {"category": "Business & HR", "title": "Meeting Room Booking", "prompt": "Create an internal meeting room request form for [Company Name]. Include requester name, work email, team, room, date, start time, end time, and equipment needs. Require core fields, validate email, and ensure end time is later than start time."}, {"category": "Events & Bookings", "title": "Event Registration", "prompt": "Create an event registration form for [Event Name]. Include full name, email, phone, ticket type, attendance mode, and attendee count. Require name, email, ticket type, and attendance mode. Validate contact formats and restrict attendees to 1–[Maximum Attendees]."}, {"category": "Events & Bookings", "title": "Workshop Signup", "prompt": "Build a workshop signup form for [Workshop Name]. Include participant name, email, skill level, preferred session, learning goals, and optional accessibility requests. Require name, email, level, and session. Validate email and allow only listed sessions."}, {"category": "Events & Bookings", "title": "Appointment Booking", "prompt": "Create an appointment request form for [Business Name]. Include customer name, email, service type, preferred date, time slot, and optional notes. Require core fields, validate email, disallow past dates, and only allow predefined time slots. State that availability needs confirmation."}, {"category": "Events & Bookings", "title": "Venue Booking", "prompt": "Build a venue booking request form for [Venue Name]. Include organiser name, email, event type, date, start time, end time, guest count, and equipment requirements. Validate email, ensure end time follows start time, and restrict guests to 1–[Venue Capacity]."}, {"category": "Events & Bookings", "title": "Restaurant Reservation", "prompt": "Create a restaurant reservation request for [Restaurant Name]. Include guest name, email or phone, date, time slot, party size, and optional requests. Require contact details, date, time, and party size. Disallow past dates and limit party size to [Maximum Party Size]. Mark requests as pending confirmation."}, {"category": "Feedback & Reviews", "title": "Customer Feedback", "prompt": "Create a customer feedback form for [Business Name]. Include optional name, optional email, service used, overall rating from 1–5, comments, and contact permission. Validate email only if supplied, require rating, and limit comments to [Maximum Characters]."}, {"category": "Feedback & Reviews", "title": "Product Review", "prompt": "Build a product review form for [Product Name]. Include reviewer name, optional email, purchase status, rating, review title, and review text. Require purchase status, rating, and review text. Validate email if supplied, restrict rating to 1–5, and set reasonable review length limits."}, {"category": "Feedback & Reviews", "title": "Event Feedback", "prompt": "Create an event feedback form for [Event Name]. Include optional attendee name, session attended, organisation rating, speaker rating, venue rating, and suggestions. Require session and ratings, restrict ratings to 1–5, and allow anonymous feedback."}, {"category": "E-commerce & Support", "title": "Product Inquiry", "prompt": "Create a product inquiry form for [Store Name]. Include customer name, email, product name or ID, inquiry type, and message. Require name, email, inquiry type, and message. Validate email, use predefined inquiry options, and limit message length to [Maximum Characters]."}, {"category": "E-commerce & Support", "title": "Order Request", "prompt": "Build an order request form for [Business Name]. Include customer name, email, product, quantity, delivery preference, and optional notes. Require name, email, product, and quantity. Validate email, restrict quantity to 1–[Maximum Quantity], and clarify that this is not payment confirmation."}, {"category": "E-commerce & Support", "title": "Return or Refund Request", "prompt": "Create a return request form for [Store Name]. Include order number, customer email, item name, return reason, purchase date, and optional description. Require order number, email, and reason. Validate email and order number format [Order Format]."}, {"category": "E-commerce & Support", "title": "Customer Support", "prompt": "Build a support request form for [Company Name]. Include name, email, issue category, priority, subject, and description. Require core fields, validate email, limit description to [Maximum Characters], and show a reference number only if the backend generates one."}, {"category": "Healthcare & Wellness", "title": "Fitness Assessment", "prompt": "Create a fitness assessment form for [Fitness Centre]. Include participant name, email, fitness goal, activity level, preferred workout, and optional comments. Require name, email, goal, and activity level. Validate email, limit comments, and avoid diagnosis or medical advice."}, {"category": "Healthcare & Wellness", "title": "Wellness Consultation", "prompt": "Build a wellness consultation request for [Wellness Service]. Include name, email, consultation type, preferred date, and optional questions. Require name, email, and consultation type. Validate email, prevent past dates, and state that this is not a confirmed appointment or medical diagnosis."}, {"category": "Healthcare & Wellness", "title": "Dietary Preferences", "prompt": "Create a dietary preference form for [Meal Service or Event]. Include name, email, meal preference, optional allergies or restrictions, and notes. Require name, email, and meal preference. Validate email and explain how dietary information will be handled."}, {"category": "Travel & Hospitality", "title": "Hotel Reservation Request", "prompt": "Create a reservation request for [Hotel Name]. Include guest name, email, check-in, check-out, guest count, room type, and optional requests. Validate email, ensure check-out follows check-in, and restrict guests to 1–[Maximum Guests]. Do not claim a booking is confirmed without a booking system."}, {"category": "Travel & Hospitality", "title": "Travel Inquiry", "prompt": "Build a travel inquiry form for [Travel Agency]. Include traveller name, email, destination, departure date, return date, traveller count, and budget range. Validate email, ensure return follows departure, and restrict travellers to 1–[Maximum Travellers]."}, {"category": "Community & Personal", "title": "Volunteer Registration", "prompt": "Create a volunteer registration form for [Organisation Name]. Include name, email, phone, interests, availability, and relevant experience. Require name, email, interests, and availability. Validate email and phone, allow multiple interest selections, and limit experience text."}, {"category": "Community & Personal", "title": "Membership Application", "prompt": "Build a membership application for [Club or Organisation]. Include applicant name, email, membership type, interests, preferred contact method, and acceptance of membership terms. Require core details and terms acceptance, and validate email."}, {"category": "Community & Personal", "title": "Contact Us", "prompt": "Create a contact form for [Business Name]. Include name, email, subject, inquiry category, and message. Require all fields, validate email, limit the message to [Maximum Characters], display field-level errors, and show confirmation after valid submission."}, {"category": "Personal Productivity", "title": "Personal Budget Entry", "prompt": "Build a personal budget entry form with category, income amount, expense amount, transaction date, and optional notes. Require category, amounts, and date. Ensure monetary amounts are non-negative and the date is valid. Never request bank passwords or account credentials."}];

const $ = (selector) => document.querySelector(selector);
const promptInput = $("#prompt");
const status = $("#status");
const formContainer = $("#formContainer");
const generateBtn = $("#generateBtn");

function setStatus(message, type = "") {
  if (!status) return;
  status.textContent = message;
  status.className = `status-message ${type}`.trim();
}

function loadTemplate(title) {
  const template = PROMPTS.find((item) => item.title === title);
  if (!template || !promptInput) return;
  promptInput.value = template.prompt;
  promptInput.dispatchEvent(new Event("input"));
  promptInput.focus();
  setStatus(`“${template.title}” loaded. Edit the prompt, then generate a preview.`, "success");
}

function updateCharCount() {
  const count = $("#charCount");
  if (count && promptInput) count.textContent = `${promptInput.value.length} characters`;
}

if (promptInput) {
  promptInput.addEventListener("input", updateCharCount);
  updateCharCount();
}
document.querySelectorAll("[data-template]").forEach((button) => {
  button.addEventListener("click", () => loadTemplate(button.dataset.template));
});

function inferFields(prompt) {
  const lower = prompt.toLowerCase();
  const fields = [];
  const add = (name, type = "text", required = true, extra = {}) => {
    if (!fields.some((field) => field.name.toLowerCase() === name.toLowerCase())) {
      fields.push({ name, type, required, ...extra });
    }
  };
  // A conservative local preview helper. This is not an AI model.
  const common = [
    ["email", "Email", "email"], ["phone", "Phone number", "tel"],
    ["full name", "Full name", "text"], ["name", "Name", "text"],
    ["age", "Age", "number"], ["date of birth", "Date of birth", "date"],
    ["start date", "Start date", "date"], ["end date", "End date", "date"],
    ["date", "Date", "date"], ["website", "Website URL", "url"],
    ["portfolio url", "Portfolio URL", "url"], ["quantity", "Quantity", "number"],
    ["rating", "Rating (1–5)", "number"], ["percentage", "Percentage", "number"],
    ["income", "Income", "number"], ["experience", "Years of experience", "number"],
    ["course", "Course", "select"], ["department", "Department", "select"],
    ["subject", "Subject", "text"], ["message", "Message", "textarea"],
    ["comments", "Comments", "textarea"], ["description", "Description", "textarea"],
    ["reason", "Reason", "textarea"], ["skills", "Skills", "textarea"],
    ["address", "Address", "textarea"], ["event name", "Event name", "text"],
    ["attendees", "Number of attendees", "number"], ["party size", "Party size", "number"],
    ["guest count", "Guest count", "number"], ["budget", "Budget", "number"],
    ["subject line", "Subject", "text"], ["job title", "Job title", "text"],
    ["company", "Company", "text"], ["location", "Location", "text"],
    ["ticket type", "Ticket type", "select"], ["leave type", "Leave type", "select"],
    ["rating", "Rating", "number"], ["preferred session", "Preferred session", "select"]
  ];
  const found = [];
  for (const [keyword, label, type] of common) {
    if (lower.includes(keyword)) found.push({ keyword, label, type });
  }
  // Put full name before name to avoid an overly generic label.
  for (const item of found) add(item.label, item.type, !lower.includes(`${item.keyword} (optional)`) && !lower.includes(`optional ${item.keyword}`));
  if (!fields.some(f => f.type === "email") && lower.includes("email")) add("Email", "email", true);
  if (!fields.length) {
    add("Full name");
    add("Email", "email");
    add("Message", "textarea");
  }
  return fields.slice(0, 12);
}


function renderForm(fields, title, isSharedForm = false) {
  if (!formContainer) return;

  formContainer.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = title || "Generated form";

  const intro = document.createElement("p");
  intro.className = "form-intro";
  intro.textContent = isSharedForm
    ? "Please complete the form below."
    : "Preview your fields below. Required fields and common formats are checked locally.";

  const form = document.createElement("form");
  form.noValidate = true;

  fields.forEach((field, index) => {
    const group = document.createElement("div");
    group.className = "field-group";

    const label = document.createElement("label");
    label.htmlFor = `generated-field-${index}`;
    label.textContent = field.name + (field.required ? " *" : "");

    let input;

    if (field.type === "select") {
      input = document.createElement("select");

      ["", "Option 1", "Option 2", "Option 3"].forEach((value, i) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = i === 0 ? "Choose an option" : value;
        input.appendChild(option);
      });
    } else {
      input = document.createElement(
        field.type === "textarea" ? "textarea" : "input"
      );

      if (field.type !== "textarea") {
        input.type = ["email", "url", "tel", "number", "date"].includes(field.type)
          ? field.type
          : "text";
      }

      if (field.type === "number") {
        const n = field.name.toLowerCase();

        if (n.includes("age")) {
          input.min = "18";
          input.max = "100";
        }

        if (n.includes("rating")) {
          input.min = "1";
          input.max = "5";
        }

        if (n.includes("attendee") || n.includes("guest") || n.includes("party size")) {
          input.min = "1";
          input.max = "100";
        }

        if (n.includes("percentage")) {
          input.min = "0";
          input.max = "100";
        }

        if (n.includes("experience")) {
          input.min = "0";
          input.max = "40";
        }

        if (n.includes("quantity")) {
          input.min = "1";
          input.max = "100";
        }
      }

      if (field.type === "textarea") input.rows = 3;

      input.placeholder = `Enter ${field.name.toLowerCase()}`;
    }

    input.id = `generated-field-${index}`;
    input.name = field.name;
    input.required = field.required;
    input.setAttribute("aria-describedby", `field-error-${index}`);

    const error = document.createElement("span");
    error.id = `field-error-${index}`;
    error.className = "field-error";
    error.setAttribute("aria-live", "polite");

    group.append(label, input, error);
    form.appendChild(group);
  });

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "primary-btn";
  submit.textContent = isSharedForm ? "Submit form" : "Validate form";
  form.appendChild(submit);

  const result = document.createElement("p");
  result.className = "status-message";
  result.setAttribute("role", "status");
  form.appendChild(result);

  // Confirmation and action buttons for the form creator
  const actionPanel = document.createElement("div");
  actionPanel.className = "form-action-panel";
  actionPanel.hidden = true;

  const confirmation = document.createElement("h3");
  confirmation.textContent = "Your form is ready!";

  const confirmationText = document.createElement("p");
  confirmationText.textContent =
    "Your form has been successfully validated. Choose what you want to do next.";

  const pdfButton = document.createElement("button");
  pdfButton.type = "button";
  pdfButton.className = "primary-btn";
  pdfButton.textContent = "Download Form as PDF";

  const linkButton = document.createElement("button");
  linkButton.type = "button";
  linkButton.className = "primary-btn";
  linkButton.textContent = "Generate Form Link";
  linkButton.style.marginTop = "10px";

  const actionStatus = document.createElement("p");
  actionStatus.className = "status-message";
  actionStatus.setAttribute("role", "status");

  actionPanel.append(
    confirmation,
    confirmationText,
    pdfButton,
    linkButton,
    actionStatus
  );

  formContainer.append(heading, intro, form);

  if (!isSharedForm) {
    formContainer.appendChild(actionPanel);
  }

  formContainer.hidden = false;

  const empty = $("#emptyState");
  if (empty) empty.hidden = true;

  // Validate the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let valid = true;

    fields.forEach((field, index) => {
      const input = form.querySelector(`#generated-field-${index}`);
      const error = form.querySelector(`#field-error-${index}`);

      let message = "";
      const value = input.value.trim();

      if (field.required && !value) {
        message = `${field.name} is required.`;
      } else if (
        value &&
        input.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        message = "Enter a valid email address.";
      } else if (value && input.type === "url") {
        try {
          new URL(value);
        } catch {
          message = "Enter a valid URL including https://.";
        }
      } else if (value && input.type === "number") {
        if (input.min !== "" && Number(value) < Number(input.min)) {
          message = `Value must be at least ${input.min}.`;
        }

        if (!message && input.max !== "" && Number(value) > Number(input.max)) {
          message = `Value must be no more than ${input.max}.`;
        }
      }

      error.textContent = message;
      input.setAttribute("aria-invalid", message ? "true" : "false");

      if (message) valid = false;
    });

    result.textContent = valid
      ? isSharedForm
        ? "Thank you! Your responses passed validation. This demo does not save or send them."
        : "Your form has been successfully validated!"
      : "Please correct the highlighted fields.";

    result.className = `status-message ${valid ? "success" : "error"}`;

    if (!isSharedForm) {
      actionPanel.hidden = !valid;
      actionStatus.textContent = "";
    }
  });

  // Download the completed form as a printable PDF
  if (!isSharedForm) {
    pdfButton.addEventListener("click", () => {
      const popup = window.open("", "_blank");

      if (!popup) {
        actionStatus.textContent =
          "Please allow pop-ups to download your PDF.";
        actionStatus.className = "status-message error";
        return;
      }

      const answers = fields.map((field, index) => {
        const input = form.querySelector(`#generated-field-${index}`);
        return {
          name: field.name,
          value: input.value.trim() || "Not provided"
        };
      });

      const rows = answers.map(item => `
        <div class="answer">
          <strong>${escapeHTML(item.name)}</strong>
          <p>${escapeHTML(item.value)}</p>
        </div>
      `).join("");

      popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${escapeHTML(title || "Completed Form")}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              color: #172b36;
            }
            h1 {
              color: #078f83;
              border-bottom: 2px solid #078f83;
              padding-bottom: 12px;
            }
            .answer {
              padding: 12px 0;
              border-bottom: 1px solid #ddd;
            }
            .answer p {
              margin-bottom: 0;
            }
            @media print {
              body { padding: 20px; }
            }
          </style>
        </head>
        <body>
          <h1>${escapeHTML(title || "Completed Form")}</h1>
          <p>Completed form details</p>
          ${rows}
        </body>
        </html>
      `);

      popup.document.close();

      popup.onload = () => {
        popup.focus();
        popup.print();
        actionStatus.textContent =
          "Your PDF is ready. Choose Save as PDF in the print window.";
        actionStatus.className = "status-message success";
      };
    });

    // Generate a shareable blank form link
    linkButton.addEventListener("click", async () => {
      const formDefinition = {
        title: title || "Generated Form",
        fields: fields
      };

      const encoded = btoa(
        unescape(encodeURIComponent(JSON.stringify(formDefinition)))
      );

      const shareURL = new URL(window.location.href);
      shareURL.search = "";
      shareURL.searchParams.set("shared", encoded);

      try {
        await navigator.clipboard.writeText(shareURL.href);

        actionStatus.textContent =
          "Form link copied! Share it with your users.";
        actionStatus.className = "status-message success";
      } catch {
        actionStatus.textContent =
          "Copy this link manually: " + shareURL.href;
        actionStatus.className = "status-message success";
      }
    });
  }
}

// Safely display text inside the PDF
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}


if (generateBtn) {
  generateBtn.addEventListener("click", () => {
    const prompt = promptInput.value.trim();
    if (!prompt) {
      setStatus("Please describe the form you want to create.", "error");
      promptInput.focus();
      return;
    }
    const fields = inferFields(prompt);
    const title = prompt.match(/(?:create|build)\s+(?:a|an)?\s*([^.!?]+? form)/i)?.[1];
    renderForm(fields, title ? title.replace(/^form\s*/i, "").replace(/\b\w/g, c => c.toUpperCase()) : "Generated form preview");
    setStatus("Preview generated locally. For genuine AI interpretation of any prompt, connect the Gemini backend.", "success");
  });
}

// Prompt Library page
const searchInput = $("#searchInput");
const promptGrid = $("#promptGrid");
const categoryFilters = $("#categoryFilters");
const resultsCount = $("#resultsCount");
const dialog = $("#promptDialog");
const promptEditor = $("#promptEditor");
let selectedPrompt = null;
let activeCategory = "All";

function renderLibrary() {
  if (!promptGrid) return;
  const query = (searchInput?.value || "").toLowerCase().trim();
  const filtered = PROMPTS.filter(p => (activeCategory === "All" || p.category === activeCategory) &&
    `${p.title} ${p.category} ${p.prompt}`.toLowerCase().includes(query));
  resultsCount.textContent = `${filtered.length} template${filtered.length === 1 ? "" : "s"}`;
  promptGrid.replaceChildren();
  if (!filtered.length) {
    const empty = document.createElement("div");
    empty.className = "no-results";
    empty.textContent = "No templates found. Try another search or category.";
    promptGrid.appendChild(empty);
    return;
  }
  const symbols = {"Education":"🎓","Business & HR":"💼","Events & Bookings":"📅","Feedback & Reviews":"💬","E-commerce & Support":"🛍️","Healthcare & Wellness":"✚","Travel & Hospitality":"✈️","Community & Personal":"🤝","Personal Productivity":"◷"};
  filtered.forEach(p => {
    const card = document.createElement("article");
    card.className = "prompt-card";
    const top = document.createElement("div"); top.className = "card-top";
    const symbol = document.createElement("span"); symbol.className = "card-symbol"; symbol.textContent = symbols[p.category] || "✦";
    const category = document.createElement("span"); category.className = "category-tag"; category.textContent = p.category;
    top.append(symbol, category);
    const title = document.createElement("h3"); title.textContent = p.title;
    const desc = document.createElement("p"); desc.textContent = p.prompt;
    const action = document.createElement("div"); action.className = "card-action";
    const label = document.createElement("span"); label.textContent = "Customise prompt";
    const arrow = document.createElement("span"); arrow.textContent = "→";
    action.append(label, arrow);
    card.append(top, title, desc, action);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Customise ${p.title} prompt`);
    card.addEventListener("click", () => openPrompt(p));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPrompt(p); } });
    promptGrid.appendChild(card);
  });
}
function openPrompt(p) {
  selectedPrompt = p;
  $("#dialogTitle").textContent = p.title;
  $("#dialogCategory").textContent = p.category;
  promptEditor.value = p.prompt;
  $("#dialogStatus").textContent = "";
  if (dialog && typeof dialog.showModal === "function") dialog.showModal();
}
if (categoryFilters) {
  const categories = ["All", ...new Set(PROMPTS.map(p => p.category))];
  categories.forEach(c => {
    const button = document.createElement("button");
    button.type = "button"; button.className = `filter-btn${c === "All" ? " active" : ""}`;
    button.textContent = c;
    button.addEventListener("click", () => {
      activeCategory = c;
      categoryFilters.querySelectorAll("button").forEach(b => b.classList.toggle("active", b.textContent === c));
      renderLibrary();
    });
    categoryFilters.appendChild(button);
  });
}
if (searchInput) searchInput.addEventListener("input", renderLibrary);
if ($("#copyPromptBtn")) $("#copyPromptBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(promptEditor.value);
    $("#dialogStatus").textContent = "Prompt copied to clipboard.";
    $("#dialogStatus").className = "status-message success";
  } catch {
    promptEditor.select();
    document.execCommand("copy");
    $("#dialogStatus").textContent = "Prompt selected/copied where supported.";
    $("#dialogStatus").className = "status-message success";
  }
});
if ($("#usePromptBtn")) $("#usePromptBtn").addEventListener("click", () => {
  try { sessionStorage.setItem("formflowPrompt", promptEditor.value); } catch {}
  window.location.href = "index.html?usePrompt=1";
});

// Open a shared form when a recipient visits its link
const sharedFormData = new URLSearchParams(
  window.location.search
).get("shared");

if (sharedFormData) {
  try {
    const decodedForm = JSON.parse(
      decodeURIComponent(escape(atob(sharedFormData)))
    );

    if (
      decodedForm.title &&
      Array.isArray(decodedForm.fields) &&
      decodedForm.fields.length > 0
    ) {
      // Hide the form builder and show only the shared form
      document.querySelector(".prompt-panel").hidden = true;

      const hero = document.querySelector(".hero");
      if (hero) hero.hidden = true;

      const featureStrip = document.querySelector(".feature-strip");
      if (featureStrip) featureStrip.hidden = true;

      const footnote = document.querySelector(".footnote");
      if (footnote) footnote.hidden = true;

      const previewHeading = document.querySelector(
        ".preview-panel > .panel-heading"
      );

      if (previewHeading) previewHeading.hidden = true;

      // Show the blank form for the recipient
      renderForm(decodedForm.fields, decodedForm.title, true);

    } else {
      throw new Error("Invalid shared form");
    }
  } catch (error) {
    console.error("Shared form could not be opened:", error);
    setStatus("This form link is invalid or incomplete.", "error");
  }
}

if (promptGrid) renderLibrary();
if (promptInput && new URLSearchParams(location.search).get("usePrompt") === "1") {
  try {
    const saved = sessionStorage.getItem("formflowPrompt");
    if (saved) {
      promptInput.value = saved;
      updateCharCount();
      setStatus("Template loaded from the Prompt Library. Edit it or generate a preview.", "success");
      sessionStorage.removeItem("formflowPrompt");
    }
  } catch {}
}
