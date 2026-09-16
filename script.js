const navigation = document.querySelector(".navigation");
const menuButton = document.querySelector(".navigation__toggle");
const menuIcon = menuButton?.querySelector("img");

function translate(key) {
    return window.portfolioI18n.getTranslation(document.documentElement.lang, key);
}

menuButton?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("navigation--open");

    menuIcon.src = isOpen
        ? "assets/images/close-icon.svg"
        : "assets/images/menu-icon.svg";

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        translate(isOpen ? "common.navigation.close" : "common.navigation.open")
    );
});

const technologySlider = document.querySelector(".technology-slider");
const technologySliderViewport = document.querySelector(
    ".technology-slider__viewport"
);

if (technologySlider && technologySliderViewport) {
    technologySliderViewport.addEventListener("click", () => {
        const isMobile = window.matchMedia("(max-width: 900px)").matches;

        if (isMobile) {
            technologySlider.classList.toggle("technology-slider--paused");
        }
    });
}

const skillsLogosTrack = document.querySelector(
    ".skills__logos-track"
);

const skillsLogosGroup = document.querySelector(
    ".skills__logos-group"
);

if (skillsLogosTrack && skillsLogosGroup) {
    const clonedSkillsLogosGroup = skillsLogosGroup.cloneNode(true);

    clonedSkillsLogosGroup.setAttribute("aria-hidden", "true");

    skillsLogosTrack.appendChild(clonedSkillsLogosGroup);
}

const skillsLogos = document.querySelector(".skills__logos");

if (skillsLogos) {
    skillsLogos.addEventListener("click", () => {
        const isMobile = window.matchMedia(
            "(max-width: 900px)"
        ).matches;

        if (isMobile) {
            skillsLogos.classList.toggle(
                "skills__logos--paused"
            );
        }
    });
}

const aboutPhoto = document.querySelector(".about__photo-wrapper");
const aboutSocials = document.querySelector(".about__socials");

if (aboutPhoto && aboutSocials) {
    const aboutSocialsObserver = new IntersectionObserver(
        ([entry], observer) => {
            if (entry.isIntersecting) {
                aboutSocials.classList.add(
                    "about__socials--visible"
                );

                observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0.35
        }
    );

    aboutSocialsObserver.observe(aboutPhoto);
}

const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
    const questionButton = item.querySelector(".faq__question");
    const questionIcon = questionButton.querySelector("img");

    questionButton.addEventListener("click", () => {
        const wasOpen = item.classList.contains("faq__item--open");

        faqItems.forEach((currentItem) => {
            const currentButton =
                currentItem.querySelector(".faq__question");

            const currentIcon =
                currentButton.querySelector("img");

            currentItem.classList.remove("faq__item--open");
            currentButton.setAttribute("aria-expanded", "false");

            currentIcon.src =
                "assets/images/faq-expand-icon.svg";
        });

        if (!wasOpen) {
            item.classList.add("faq__item--open");
            questionButton.setAttribute("aria-expanded", "true");

            questionIcon.src =
                "assets/images/faq-collapse-icon.svg";
        }
    });
});

const contactModal = document.querySelector("#contact-modal");
const contactOpenButton = document.querySelector("[data-contact-open]");
const contactCloseButton = contactModal?.querySelector(".contact-page__close");
const contactBackdrop = contactModal?.querySelector(".contact-modal__backdrop");

function openContactModal() {
    if (!contactModal || !contactOpenButton) return;

    contactModal.classList.add("is-open");
    contactModal.setAttribute("aria-hidden", "false");
    contactOpenButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("contact-modal-open");
}

function closeContactModal() {
    if (!contactModal || !contactOpenButton) return;

    contactModal.classList.remove("is-open");
    contactModal.setAttribute("aria-hidden", "true");
    contactOpenButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("contact-modal-open");
    contactOpenButton.focus();
}

contactOpenButton?.addEventListener("click", openContactModal);
contactCloseButton?.addEventListener("click", closeContactModal);
contactBackdrop?.addEventListener("click", closeContactModal);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && contactModal?.classList.contains("is-open")) {
        closeContactModal();
    }
});

const portfolioContactForm = document.querySelector("#contact-form");

portfolioContactForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!portfolioContactForm.reportValidity()) {
        return;
    }

    const formData = new FormData(portfolioContactForm);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const helpSelect = portfolioContactForm.elements.helpType;
    const helpType =
        helpSelect.options[helpSelect.selectedIndex]?.text || translate("contact.emailEnquiry");

    const subject = `${translate("contact.emailSubject")} — ${helpType}`;

    const emailBody = [
        `${translate("contact.name")}: ${name}`,
        `${translate("footer.email")}: ${email}`,
        `${translate("contact.help")} ${helpType}`,
        "",
        `${translate("contact.emailMessage")}:`,
        message
    ].join("\n");

    const emailLink =
        `mailto:felipesbelphman@gmail.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = emailLink;
});

const projectsTitle = document.querySelector(".projects__title");

if (projectsTitle) {
    const projectsTitleObserver = new IntersectionObserver(
        (entries, observer) => {
            const [entry] = entries;

            if (!entry.isIntersecting) {
                return;
            }

            projectsTitle.classList.add("is-visible");
            observer.unobserve(projectsTitle);
        },
        {
            threshold: 0.35
        }
    );

    projectsTitleObserver.observe(projectsTitle);
}
