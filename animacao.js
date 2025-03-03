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

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form-contato");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio tradicional do formulário
            console.log("Formulário interceptado!");

            let formData = new FormData(form);
            let messageBox = document.getElementById("mensagem-status");

            fetch("processa_formulario.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.json()) // Espera resposta JSON
            .then(data => {
                console.log("Resposta do servidor:", data);

                if (data.status === "success") {
                    messageBox.textContent = "✅ " + data.message;
                    messageBox.className = "sucesso"; // Adiciona classe de sucesso
                } else {
                    messageBox.textContent = "❌ " + data.message;
                    messageBox.className = "erro"; // Adiciona classe de erro
                }

                messageBox.style.display = "block"; // Exibe a mensagem

                // Remove a mensagem após 5 segundos
                setTimeout(() => {
                    messageBox.style.display = "none";
                }, 5000);

                form.reset(); // Limpa o formulário após o envio
            })
            .catch(error => {
                console.error("Erro ao enviar formulário:", error);
            });
        });
    }
});

