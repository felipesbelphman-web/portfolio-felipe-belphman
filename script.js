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

    const subject = `${translate("contact.emailSubject")} â€” ${helpType}`;

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

const frontendMentorProjects = [
    {
        slug: "tip-calculator-app",
        key: "tipCalculator",
        name: "Tip Calculator",
        image: "tip-calculator-app.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: true
    },
    {
        slug: "time-tracking-dashboard",
        key: "timeTracking",
        name: "Time Tracking Dashboard",
        image: "time-tracking-dashboard.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: true
    },
    {
        slug: "newsletter-sign-up-with-success-message",
        key: "newsletter",
        name: "Newsletter Sign-up",
        image: "newsletter-sign-up-with-success-message.png",
        technologies: ["HTML", "CSS", "JavaScript"],
        featured: true
    },
    {
        slug: "coding-bootcamp-testimonials-slider",
        key: "codingBootcamp",
        name: "Coding Bootcamp Testimonials Slider",
        image: "coding-bootcamp-testimonials-slider.png",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        slug: "intro-component-with-signup-form",
        key: "introSignup",
        name: "Intro Component with Sign-up Form",
        image: "intro-component-with-signup-form.png",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        slug: "article-preview-component",
        key: "articlePreview",
        name: "Article Preview Component",
        image: "article-preview-component.png",
        technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
        slug: "meet-landing-page",
        key: "meet",
        name: "Meet Landing Page",
        image: "meet-landing-page.png",
        technologies: ["HTML", "CSS"]
    },
    {
        slug: "testimonials-grid-section.",
        key: "testimonialsGrid",
        name: "Testimonials Grid Section",
        image: "testimonials-grid-section.png",
        technologies: ["HTML", "CSS", "CSS Grid"]
    },
    {
        slug: "four-card-feature-section",
        key: "fourCard",
        name: "Four Card Feature Section",
        image: "four-card-feature-section.png",
        technologies: ["HTML", "CSS", "CSS Grid"]
    },
    {
        slug: "recipe-page",
        key: "recipe",
        name: "Recipe Page",
        image: "recipe-page.png",
        technologies: ["HTML", "CSS"]
    },
    {
        slug: "social-links-profile",
        key: "socialLinks",
        name: "Social Links Profile",
        image: "social-links-profile.png",
        technologies: ["HTML", "CSS"]
    },
    {
        slug: "blog-preview-card",
        key: "blogPreview",
        name: "Blog Preview Card",
        image: "blog-preview-card.png",
        technologies: ["HTML", "CSS"]
    },
    {
        slug: "qr-code-component",
        key: "qrCode",
        name: "QR Code Component",
        image: "qr-code-component.png",
        technologies: ["HTML", "CSS"]
    }
];

function makeMentorElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) element.className = className;
    if (text) element.textContent = text;

    return element;
}

function setMentorTranslation(element, key, attribute) {
    const language = document.documentElement.lang || "en";
    const translation = window.portfolioI18n.getTranslation(language, key);

    element.setAttribute(`data-i18n${attribute ? `-${attribute}` : ""}`, key);

    if (translation !== null) {
        if (attribute) {
            element.setAttribute(attribute, translation);
        } else {
            element.textContent = translation;
        }
    }
}

function createFrontendMentorCard(project, index) {
    const card = makeMentorElement("article", "project-card dev-project-card dev-project-card--mentor");
    const meta = makeMentorElement("div", "dev-project-card__meta");
    const number = makeMentorElement("span", "", `${String(index + 1).padStart(2, "0")} / 13`);
    const category = makeMentorElement("span", "", "FRONTEND MENTOR");
    const preview = makeMentorElement("div", "project-card__preview");
    const image = makeMentorElement("img", "");
    const footer = makeMentorElement("div", "project-card__footer");
    const info = makeMentorElement("div", "dev-project-card__info");
    const title = makeMentorElement("h3", "project-card__title", project.name);
    const description = makeMentorElement("p", "dev-project-card__description");
    const stack = makeMentorElement("div", "dev-project-card__stack");
    const actions = makeMentorElement("div", "dev-project-card__actions");
    const languageKey = `frontMentor.projects.${project.key}`;

    setMentorTranslation(image, "frontMentor.previewAlt", "alt");
    image.src = `assets/images/frontend-mentor/${project.image}`;
    image.loading = "lazy";
    image.decoding = "async";
    preview.append(image);

    setMentorTranslation(description, languageKey);
    stack.setAttribute("aria-label", "Technologies used");
    stack.setAttribute("data-i18n-aria-label", "frontMentor.technologies");
    project.technologies.forEach((technology) => {
        stack.append(makeMentorElement("span", "", technology));
    });

    info.append(title, description, stack);

    [
        ["frontMentor.viewProject", `https://felipesbelphman-web.github.io/${project.slug}/`],
        ["frontMentor.viewCode", `https://github.com/felipesbelphman-web/${project.slug}`]
    ].forEach(([translationKey, href]) => {
        const link = makeMentorElement("a", "project-card__link");
        const label = makeMentorElement("span", "");
        const icon = makeMentorElement("img", "");

        link.href = href;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        setMentorTranslation(label, translationKey);
        icon.src = "assets/images/arrow-up-right.svg";
        icon.alt = "";
        icon.setAttribute("aria-hidden", "true");
        link.append(label, icon);
        actions.append(link);
    });

    meta.append(number, category);
    footer.append(info, actions);
    card.append(meta, preview, footer);

    return card;
}

document.querySelectorAll("[data-frontend-mentor-grid]").forEach((grid) => {
    const isFeatured = grid.dataset.frontendMentorGrid === "featured";
    const projects = isFeatured
        ? frontendMentorProjects.filter((project) => project.featured)
        : frontendMentorProjects;

    projects.forEach((project) => {
        grid.append(createFrontendMentorCard(project, frontendMentorProjects.indexOf(project)));
    });
});
// DEV SKILLS — TECHNOLOGY STACK LOOP

const devSkillsStack = document.querySelector(".dev-skills__stack");
const devSkillsStackList = devSkillsStack?.querySelector("ul");

if (devSkillsStack && devSkillsStackList) {
    const originalItems = Array.from(devSkillsStackList.children);

    originalItems.forEach((item) => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        devSkillsStackList.appendChild(clone);
    });

    devSkillsStack.addEventListener("click", () => {
        const isMobile = window.matchMedia("(max-width: 900px)").matches;

        if (isMobile) {
            devSkillsStack.classList.toggle(
                "dev-skills__stack--paused"
            );
        }
    });
}

// DEV SKILLS — MATRIX CODE RAIN
(() => {
    const canvas = document.querySelector(".dev-skills__matrix");

    if (!canvas) return;

    const section = canvas.closest(".dev-skills__capabilities-section");
    const context = canvas.getContext("2d");

    if (!section || !context) return;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const characters =
        "01{}[]<>/\\|=+-*;:()constletvarfunctionreturnreactnextjshtmlcss";

    const fontSize = 13;
    const frameInterval = 48;

    let columns = 0;
    let drops = [];
    let width = 0;
    let height = 0;
    let animationFrame = null;
    let lastFrame = 0;
    let isVisible = true;

    const resizeCanvas = () => {
        const rect = section.getBoundingClientRect();
        const dpr = Math.min(window.devicePixelRatio || 1, 2);

        width = Math.max(1, Math.floor(rect.width));
        height = Math.max(1, Math.floor(rect.height));

        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);

        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        context.setTransform(dpr, 0, 0, dpr, 0, 0);

        columns = Math.ceil(width / fontSize);

        drops = Array.from(
            { length: columns },
            () => Math.random() * -(height / fontSize)
        );
    };

    const draw = () => {
        context.fillStyle = "rgba(10, 10, 12, 0.12)";
        context.fillRect(0, 0, width, height);

        context.font = `${fontSize}px "JetBrains Mono", monospace`;
        context.textAlign = "center";

        for (let i = 0; i < drops.length; i++) {
            const character =
                characters[Math.floor(Math.random() * characters.length)];

            const x = i * fontSize + fontSize / 2;
            const y = drops[i] * fontSize;

            const brightness = Math.random();

            context.fillStyle =
                brightness > 0.92
                    ? "rgba(190, 255, 205, 0.82)"
                    : "rgba(70, 210, 105, 0.48)";

            context.fillText(character, x, y);

            if (
                y > height &&
                Math.random() > 0.975
            ) {
                drops[i] = Math.random() * -18;
            } else {
                drops[i] += 0.42;
            }
        }
    };

    const render = (time) => {
        if (!isVisible || reducedMotion.matches) {
            animationFrame = null;
            return;
        }

        if (time - lastFrame >= frameInterval) {
            draw();
            lastFrame = time;
        }

        animationFrame = requestAnimationFrame(render);
    };

    const start = () => {
        if (
            animationFrame ||
            reducedMotion.matches ||
            !isVisible
        ) {
            return;
        }

        animationFrame = requestAnimationFrame(render);
    };

    const stop = () => {
        if (!animationFrame) return;

        cancelAnimationFrame(animationFrame);
        animationFrame = null;
    };

    const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();

        context.fillStyle = "#0a0a0c";
        context.fillRect(0, 0, width, height);

        if (reducedMotion.matches) {
            draw();
        }
    });

    const visibilityObserver = new IntersectionObserver(
        ([entry]) => {
            isVisible = entry.isIntersecting;

            if (isVisible) {
                start();
            } else {
                stop();
            }
        },
        {
            threshold: 0.05
        }
    );

    reducedMotion.addEventListener("change", () => {
        if (reducedMotion.matches) {
            stop();
            draw();
        } else {
            start();
        }
    });

    resizeCanvas();

    context.fillStyle = "#0a0a0c";
    context.fillRect(0, 0, width, height);

    resizeObserver.observe(section);
    visibilityObserver.observe(section);

    start();
})();

// DEV MATRIX — SIDE RAIL CODE RAIN
(() => {
    const canvases = document.querySelectorAll(".dev-matrix-side");

    if (!canvases.length) return;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    const characters =
        "01{}[]<>/\\|=+-*;:()constletvarfunctionreturnreactnextjshtmlcss";

    const fontSize = 14;
    const frameInterval = 58;

    canvases.forEach((canvas, canvasIndex) => {
        const context = canvas.getContext("2d");

        if (!context) return;

        let width = 0;
        let height = 0;
        let columns = 0;
        let drops = [];
        let animationFrame = null;
        let lastFrame = 0;
        let isVisible = true;

        const resizeCanvas = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            width = Math.max(1, Math.floor(rect.width));

            const capabilitiesSection = document.querySelector(
                ".dev-skills__capabilities-section"
            );

            const targetBottom = capabilitiesSection
                ? capabilitiesSection.getBoundingClientRect().bottom + window.scrollY
                : document.documentElement.scrollHeight;

            const canvasTop = canvas.getBoundingClientRect().top + window.scrollY;

            height = Math.max(
                1,
                Math.floor(targetBottom - canvasTop)
            );

            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);

            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            context.setTransform(dpr, 0, 0, dpr, 0, 0);

            columns = Math.ceil(width / fontSize);

            drops = Array.from(
                { length: columns },
                (_, index) =>
                    Math.random() * -(height / fontSize) -
                    index * 0.75 -
                    canvasIndex * 4
            );
        };

        const draw = () => {
            context.fillStyle = "rgba(10, 10, 12, 0.12)";
            context.fillRect(0, 0, width, height);

            context.font = `${fontSize}px "JetBrains Mono", monospace`;
            context.textAlign = "center";

            for (let i = 0; i < drops.length; i++) {
                const character =
                    characters[Math.floor(Math.random() * characters.length)];

                const x = i * fontSize + fontSize / 2;
                const y = drops[i] * fontSize;

                const brightness = Math.random();

                context.fillStyle =
                    brightness > 0.92
                        ? "rgba(190, 255, 205, 0.82)"
                        : "rgba(70, 210, 105, 0.48)";

                context.fillText(character, x, y);

                if (y > height && Math.random() > 0.975) {
                    drops[i] = Math.random() * -18;
                } else {
                    drops[i] += 0.42;
                }
            }
        };

        const render = (time) => {
            if (!isVisible || reducedMotion.matches) {
                animationFrame = null;
                return;
            }

            if (time - lastFrame >= frameInterval) {
                draw();
                lastFrame = time;
            }

            animationFrame = requestAnimationFrame(render);
        };

        const start = () => {
            if (
                animationFrame ||
                reducedMotion.matches ||
                !isVisible
            ) {
                return;
            }

            animationFrame = requestAnimationFrame(render);
        };

        const stop = () => {
            if (!animationFrame) return;

            cancelAnimationFrame(animationFrame);
            animationFrame = null;
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;

                if (isVisible) {
                    start();
                } else {
                    stop();
                }
            },
            {
                threshold: 0.01
            }
        );

        window.addEventListener("resize", resizeCanvas);

        resizeCanvas();

        context.fillStyle = "#0a0a0c";
        context.fillRect(0, 0, width, height);

        observer.observe(canvas);
        start();
    });
})();






/* =========================================================
   MONEYPILOT — VIDEO AUTOPLAY AND CLICK CONTROL
   ========================================================= */

(() => {
    const initializeMoneyPilotVideos = () => {
        const videos = document.querySelectorAll(".mp-case video");

        videos.forEach((video) => {
            if (video.dataset.clickControlReady === "true") {
                return;
            }

            video.dataset.clickControlReady = "true";
            video.dataset.userPaused = "false";

            video.muted = true;
            video.defaultMuted = true;
            video.loop = true;
            video.playsInline = true;
            video.preload = "auto";

            video.setAttribute("muted", "");
            video.setAttribute("autoplay", "");
            video.setAttribute("loop", "");
            video.setAttribute("playsinline", "");
            video.setAttribute("tabindex", "0");
            video.setAttribute("role", "button");
            video.setAttribute(
                "aria-label",
                `${video.getAttribute("aria-label") || "MoneyPilot video"}. Click to pause or play.`
            );

            const startVideo = () => {
                if (video.dataset.userPaused !== "true") {
                    video.play().catch(() => {
                        /* O navegador poderá aguardar a primeira interação. */
                    });
                }
            };

            const togglePlayback = () => {
                if (video.paused) {
                    video.dataset.userPaused = "false";
                    video.play().catch(() => {});
                } else {
                    video.dataset.userPaused = "true";
                    video.pause();
                }
            };

            video.addEventListener("loadeddata", startVideo);
            video.addEventListener("canplay", startVideo);

            video.addEventListener("click", togglePlayback);

            video.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    togglePlayback();
                }
            });

            startVideo();
        });
    };

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeMoneyPilotVideos,
            { once: true }
        );
    } else {
        initializeMoneyPilotVideos();
    }

    window.addEventListener("load", initializeMoneyPilotVideos, { once: true });
})();