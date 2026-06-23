function enviarWhattsApp(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !message) {
        alert("Preencha todos os campos.");
        return;
    }

    const telefone = "5521970431587";
    const texto = `Olá, meu nome é ${name}. ${message}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, "_blank", "noopener,noreferrer");

    document.getElementById("form").reset();
}

// Ano dinâmico no footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dark/Light mode
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const body = document.body;

function setTheme(theme) {
    body.classList.toggle("light", theme === "light");
    themeIcon.className = theme === "light" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    localStorage.setItem("theme", theme);
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
    const next = body.classList.contains("light") ? "dark" : "light";
    setTheme(next);
});

// IntersectionObserver para animação reveal e active link
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, observerOptions);

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Active link com IntersectionObserver
const sections = document.querySelectorAll("section[id], main[id]");
const navLinks = document.querySelectorAll(".menu-link");

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(link => {
                link.classList.remove("active");
                link.removeAttribute("aria-current");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                    link.setAttribute("aria-current", "page");
                }
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => sectionObserver.observe(section));

// Botão voltar ao topo
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
