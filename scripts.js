const form = document.querySelector(".formulario-fale-conosco");
const mascara = document.querySelector(".mascara-formulario");

// Função para exibir o formulário
function cliqueiNoBotao() {
    form.style.left = "50%"; // Centraliza o formulário
    form.style.top = "50%"; // Centraliza o formulário
    form.style.transform = "translate(-50%, -50%)"; // Garante que o formulário ficará no centro da tela
    form.style.visibility = "visible"; // Torna o formulário visível
    form.style.opacity = "1"; // Torna o formulário opaco para uma transição suave

    mascara.style.visibility = "visible"; // Exibe a máscara
    mascara.style.opacity = "1"; // Torna a máscara visível
}

// Função para mostrar o formulário ao clicar no link "Fale Conosco"
function mostrarFormulario() {
    cliqueiNoBotao();
}

// Fechar o formulário ao clicar na máscara
mascara.addEventListener("click", () => {
    form.style.visibility = "hidden"; // Oculta o formulário
    form.style.opacity = "0"; // Torna o formulário invisível

    mascara.style.visibility = "hidden"; // Oculta a máscara
    mascara.style.opacity = "0"; // Torna a máscara invisível
});
