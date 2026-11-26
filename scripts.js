const contatoForm = document.getElementById("form");
const formStatus = document.querySelector(".form-status");

// Endereço do formulário no Formspree (mensagens são enviadas para o e-mail da conta)
const FORM_ENDPOINT = "https://formspree.io/f/mgakqpdo";

async function enviarContato(event) {
    event.preventDefault();

    const nome = document.getElementById("name").value.trim();
    const mensagem = document.getElementById("message").value.trim();

    if (!nome || !mensagem) {
        formStatus.textContent = "Preencha todos os campos.";
        return;
    }

    if (FORM_ENDPOINT.includes("SEU_ID_AQUI")) {
        formStatus.textContent = "Formulário ainda não configurado.";
        return;
    }

    formStatus.textContent = "Enviando...";

    try {
        const resposta = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: { Accept: "application/json" },
            body: new FormData(contatoForm)
        });

        if (resposta.ok) {
            contatoForm.reset();
            formStatus.textContent = "Mensagem enviada! Obrigado pelo contato.";
        } else {
            formStatus.textContent = "Não foi possível enviar. Tente novamente.";
        }
    } catch {
        formStatus.textContent = "Erro de conexão. Tente novamente.";
    }
}

contatoForm.addEventListener("submit", enviarContato);

// Ano dinâmico no footer
document.getElementById("year").textContent = new Date().getFullYear();

// Dark/Light mode
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

function setTheme(theme) {
    body.classList.toggle("light", theme === "light");
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
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

// Botão voltar ao topo
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
}, { passive: true });

backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
