document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll(".fade-in");

    function verificarScroll() {
        elementos.forEach(el => {
            const posicao = el.getBoundingClientRect().top;
            const alturaTela = window.innerHeight * 0.85; 

            if (posicao < alturaTela) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", verificarScroll);
    verificarScroll();
});