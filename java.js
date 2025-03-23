
    // Fade-in ao carregar a página
document.addEventListener("DOMContentLoaded", function () {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = "1";
    }, 100);
});

    // 3. Animação de Hover nos Textos
    document.querySelectorAll("p").forEach(p => {
        p.addEventListener("mouseover", () => {
            p.style.transform = "scale(1.1)";
            p.style.transition = "0.5s";
        });
        p.addEventListener("mouseout", () => {
            p.style.transform = "scale(1)";
        });
    });

    // 4. Mensagem ao clicar na imagem do Lockdown
    document.addEventListener("DOMContentLoaded", function () {
    let lockdownImage = document.querySelector(".down img");

    if (lockdownImage) {
        lockdownImage.addEventListener("click", function () {
            alert("Lockdown está te observando...");
        });
    }
});

// 5. Animação de entrada para os atributos
    window.addEventListener("scroll", function () {
        let atributos = document.getElementById("atributos");
        let posicao = atributos.getBoundingClientRect().top;
        let alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            atributos.style.opacity = "1";
            atributos.style.transform = "translateY(0)";
            atributos.style.transition = "0.8s ease-out";
        }
    });